export const personal = {
  name: 'Benedict Z. Castro',
  shortName: 'Benedict Castro',
  email: 'benedict.zcastro@gmail.com',
  linkedin: 'https://www.linkedin.com/in/benedictzcastro/',
  github: 'https://github.com/benicastro',
  location: 'Philippines',
};

export const domains = [
  { n:'01', title:'Python web scraping', description:'Public-source collection, APIs, JSON extraction, Python automation and documented workflows.', key:'python', chip:'Python · APIs · pandas' },
  { n:'02', title:'GTM & account intelligence', description:'ICP qualification, regulated-industry research, account mapping and decision-maker sourcing.', key:'research', chip:'ICP · OSINT · research' },
  { n:'03', title:'CRM & data quality', description:'Standardization, deduplication, validation, enrichment handoffs and traceable data.', key:'crm', chip:'HubSpot · Apollo · SQL' },
  { n:'04', title:'Software engineering', description:'C#/.NET applications, SQL Server reporting, dynamic interfaces and data exports.', key:'software', chip:'C# · ASP.NET · SQL Server' },
];

export const skills = [
  {name: 'Data acquisition & automation', icon:'01', items:['Python', 'requests', 'BeautifulSoup', 'Selenium', 'Playwright', 'API/JSON extraction', 'Browser network inspection', 'pandas', 'CSV handling', 'Databricks']},
  {name: 'Research & GTM intelligence', icon:'02', items:['ICP definition & segmentation', 'Company & decision-maker sourcing', 'Regulatory/project research', 'Public-source validation', 'Source attribution', 'Industry & geographic classification', 'Enrichment research']},
  {name: 'CRM & data quality', icon:'03', items:['HubSpot-ready imports', 'Apollo enrichment inputs', 'Deduplication', 'Field standardization', 'SQL', 'Quality flags', 'Data reconciliation', 'Excel / Google Sheets']},
  {name: 'Software development', icon:'04', items:['C#', 'ASP.NET MVC / .NET', 'SQL Server', 'Stored procedures', 'JavaScript', 'jQuery / AJAX', 'Razor views', 'PDF / Excel exports', 'Git / Azure DevOps']},
];

