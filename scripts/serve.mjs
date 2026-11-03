import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.pdf':'application/pdf','.xml':'application/xml','.txt':'text/plain; charset=utf-8','.csv':'text/csv; charset=utf-8'};
http.createServer((req,res)=>{
  let decoded;
  try{decoded=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
  const requested=path.resolve(root,'.'+decoded);
  if(requested!==root&&!requested.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  let file=requested;
  try{if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html'); if(!fs.existsSync(file)||!fs.statSync(file).isFile())throw Error('not found');res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});fs.createReadStream(file).pipe(res);}
  catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Portfolio preview: http://127.0.0.1:${port}`));
