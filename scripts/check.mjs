import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const base=(process.env.SITE_BASE||'/').replace(/\/$/,'');
const prefix=base==='/'?'':base;
const projectData=JSON.parse(fs.readFileSync(path.join(root,'src/data/projects.json'),'utf8'));
const pages=['','projects','case-studies','about','skills','resume','contact',
  ...projectData.map(project=>`projects/${project.slug}`)];
for(const route of pages){
 const file=path.join(dist,route,'index.html');
 assert(fs.existsSync(file),`missing page ${route}`);
 const html=fs.readFileSync(file,'utf8');
 assert(html.includes('<main id="main">'),`missing main region: ${route}`);
 assert(html.includes('<meta name="description"'),`missing description: ${route}`);
 const links=[...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)].map(m=>m[1]);
 for(const url of links){
  const [pathname]=url.split(/[?#]/);
  assert(pathname.startsWith(prefix+'/'),`wrong base for link ${url}`);
  let target=path.join(dist,pathname.slice(prefix.length));
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  assert(fs.existsSync(target),`missing internal link target ${url} in ${route}`);
 }
}
assert(fs.existsSync(path.join(dist,'resume.pdf')),'downloadable resume absent');
assert(fs.existsSync(path.join(dist,'assets','styles.css')),'styles absent');
assert(fs.existsSync(path.join(dist,'assets','site.js')),'javascript absent');
console.log(`Validated ${pages.length} pages, local paths, assets, and PDF.`);
