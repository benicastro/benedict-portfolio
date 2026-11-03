(() => {
  'use strict';
  const menuButton=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.primary-nav');
  if(menuButton && nav){
    const close=()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');};
    menuButton.addEventListener('click',()=>{const isOpen=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();});
    document.addEventListener('click',ev=>{if(!menuButton.contains(ev.target) && !nav.contains(ev.target))close();});
  }

  const filterBtns=[...document.querySelectorAll('[data-filter]')];
  if(filterBtns.length){
    const cards=[...document.querySelectorAll('#project-list .project-card')];
    const label=document.getElementById('filter-result');
    filterBtns.forEach(btn=>btn.addEventListener('click',()=>{
      const filter=btn.dataset.filter;
      filterBtns.forEach(b=>{const on=b===btn;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});
      let count=0;
      for(const c of cards){const match=filter==='all'||c.dataset.category===filter;c.classList.toggle('is-hidden',!match);if(match)count++;}
      if(label)label.textContent=`Showing ${count} ${count===1?'project':'projects'}`;
    }));
  }

  // Fictional .example-domain records: not scraped data or professional outcomes.
  const raw=[
    ['Harbor Current Energy','harborcurrent.example','Electric Utility','San Francisco','Review'],
    ['Harbor Current Energy LLC','harborcurrent.example','Power / Utilities','SF, CA','Duplicate?'],
    ['Blue Meridian Mining','bluemeridian.example','Mining','Toronto','Missing info'],
    ['Northstar Grid Co.','northstargrid.example','Grid Operator','Ottawa','Review']
  ];
  const clean=[
    ['Harbor Current Energy','harborcurrent.example','Utilities','San Francisco, CA','Duplicate flagged'],
    ['Blue Meridian Mining','bluemeridian.example','Mining','Toronto, ON','Needs verification'],
    ['Northstar Grid Co.','northstargrid.example','Grid operator','Ottawa, ON','Needs verification']
  ];
  let current='raw';
  const tabs=[...document.querySelectorAll('.demo-tab')];
  const tableHead=document.getElementById('demo-thead');
  const tableBody=document.getElementById('demo-tbody');
  const dataLabel=document.getElementById('demo-data-label');
  const countLabel=document.getElementById('demo-count');
  const statusLabel=document.getElementById('demo-status');
  function renderTable(){
    if(!tableHead||!tableBody)return;
    const rows=current==='raw'?raw:clean;
    const headings=['ACCOUNT','DOMAIN','SEGMENT','LOCATION','STATUS'];
    tableHead.textContent='';tableBody.textContent='';
    const headRow=document.createElement('tr');
    for(const label of headings){const th=document.createElement('th');th.scope='col';th.textContent=label;headRow.appendChild(th);}tableHead.appendChild(headRow);
    for(const data of rows){const tr=document.createElement('tr');for(const [i,value] of data.entries()){const td=document.createElement('td');td.textContent=value;if(i===4)td.className=/duplicate|missing|verification/i.test(value)?'status-warn':'status-muted';tr.appendChild(td);}tableBody.appendChild(tr);}
    if(dataLabel)dataLabel.textContent=current==='raw'?'UNPROCESSED SAMPLE ROWS':'STANDARDIZED SAMPLE ROWS';
    if(countLabel)countLabel.textContent=`${rows.length} RECORDS`;
    if(statusLabel)statusLabel.textContent=current==='raw'?'Duplicate candidate and missing fields are deliberately included.':'Duplicate candidate consolidated for display; unresolved fields remain flagged.';
  }
  if(tabs.length){tabs.forEach(t=>t.addEventListener('click',()=>{current=t.dataset.view;tabs.forEach(b=>{const on=b===t;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});renderTable();}));renderTable();}
  const download=document.getElementById('download-sample');
  if(download)download.addEventListener('click',()=>{
    const rows=current==='raw'?raw:clean;
    const csv=[['company','domain','segment','location','review_status'],...rows].map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`fictional-${current}-sample.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  });
  const copy=document.getElementById('copy-email');
  const feedback=document.getElementById('copy-feedback');
  if(copy)copy.addEventListener('click',async()=>{
    const email=copy.dataset.email;
    try{if(!navigator.clipboard)throw new Error('Clipboard API unavailable');await navigator.clipboard.writeText(email);if(feedback)feedback.textContent='Email copied.';}
    catch{if(feedback)feedback.textContent=`Copy manually: ${email}`;}
  });
})();
