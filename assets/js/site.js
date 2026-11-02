(() => {
  'use strict';
  const cfg = window.VERSACORE_CONFIG || {};
  const siteUrl = cfg.siteUrl || 'https://versa-core.github.io/Service/';
  const setMeta = (selector, value) => { const el = document.querySelector(selector); if (el) el.setAttribute('content', value); };
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = siteUrl;
  setMeta('meta[property="og:url"]', siteUrl);
  const address = cfg.address || 'M Block, Hafez Baba Nagar, Chandrayangutta, Hyderabad, Telangana 500058';
  const phone = cfg.phone || '+91 8686863588';
  const email = cfg.email || 'versacore.service@gmail.com';
  const areas = ['Chandrayangutta','Hafez Baba Nagar','Old City','Moin Bagh','Gachibowli','Tellapur','Narsingi','Musheerabad','Golconda','Kanchanbagh','KCR Nagar','Gurramguda','Ballaguda','Khilwath Road','Enjanbowli'];
  const services = [
    ['POP & False Ceilings','POP ceiling and false ceiling work with coordinated wall panelling and die work.'],
    ['Wall Panelling','Decorative wall panelling coordinated with matching die work and interior finishes.'],
    ['Die Work & Mouldings','Decorative die work and moulding details coordinated with wall panelling.'],
    ['Partitions','Interior partitions planned with wall panelling and die work where suitable.'],
    ['Cabinet Work','Custom cabinet work coordinated with wall panelling and die details.'],
    ['PVC Work – All Types','PVC interior work of different types, coordinated with wall panelling and die work.'],
    ['Complete Interiors','Complete interior work including ceilings, wall panelling, die work, partitions, cabinets and PVC.']
  ];
  const projects = JSON.parse(document.getElementById('project-data').textContent);
  const graph = [
    {
      '@type':'HomeAndConstructionBusiness','@id':siteUrl+'#business','name':'VERSACORE',
      'url':siteUrl,'image':siteUrl+'assets/images/profile-square.webp',
      'logo':siteUrl+'assets/svg/versacore-logo.svg',
      'description':'VERSACORE is a POP and interior contracting business in Chandrayangutta, Hyderabad, offering POP and false ceilings, wall panelling, die work, partitions, cabinet work, PVC work and complete interiors.',
      'telephone':phone,'email':email,
      'address':{'@type':'PostalAddress','streetAddress':'M Block, Hafez Baba Nagar, Chandrayangutta','addressLocality':'Hyderabad','addressRegion':'Telangana','postalCode':'500058','addressCountry':'IN'},
      'areaServed':areas.map(name=>({'@type':'Place','name':name+', Hyderabad'})),
      'founder':{'@type':'Person','name':'Syed Mohammed'},
      'foundingDate':'2014',
      'identifier':[{'@type':'PropertyValue','propertyID':'Udyam Registration Number','value':'UDYAM-TS-02-0299621'},{'@type':'PropertyValue','propertyID':'GSTIN','value':'36FOBPM8845B1ZU'}],
      'hasOfferCatalog':{'@type':'OfferCatalog','name':'POP & Interior Services','itemListElement':services.map(([name,desc])=>({'@type':'Offer','itemOffered':{'@type':'Service','name':name,'description':desc,'provider':{'@id':siteUrl+'#business'}}}))}
    },
    {'@type':'Organization','@id':siteUrl+'#organization','name':'VERSACORE','url':siteUrl,'logo':siteUrl+'assets/svg/versacore-logo.svg','founder':{'@type':'Person','name':'Syed Mohammed'}},
    {'@type':'WebSite','@id':siteUrl+'#website','url':siteUrl,'name':'VERSACORE','publisher':{'@id':siteUrl+'#organization'},'inLanguage':'en-IN'},
    {'@type':'WebPage','@id':siteUrl+'#webpage','url':siteUrl,'name':'POP & Interior Contractors in Hyderabad | VERSACORE','isPartOf':{'@id':siteUrl+'#website'},'about':{'@id':siteUrl+'#business'},'inLanguage':'en-IN'},
    {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':siteUrl}]},
    {'@type':'FAQPage','mainEntity':Array.from(document.querySelectorAll('.faq-item')).map(el=>({'@type':'Question','name':el.querySelector('summary').textContent.trim(),'acceptedAnswer':{'@type':'Answer','text':el.querySelector('p').textContent.trim()}}))},
    ...projects.map((p,i)=>({'@type':'ImageObject','@id':siteUrl+'#portfolio-image-'+(i+1),'name':p.title+' — illustrative interior visual','caption':p.title+'; '+p.area+'. Image is illustrative, not a photograph of the named site.','contentUrl':siteUrl+'assets/images/'+['bridal-showroom','karachi-bakery','jannath-welding-mall','melody-muppa','raja-deluxe-theatre','cris-town-apartment','police-si-home','rajapushpa-project','alien-space-station','my-home-vihanga','kanchanbagh-police-station','kullur-2bhk','hera-masjid','golconda-fort-apartment'][i]+'.webp'}))
  ];
  const ld = document.createElement('script'); ld.type='application/ld+json'; ld.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph}); document.head.appendChild(ld);

  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.primary-nav');
  menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('open',!open);});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});const filter=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>card.hidden=filter!=='all'&&card.dataset.category!==filter);}));
  const modal=document.getElementById('project-modal'), data=projects;
  const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
  document.querySelectorAll('.project-card').forEach(card=>{const open=()=>{const p=data[Number(card.dataset.project)];document.getElementById('modal-title').textContent=p.title;document.getElementById('modal-area').textContent=p.area+' · '+p.category+' · Completed';document.getElementById('modal-desc').textContent=p.description+' The image shown in the portfolio is illustrative, not a verified photograph of this site.';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus();};card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
  modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});
  const form=document.getElementById('quote-form'), err=document.getElementById('form-error');
  form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const name=String(fd.get('name')||'').trim(),loc=String(fd.get('location')||'').trim(),service=String(fd.get('service')||'').trim(),details=String(fd.get('details')||'').trim();if(!name||!loc||!service){err.textContent='Please enter your name, project location and service required.';return;}err.textContent='';const message=`Hello VERSACORE,\n\nMy name is ${name}.\nProject location: ${loc}\nService required: ${service}\nDetails: ${details||'Please contact me to discuss the requirement.'}\n\nPlease let me know the next steps.`;const wa=(cfg.whatsapp||'https://wa.me/918686863588')+'?text='+encodeURIComponent(message);window.open(wa,'_blank','noopener');});
  const emailLink=document.getElementById('email-fallback');form.addEventListener('input',()=>{const fd=new FormData(form);const subject='VERSACORE project enquiry';const body=`Name: ${fd.get('name')||''}\nLocation: ${fd.get('location')||''}\nService: ${fd.get('service')||''}\nDetails: ${fd.get('details')||''}`;emailLink.href='mailto:'+(cfg.email||'versacore.service@gmail.com')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});
  document.getElementById('year').textContent=new Date().getFullYear();
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
})();