export const escapeHTML = (v='') => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const base = (()=>{ const raw=process.env.SITE_BASE||'/'; return '/'+raw.replace(/^\/+|\/+$/g,'')+(raw.replace(/\//g,'')?'/':''); })();
export const href = (path='/') => base + String(path).replace(/^\//,'');
const siteUrl = (process.env.SITE_URL || '').replace(/\/$/,'');
const canonical = (path='/') => siteUrl ? siteUrl + '/' + path.replace(/^\//,'') : '';
const navItems = [
  ['Home','/','home'], ['Projects','/projects/','projects'], ['Case studies','/case-studies/','case-studies'],
  ['About','/about/','about'], ['Skills','/skills/','skills'], ['Resume','/resume/','resume'],
];

export function iconArrow() { return '<span aria-hidden="true">↗</span>'; }
export function pill(text) {return `<span class="tiny-pill">${escapeHTML(text)}</span>`;}
export function taglist(arr) {return `<div class="taglist">${arr.map(pill).join('')}</div>`;}

export function visual(type, small=false) {
 const label = {
  code:'PYTHON / COLLECTION', network:'RESEARCH / ICP MAPPING', table:'DATA / QUALITY ASSURANCE',report:'APPLICATION / REPORTING', pipeline:'PYTHON / ACCOUNT INTELLIGENCE', learning:'BROWSER / INTERACTIVE LEARNING'
 }[type]||'DATA WORKFLOW';
 let body='';
 if (type==='code') body=`<div class="code-lines"><span><b>def</b> extract(source):</span><span class="indent"><i>response</i> = inspect(source)</span><span class="indent"><b>return</b> parse_json(response)</span><span class="muted-line"># validate → normalize → export</span></div>`;
 if (type==='network') body=`<div class="network-visual"><div class="network-node n1">UTILITY</div><div class="network-node n2">REGULATOR</div><div class="network-node n3">PROJECT</div><div class="network-node n4">ICP FIT</div><svg viewBox="0 0 340 150" preserveAspectRatio="none" aria-hidden="true"><path d="M81 31 L170 76 L270 30 M170 76 L88 126 M170 76 L267 126"/></svg></div>`;
 if (type==='table') body=`<div class="mini-table"><div class="mrow mhead"><span>ACCOUNT</span><span>SEGMENT</span><span>CHECK</span></div><div class="mrow"><span>sample_001</span><span>Utility</span><span class="ok">Verified</span></div><div class="mrow"><span>sample_002</span><span>Mining</span><span class="warn">Review</span></div><div class="mrow"><span>sample_003</span><span>Energy</span><span class="ok">Verified</span></div></div>`;
 if (type==='pipeline') body=`<div class="mini-table"><div class="mrow mhead"><span>EIA SOURCE</span><span>JOIN KEY</span><span>OUTPUT</span></div><div class="mrow"><span>Utility</span><span>Utility ID</span><span>6,946 accounts</span></div><div class="mrow"><span>Ownership</span><span>Owner ID</span><span>2,047 owners</span></div><div class="mrow"><span>Linked</span><span>Exact IDs</span><span>313 matches</span></div></div>`;
 if (type==='learning') body=`<div class="mini-table" style="padding:12px"><div class="mrow mhead"><span>MISSION</span><span>INTERACTION</span><span>MODE</span></div><div class="mrow"><span>⭐ Subtraction</span><span>Tap counters</span><span>PLAY</span></div><div class="mrow"><span>🧩 Patterns</span><span>Visual puzzle</span><span>PLAY</span></div><div class="mrow"><span>📝 Worksheets</span><span>82 questions</span><span>PRINT</span></div></div>`;
 if (type==='report') body=`<div class="report-visual"><div class="report-top"><span>REPORT ENGINE</span><span>SQL → .NET</span></div><div class="bargraph"><span style="height:44%"></span><span style="height:70%"></span><span style="height:53%"></span><span style="height:84%"></span><span style="height:65%"></span><span style="height:93%"></span><span style="height:72%"></span></div><div class="report-bottom"><span>QUERY</span><span>RECONCILE</span><span>EXPORT</span></div></div>`;
 return `<div class="project-visual v-${type}${small?' visual-small':''}" aria-label="Illustrative ${escapeHTML(label.toLowerCase())} diagram"><div class="visual-top"><span class="visual-dot"></span><span>${label}</span><span class="visual-plus">+</span></div>${body}<span class="visual-watermark">ILLUSTRATIVE</span></div>`;
}

export function projectCard(p, opts={}) {
 return `<article class="project-card" data-category="${escapeHTML(p.categoryId)}">
  <a class="project-card-image" href="${href('/projects/'+p.slug+'/')}" tabindex="-1" aria-hidden="true">${visual(p.visual)}</a>
  <div class="project-card-body"><div class="project-meta"><span>${escapeHTML(p.category)}</span><span>${escapeHTML(p.period)}</span></div>
  <h3><a href="${href('/projects/'+p.slug+'/')}">${escapeHTML(p.shortTitle||p.title)} <span class="inline-arrow" aria-hidden="true">↗</span></a></h3>
  <p>${escapeHTML(p.intro)}</p>
  <div class="project-card-bottom"><span class="provenance"><span class="provenance-dot"></span> ${p.context.startsWith('Independent')?'Independent public project':'Anonymized professional work'}</span><span class="circle-arrow" aria-hidden="true">↗</span></div></div>
 </article>`;
}

export function layout({title='',description='Portfolio of Benedict Z. Castro, spanning Python data collection, B2B account intelligence, CRM data quality and C#/.NET software development.',active='',body='',path='/'}) {
 const fullTitle=title?`${title} | Benedict Castro`:'Benedict Castro | Data Systems, Research & Software Engineering';
 const absolute=canonical(path);
 return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
 <meta name="theme-color" content="#0a1727"><meta name="description" content="${escapeHTML(description)}">
 <meta property="og:type" content="website"><meta property="og:title" content="${escapeHTML(fullTitle)}"><meta property="og:description" content="${escapeHTML(description)}">
 <meta property="og:image" content="${absolute?escapeHTML(siteUrl+'/assets/og-cover.png'):escapeHTML(href('/assets/og-cover.png'))}">
 ${absolute?`<link rel="canonical" href="${escapeHTML(absolute)}">`:''}
 <title>${escapeHTML(fullTitle)}</title><link rel="icon" href="${href('/assets/favicon.svg')}" type="image/svg+xml"><link rel="stylesheet" href="${href('/assets/styles.css')}">
 <script src="${href('/assets/site.js')}" defer></script></head><body>
 <a class="skip-link" href="#main">Skip to content</a>
 <header class="site-header"><div class="container nav-shell">
 <a class="brand" href="${href('/')}" aria-label="Benedict Castro home"><span class="brandmark">BC<span>.</span></span><span class="brand-copy">BENEDICT CASTRO<small>DATA · RESEARCH · ENGINEERING</small></span></a>
 <button class="nav-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" aria-label="Open navigation"><span></span><span></span><span></span></button>
 <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">${navItems.map(([n,u,k])=>`<a href="${href(u)}" ${active===k?'aria-current="page"':''}>${n}</a>`).join('')}<a class="nav-contact" href="${href('/contact/')}">Let's connect <span aria-hidden="true">↗</span></a></nav>
 </div></header>
 <main id="main">${body}</main>
 <footer class="site-footer"><div class="container"><div class="footer-top"><div><a class="footer-brand" href="${href('/')}">Benedict Castro<span>.</span></a><p>Building clarity from complex data.</p></div><div class="footer-links"><a href="${href('/projects/')}">Selected work</a><a href="${href('/resume/')}">Resume</a><a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="${personal.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:${personal.email}">Email ↗</a></div></div><div class="footer-base"><span>© ${new Date().getFullYear()} Benedict Z. Castro</span><span>Designed to make the work speak for itself. <a href="#main">Back to top ↑</a></span></div></div></footer>
 </body></html>`;
}

export function pageHero({eyebrow,title,description,number}) {
 return `<section class="sub-hero"><div class="container sub-hero-inner"><div><div class="eyebrow"><span class="eyebrow-dot"></span>${escapeHTML(eyebrow)}</div><h1>${title}</h1><p>${escapeHTML(description)}</p></div>${number?`<div class="huge-number" aria-hidden="true">${number}</div>`:''}</div></section>`;
}

export function contactBanner() {
 return `<section class="contact-banner section"><div class="container"><div class="contact-banner-box"><div><div class="eyebrow"><span class="eyebrow-dot"></span>LET'S BUILD SOMETHING USEFUL</div><h2>Need reliable data,<br><em>not just more data?</em></h2><p>I'm interested in technically demanding research, automation, CRM data, and software projects.</p></div><a class="btn btn-light" href="mailto:${personal.email}?subject=Project%20inquiry%20%E2%80%94%20Benedict%20Castro">Start a conversation <span aria-hidden="true">↗</span></a></div></div></section>`;
}
