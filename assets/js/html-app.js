(function(){
'use strict';

const DATA=window.PROMPTLA_DATA||{prompts:[],categories:{},collections:{},models:[]};
const body=document.body;
const PAGE=body?.dataset.page||'detail';
const ROOT=body?.dataset.root||'';
const SITE_URL='https://promptla.page.gd/';
const KEYS={
 users:'promptla_v2_users',session:'promptla_v2_session',likes:'promptla_v2_likes',saves:'promptla_v2_saves',copies:'promptla_v2_copies',
 promptComments:'promptla_v2_prompt_comments',settings:'promptla_v2_settings',recent:'promptla_v2_recent'
};

function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}
function attr(v){return esc(v).replace(/`/g,'&#096;');}
function path(p){p=String(p||''); if(!p||/^(https?:|data:|blob:|#|mailto:|tel:)/i.test(p)) return p; if(p.startsWith('../')) return p; return ROOT+p.replace(/^\//,'');}
function page(p){
  const clean=String(p||'').replace(/^\//,'');
  const normalized=location.pathname.replace(/\\/g,'/');
  if(normalized.includes('/pages/')) return clean;
  if(normalized.includes('/games/')) return '../pages/'+clean;
  return 'pages/'+clean;
}
function now(){return new Date().toISOString();}
function uid(prefix='id'){return prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8);}
function read(key,fallback){try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback;}catch(e){return fallback;}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){window.showSiteToast?.('Tarayıcı depolama alanı dolu. Bazı veriler kaydedilemedi.','error');return false;}}
function hashPassword(s){let h=2166136261; for(let i=0;i<String(s).length;i++){h^=String(s).charCodeAt(i);h=Math.imul(h,16777619);} return (h>>>0).toString(16);}
function toast(m,t='success'){window.showSiteToast?window.showSiteToast(m,t):alert(m);}
function fmtDate(s){try{return new Intl.DateTimeFormat('tr-TR',{dateStyle:'medium'}).format(new Date(s));}catch(e){return s||'';}}
function initials(name){return String(name||'P').trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();}
function categoryLabel(cat){return DATA.categories?.[cat]?.label||cat||'Genel';}
function getUsers(){return read(KEYS.users,[]);} function setUsers(v){write(KEYS.users,v);}
function currentUser(){const id=read(KEYS.session,null); return getUsers().find(u=>u.id===id)||null;}
function requireUser(action){const u=currentUser(); if(u) return u; toast(action+' için giriş yapmalısın.','error'); window.openAuthModal?.('login'); return null;}
function userSet(key,userId){const all=read(key,{}); return new Set(all[userId]||[]);}
function saveUserSet(key,userId,set){const all=read(key,{});all[userId]=[...set];write(key,all);}
function copyCounts(){return read(KEYS.copies,{});}
function combinedPrompts(){return [...DATA.prompts];}
function findPrompt(slugOrId){return combinedPrompts().find(p=>p.slug===slugOrId||String(p.id)===String(slugOrId));}
function promptUrl(p){return page('prompt-detay.html?slug='+encodeURIComponent(p.slug));}
function replaceVars(text,values){return String(text||'').replace(/\[([A-Z0-9_]+)\]/g,(m,k)=>values[k]||m);}
function activeVersionLabel(v){return v==='expert'?'Uzman':v==='advanced'?'Gelişmiş':'Hızlı';}

function seed(){
  const users=getUsers().filter(u=>u.id!=='local-admin').map(({role,...u})=>u);
  if(JSON.stringify(getUsers())!==JSON.stringify(users)) setUsers(users);
  if(!localStorage.getItem(KEYS.settings)) write(KEYS.settings,{weeklyPromptId:8,siteLogoText:'PROMPT',siteLogoAccent:'LA'});
}

function applySeo(title,description,canonical,ogImage){
  if(title) document.title=title;
  const ensure=(selector,tag,attrs)=>{let el=document.querySelector(selector);if(!el){el=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));document.head.appendChild(el);}return el;};
  const desc=ensure('meta[name="description"]','meta',{name:'description'}); if(description) desc.content=description;
  const can=ensure('link[rel="canonical"]','link',{rel:'canonical'}); can.href=canonical||SITE_URL;
  const ogt=ensure('meta[property="og:title"]','meta',{property:'og:title'}); ogt.content=title||document.title;
  const ogd=ensure('meta[property="og:description"]','meta',{property:'og:description'}); ogd.content=description||'';
  const ogu=ensure('meta[property="og:url"]','meta',{property:'og:url'}); ogu.content=canonical||SITE_URL;
  const ogi=ensure('meta[property="og:image"]','meta',{property:'og:image'}); ogi.content=ogImage||SITE_URL+'images/urun1.webp';
  ensure('meta[property="og:type"]','meta',{property:'og:type'}).content='website';
}

function renderAuthModal(){
  if(document.getElementById('authModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div id="authModal" class="modal" aria-hidden="true"><div class="modal-content"><button class="close-btn" type="button" aria-label="Kapat" onclick="closeAuthModal()">×</button><div class="auth-tabs"><button class="tab-btn active" id="tab-login" type="button" onclick="switchAuthTab('login')">Giriş Yap</button><button class="tab-btn" id="tab-register" type="button" onclick="switchAuthTab('register')">Kayıt Ol</button></div><form id="loginForm" class="auth-form active"><div class="divider"><span>yerel hesap</span></div><label>E-posta<input type="email" name="email" required autocomplete="email"></label><label>Şifre<input type="password" name="password" required autocomplete="current-password"></label><button class="btn btn-full" type="submit">Giriş Yap</button><small class="auth-note">Veriler yalnızca bu tarayıcıda saklanır.</small></form><form id="registerForm" class="auth-form"><div class="divider"><span>yeni yerel hesap</span></div><label>Ad Soyad<input type="text" name="name" required maxlength="60"></label><label>E-posta<input type="email" name="email" required autocomplete="email"></label><label>Şifre<input type="password" name="password" minlength="8" required autocomplete="new-password"></label><button class="btn btn-full" type="submit">Kayıt Ol</button><small class="auth-note">Hesap yalnızca favori, beğeni ve yorumlarını bu tarayıcıda saklar.</small></form></div></div>`);
  bindAuthForms();
}
window.openAuthModal=function(tab='login'){renderAuthModal();window.switchAuthTab(tab);const m=document.getElementById('authModal');m.style.display='flex';m.setAttribute('aria-hidden','false');};
window.closeAuthModal=function(){const m=document.getElementById('authModal');if(m){m.style.display='none';m.setAttribute('aria-hidden','true');}};
window.switchAuthTab=function(tab){document.querySelectorAll('#authModal .tab-btn').forEach(x=>x.classList.toggle('active',x.id==='tab-'+tab));document.querySelectorAll('#authModal .auth-form').forEach(x=>x.classList.toggle('active',x.id===(tab==='login'?'loginForm':'registerForm')));};
function login(email,password){const u=getUsers().find(x=>x.email.toLowerCase()===String(email).toLowerCase());if(!u||u.passwordHash!==hashPassword(password)) return false;write(KEYS.session,u.id);return true;}
function register(name,email,password){const users=getUsers();if(users.some(x=>x.email.toLowerCase()===email.toLowerCase())) return {ok:false,message:'Bu e-posta ile kayıtlı bir yerel hesap var.'};const u={id:uid('user'),name:name.trim(),email:email.trim().toLowerCase(),passwordHash:hashPassword(password),createdAt:now()};users.push(u);setUsers(users);write(KEYS.session,u.id);return {ok:true,user:u};}
function bindAuthForms(){
  document.getElementById('loginForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);if(login(fd.get('email'),fd.get('password'))){toast('Giriş yapıldı.');window.closeAuthModal();renderHeader();renderCurrentPage();}else toast('E-posta veya şifre hatalı.','error');});
  document.getElementById('registerForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const p=String(fd.get('password'));if(p.length<8){toast('Şifre en az 8 karakter olmalı.','error');return;}const r=register(String(fd.get('name')),String(fd.get('email')),p);if(!r.ok){toast(r.message,'error');return;}toast('Yerel hesabın oluşturuldu.');window.closeAuthModal();renderHeader();renderCurrentPage();});
}

function renderHeader(){
  const settings=read(KEYS.settings,{});document.querySelectorAll('[data-logo-text]').forEach(x=>x.textContent=settings.siteLogoText||'PROMPT');document.querySelectorAll('[data-logo-accent]').forEach(x=>x.textContent=settings.siteLogoAccent||'LA');
  document.querySelectorAll('.hamburger').forEach(btn=>{btn.setAttribute('role','button');btn.setAttribute('tabindex','0');btn.setAttribute('aria-label','Menüyü aç');btn.setAttribute('aria-expanded','false');btn.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();window.toggleMenu();}});});
  document.querySelectorAll('.nav-dropdown:not(.ai-nav-dropdown) .nav-submenu').forEach(menu=>{
    if(!menu.querySelector('[data-added="builder"]')) menu.insertAdjacentHTML('beforeend',`<a data-added="builder" href="${page('prompt-builder.html')}">Prompt Builder</a><a data-added="guide" href="${page('rehber.html')}">Prompt Rehberi</a>`);
  });
  const slot=document.getElementById('accountMenuSlot'); if(!slot) return; const u=currentUser();
  if(u){slot.innerHTML=`<button class="account-btn account-btn-with-photo" onclick="toggleDropdown(event)" type="button"><span class="account-name">${esc(u.name.split(' ')[0])}</span><span class="account-avatar-sm">${esc(initials(u.name))}</span></button><div class="account-dropdown" id="accountDropdown"><a href="${page('profil.html')}">Profilim</a><a href="#" data-local-logout>Çıkış Yap</a></div>`;}
  else{slot.innerHTML=`<button class="account-btn" onclick="toggleDropdown(event)" type="button">Hesap</button><div class="account-dropdown" id="accountDropdown"><a href="#" onclick="openAuthModal('login');return false;">Giriş Yap</a><a href="#" onclick="openAuthModal('register');return false;">Kayıt Ol</a></div>`;}
  slot.querySelector('[data-local-logout]')?.addEventListener('click',e=>{e.preventDefault();localStorage.removeItem(KEYS.session);toast('Çıkış yapıldı.');renderHeader();renderCurrentPage();});
}

function togglePromptAction(promptId,type){const u=requireUser(type==='like'?'Beğenme':'Kaydetme');if(!u)return null;const key=type==='like'?KEYS.likes:KEYS.saves;const set=userSet(key,u.id);const id=String(promptId);if(set.has(id))set.delete(id);else set.add(id);saveUserSet(key,u.id,set);return set.has(id);}
function promptMetrics(id){const users=getUsers();let likes=0,saves=0;const l=read(KEYS.likes,{}),s=read(KEYS.saves,{});users.forEach(u=>{if((l[u.id]||[]).includes(String(id)))likes++;if((s[u.id]||[]).includes(String(id)))s++;});return {likes,saves,copies:Number(copyCounts()[id]||0)};}
async function copyPrompt(prompt,version='quick',values={}){const text=replaceVars(prompt.versions[version],values);const ok=await window.promptlaCopyText(text);if(ok){const c=copyCounts();c[prompt.id]=Number(c[prompt.id]||0)+1;write(KEYS.copies,c);}return ok;}
function markRecent(prompt){const list=read(KEYS.recent,[]).filter(x=>x!==prompt.id);list.unshift(prompt.id);write(KEYS.recent,list.slice(0,10));}

function promptCard(p){const u=currentUser();const liked=u?userSet(KEYS.likes,u.id).has(String(p.id)):false;const saved=u?userSet(KEYS.saves,u.id).has(String(p.id)):false;const m=promptMetrics(p.id);return `<article class="prompt-card-modern prompt-card-v2" data-category="${attr(p.category)}" data-prompt-id="${attr(p.id)}"><a class="prompt-card-image" href="${attr(promptUrl(p))}"><img src="${attr(path(p.thumbnail||p.image))}" alt="${attr(p.title)}" loading="lazy" width="640" height="360"><span class="prompt-level-badge">${esc(p.level)}</span></a><div class="prompt-card-content"><div class="prompt-card-meta"><span>${esc(categoryLabel(p.category))}</span><span>${esc(p.subcategory)}</span></div><h3><a href="${attr(promptUrl(p))}">${esc(p.title)}</a></h3><p class="prompt-card-description">${esc(p.description)}</p><div class="prompt-model-tags">${p.models.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="prompt-stat-row"><span>♡ ${m.likes}</span><span>☆ ${m.saves}</span><span>⧉ ${m.copies}</span></div><div class="profile-action-row prompt-card-actions"><button class="mini-action-btn ${liked?'active':''}" data-prompt-like="${attr(p.id)}" type="button">${liked?'♥ Beğenildi':'♡ Beğen'}</button><button class="mini-action-btn ${saved?'active':''}" data-prompt-save="${attr(p.id)}" type="button">${saved?'★ Kaydedildi':'☆ Kaydet'}</button><button class="mini-action-btn" data-prompt-copy="${attr(p.id)}" type="button">⧉ Hızlı Kopyala</button><a class="mini-action-btn" href="${attr(promptUrl(p))}">Aç</a></div></div></article>`;}

let libraryState={search:'',category:'all',subcategory:'all',model:'all',level:'all',sort:'featured',page:1,pageSize:12};
function filteredPrompts(){let list=combinedPrompts();const s=libraryState.search.toLocaleLowerCase('tr-TR').trim();if(s)list=list.filter(p=>[p.title,p.description,p.subcategory,...p.tags,...p.models].join(' ').toLocaleLowerCase('tr-TR').includes(s));if(libraryState.category!=='all')list=list.filter(p=>p.category===libraryState.category);if(libraryState.subcategory!=='all')list=list.filter(p=>p.subcategory===libraryState.subcategory);if(libraryState.model!=='all')list=list.filter(p=>p.models.includes(libraryState.model));if(libraryState.level!=='all')list=list.filter(p=>p.level===libraryState.level);const sort=libraryState.sort;if(sort==='new')list.sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));else if(sort==='copied')list.sort((a,b)=>promptMetrics(b.id).copies-promptMetrics(a.id).copies);else if(sort==='liked')list.sort((a,b)=>promptMetrics(b.id).likes-promptMetrics(a.id).likes);else if(sort==='az')list.sort((a,b)=>a.title.localeCompare(b.title,'tr'));else list.sort((a,b)=>(Number(b.featured)-Number(a.featured))||a.id-b.id);return list;}
function renderLibrary(){const grid=document.getElementById('promptGrid');if(!grid)return;const list=filteredPrompts();const pages=Math.max(1,Math.ceil(list.length/libraryState.pageSize));libraryState.page=Math.min(libraryState.page,pages);const slice=list.slice((libraryState.page-1)*libraryState.pageSize,libraryState.page*libraryState.pageSize);grid.innerHTML=slice.map(promptCard).join('')||'<div class="profile-empty-state">Bu filtrelerle eşleşen prompt bulunamadı.</div>';const count=document.getElementById('promptResultCount');if(count)count.textContent=`${list.length} prompt bulundu`;const pag=document.getElementById('promptPagination');if(pag)pag.innerHTML=`<button class="mini-action-btn" data-page-prev ${libraryState.page===1?'disabled':''}>← Önceki</button><span>${libraryState.page} / ${pages}</span><button class="mini-action-btn" data-page-next ${libraryState.page===pages?'disabled':''}>Sonraki →</button>`;}
function initPromptLibrary(){
  const params=new URLSearchParams(location.search);libraryState.category=params.get('cat')||'all';
  const controls=document.getElementById('promptFilters');if(controls){
    const categories=Object.entries(DATA.categories).map(([k,v])=>`<option value="${attr(k)}" ${libraryState.category===k?'selected':''}>${esc(v.label)}</option>`).join('');
    const subs=[...new Set(combinedPrompts().map(p=>p.subcategory))].sort((a,b)=>a.localeCompare(b,'tr')).map(x=>`<option>${esc(x)}</option>`).join('');
    const models=[...new Set(combinedPrompts().flatMap(p=>p.models))].sort().map(x=>`<option>${esc(x)}</option>`).join('');
    controls.innerHTML=`<div class="prompt-search-box"><label for="promptSearch">Prompt ara</label><input id="promptSearch" type="search" placeholder="Örn. PHP hata ayıklama, ürün reklamı..."></div><label>Kategori<select id="categoryFilter"><option value="all">Tüm kategoriler</option>${categories}</select></label><label>Alt kategori<select id="subcategoryFilter"><option value="all">Tüm alt kategoriler</option>${subs}</select></label><label>Model<select id="modelFilter"><option value="all">Tüm modeller</option>${models}</select></label><label>Seviye<select id="levelFilter"><option value="all">Tüm seviyeler</option><option>Başlangıç</option><option>Orta</option><option>İleri</option></select></label><label>Sırala<select id="sortFilter"><option value="featured">Öne çıkan</option><option value="new">En yeni</option><option value="copied">En çok kopyalanan</option><option value="liked">En çok beğenilen</option><option value="az">A–Z</option></select></label>`;
    [['promptSearch','search'],['categoryFilter','category'],['subcategoryFilter','subcategory'],['modelFilter','model'],['levelFilter','level'],['sortFilter','sort']].forEach(([id,key])=>document.getElementById(id)?.addEventListener(id==='promptSearch'?'input':'change',e=>{libraryState[key]=e.target.value;libraryState.page=1;renderLibrary();}));
  }
  renderLibrary();
  document.getElementById('promptPagination')?.addEventListener('click',e=>{if(e.target.closest('[data-page-prev]'))libraryState.page--;if(e.target.closest('[data-page-next]'))libraryState.page++;renderLibrary();document.getElementById('prompt-library')?.scrollIntoView({behavior:'smooth'});});
  document.addEventListener('click',async e=>{const like=e.target.closest('[data-prompt-like]'),save=e.target.closest('[data-prompt-save]'),copy=e.target.closest('[data-prompt-copy]');if(like){togglePromptAction(like.dataset.promptLike,'like');renderLibrary();}if(save){togglePromptAction(save.dataset.promptSave,'save');renderLibrary();}if(copy){const p=findPrompt(copy.dataset.promptCopy);if(p){const vals=Object.fromEntries(p.variables.map(v=>[v.key,v.default]));await copyPrompt(p,'quick',vals);renderLibrary();}}});
}

function builderMarkup(p,standalone=false){const defaults=Object.fromEntries(p.variables.map(v=>[v.key,v.default]));return `<div class="prompt-builder-shell" data-builder-id="${attr(p.id)}"><div class="builder-top"><div><span class="eyebrow">DOLDURULABİLİR PROMPT BUILDER</span><h2>${esc(standalone?'Promptunu özelleştir':'Canlı prompt oluştur')}</h2><p>Alanları değiştir; önizleme anında güncellensin.</p></div><div class="version-switch" role="tablist"><button class="active" data-version="quick" type="button">Hızlı</button><button data-version="advanced" type="button">Gelişmiş</button><button data-version="expert" type="button">Uzman</button></div></div><div class="builder-grid"><form class="builder-fields">${p.variables.map(v=>`<label>${esc(v.label)}<textarea name="${attr(v.key)}" rows="2">${esc(v.default)}</textarea></label>`).join('')}</form><div class="builder-preview"><div class="builder-preview-head"><strong>Canlı Önizleme</strong><span data-version-label>Hızlı sürüm</span></div><textarea readonly data-builder-output>${esc(replaceVars(p.versions.quick,defaults))}</textarea><div class="builder-actions"><button class="btn" type="button" data-builder-copy>Promptu Kopyala</button></div></div></div></div>`;}
function bindBuilder(container,p){let version='quick';const fields=container.querySelector('.builder-fields');const output=container.querySelector('[data-builder-output]');const values=()=>Object.fromEntries(p.variables.map(v=>[v.key,fields.elements[v.key]?.value||'']));const refresh=()=>{output.value=replaceVars(p.versions[version],values());container.querySelector('[data-version-label]').textContent=activeVersionLabel(version)+' sürüm';};fields.addEventListener('input',refresh);container.querySelectorAll('[data-version]').forEach(btn=>btn.addEventListener('click',()=>{version=btn.dataset.version;container.querySelectorAll('[data-version]').forEach(x=>x.classList.toggle('active',x===btn));refresh();}));container.querySelector('[data-builder-copy]')?.addEventListener('click',async()=>{await copyPrompt(p,version,values());refreshDetailMetrics(p);});refresh();}

function refreshDetailMetrics(p){const box=document.getElementById('detailMetrics');if(!box)return;const m=promptMetrics(p.id);box.innerHTML=`<span>♡ ${m.likes} beğeni</span><span>☆ ${m.saves} kayıt</span><span>⧉ ${m.copies} kopyalama</span>`;}
function renderPromptDetail(){const app=document.getElementById('promptDetailApp');if(!app)return;const slug=new URLSearchParams(location.search).get('slug');const p=findPrompt(slug);if(!p){app.innerHTML='<div class="profile-empty-state">Prompt bulunamadı. <a href="promptlar.html">Kütüphaneye dön</a></div>';return;}markRecent(p);applySeo(`${p.title} | PROMPTLA`,p.description,SITE_URL+'prompt-detay.html?slug='+encodeURIComponent(p.slug),SITE_URL+p.image);const u=currentUser();const liked=u?userSet(KEYS.likes,u.id).has(String(p.id)):false,saved=u?userSet(KEYS.saves,u.id).has(String(p.id)):false;app.innerHTML=`<section class="prompt-detail-hero"><div class="prompt-detail-copy"><div class="prompt-breadcrumb"><a href="${page('promptlar.html')}">Promptlar</a><span>/</span><span>${esc(categoryLabel(p.category))}</span></div><span class="eyebrow">${esc(p.subcategory)} • ${esc(p.level)}</span><h1>${esc(p.title)}</h1><p>${esc(p.description)}</p><div class="prompt-model-tags large">${p.models.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div id="detailMetrics" class="prompt-detail-metrics"></div><div class="prompt-detail-actions"><button class="btn" data-detail-like type="button">${liked?'♥ Beğenildi':'♡ Beğen'}</button><button class="btn btn-secondary" data-detail-save type="button">${saved?'★ Kaydedildi':'☆ Kaydet'}</button></div></div><div class="prompt-detail-image"><img src="${attr(path(p.image))}" alt="${attr(p.title)}" width="900" height="600"><div class="prompt-detail-tags">${p.tags.map(x=>`<span>#${esc(x)}</span>`).join('')}</div></div></section><section id="detailBuilder"></section><section class="prompt-learning-grid"><article class="detail-card"><span class="eyebrow">ÖNCE</span><h2>Zayıf prompt</h2><pre>${esc(p.before)}</pre></article><article class="detail-card is-good"><span class="eyebrow">SONRA</span><h2>Yapılandırılmış prompt</h2><pre>${esc(p.versions.advanced)}</pre></article></section><section class="prompt-detail-info"><article class="detail-card"><h2>Çıktı biçimi</h2><p>${esc(p.outputFormat)}</p></article><article class="detail-card"><h2>Kısıtlar</h2><p>${esc(p.constraints)}</p></article><article class="detail-card"><h2>Sürüm</h2><p>v${esc(p.version)} • Son güncelleme ${esc(fmtDate(p.createdAt))}</p></article></section><section class="prompt-comments-section"><div class="section-heading"><span class="eyebrow">YORUMLAR</span><h2>Kullanım notları ve deneyimler</h2></div><form id="promptCommentForm" class="comment-form"><textarea name="comment" required placeholder="Bu promptla aldığın sonucu veya önerini paylaş..."></textarea><button class="btn" type="submit">Yorum Ekle</button></form><div id="promptComments"></div></section><section class="related-prompts"><div class="section-heading"><span class="eyebrow">BENZER İÇERİK</span><h2>İlgili promptlar</h2></div><div class="prompt-grid-modern">${combinedPrompts().filter(x=>x.category===p.category&&x.id!==p.id).slice(0,3).map(promptCard).join('')}</div></section>`;
  const b=document.getElementById('detailBuilder');b.innerHTML=builderMarkup(p);bindBuilder(b,p);refreshDetailMetrics(p);renderPromptComments(p);
  app.querySelector('[data-detail-like]')?.addEventListener('click',()=>{togglePromptAction(p.id,'like');renderPromptDetail();});app.querySelector('[data-detail-save]')?.addEventListener('click',()=>{togglePromptAction(p.id,'save');renderPromptDetail();});
  document.getElementById('promptCommentForm')?.addEventListener('submit',e=>{e.preventDefault();const u=requireUser('Yorum yapma');if(!u)return;const all=read(KEYS.promptComments,{});const list=all[p.slug]||[];list.unshift({id:uid('comment'),userId:u.id,author:u.name,text:new FormData(e.currentTarget).get('comment'),createdAt:now(),reports:[]});all[p.slug]=list;write(KEYS.promptComments,all);e.currentTarget.reset();renderPromptComments(p);});
  app.onclick=async e=>{const like=e.target.closest('[data-prompt-like]'),save=e.target.closest('[data-prompt-save]'),copy=e.target.closest('[data-prompt-copy]');if(like){togglePromptAction(like.dataset.promptLike,'like');renderPromptDetail();}if(save){togglePromptAction(save.dataset.promptSave,'save');renderPromptDetail();}if(copy){const q=findPrompt(copy.dataset.promptCopy);if(q)await copyPrompt(q,'quick',Object.fromEntries(q.variables.map(v=>[v.key,v.default])));}};
}
function renderPromptComments(p){const wrap=document.getElementById('promptComments');if(!wrap)return;const list=(read(KEYS.promptComments,{})[p.slug]||[]).filter(x=>x.status!=='removed');wrap.innerHTML=list.map(c=>`<article class="comment-card"><div class="comment-avatar">${esc(initials(c.author))}</div><div><strong>${esc(c.author)}</strong><span>${esc(fmtDate(c.createdAt))}</span><p>${esc(c.text)}</p></div></article>`).join('')||'<div class="profile-empty-state">Henüz yorum yok.</div>';}


function initStandaloneBuilder(){const selector=document.getElementById('builderPromptSelect'),app=document.getElementById('builderApp');if(!selector||!app)return;const list=combinedPrompts();selector.innerHTML=list.map(p=>`<option value="${attr(p.slug)}">${esc(categoryLabel(p.category))} — ${esc(p.title)}</option>`).join('');const query=new URLSearchParams(location.search).get('slug');if(query&&findPrompt(query))selector.value=query;const show=()=>{const p=findPrompt(selector.value)||list[0];app.innerHTML=builderMarkup(p,true);bindBuilder(app,p);};selector.addEventListener('change',show);show();}

function renderHome(){
  const settings=read(KEYS.settings,{});
  const weekly=findPrompt(settings.weeklyPromptId)||DATA.prompts.find(p=>p.weekly)||DATA.prompts[7]||DATA.prompts[0];
  const box=document.getElementById('weeklyPrompt');
  if(box&&weekly) box.innerHTML=`<div class="weekly-prompt-image"><img src="${attr(path('images/featured/mockverse-weekly.webp'))}" loading="lazy" width="1200" height="675" alt="MockVerse profesyonel mockup sahnesi"></div><div><span class="eyebrow">HAFTANIN PROMPTU</span><h2>${esc(weekly.title)}</h2><p>${esc(weekly.description)}</p><div class="prompt-model-tags">${weekly.models.slice(0,4).map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="hero-buttons"><a class="btn" href="${attr(promptUrl(weekly))}">Promptu Aç</a><a class="btn btn-secondary" href="${attr(page('prompt-builder.html?slug='+weekly.slug))}">Builder’da Kullan</a></div></div>`;
  const featured=document.getElementById('featuredPromptGrid');
  if(featured) featured.innerHTML=combinedPrompts().filter(p=>p.featured).slice(0,6).map(promptCard).join('');
  const stats=document.getElementById('platformStats');
  if(stats) stats.innerHTML=`<div><strong>${combinedPrompts().length}</strong><span>Profesyonel prompt</span></div><div><strong>${Object.keys(DATA.categories).length}</strong><span>Ana kategori</span></div><div><strong>10</strong><span>Hazır otomasyon</span></div><div><strong>3</strong><span>Prompt seviyesi</span></div>`;
}

function renderModels(){const table=document.getElementById('modelComparisonTable');if(!table)return;table.innerHTML=`<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th>Model / araç</th><th>En güçlü alan</th><th>Bağlam</th><th>Görsel</th><th>Kod</th><th>Türkçe</th><th></th></tr></thead><tbody>${DATA.models.map(m=>`<tr><td><strong>${esc(m.name)}</strong></td><td>${esc(m.best)}</td><td>${esc(m.context)}</td><td>${esc(m.image)}</td><td>${esc(m.code)}</td><td>${esc(m.tr)}</td><td><a class="mini-action-btn" href="${attr(page(m.link))}">İncele</a></td></tr>`).join('')}</tbody></table></div>`;}

function renderProfile(){
  const app=document.getElementById('profileApp');if(!app)return;
  const u=currentUser();
  if(!u){app.innerHTML=`<div class="profile-empty-state"><h2>Favorilerini görmek için giriş yap</h2><p>Beğendiğin, kaydettiğin ve yorum yaptığın promptlar yalnızca bu tarayıcıdaki hesabında tutulur.</p><button class="btn" onclick="openAuthModal('login')">Giriş Yap</button></div>`;return;}
  const liked=userSet(KEYS.likes,u.id),saved=userSet(KEYS.saves,u.id);
  const likedPrompts=combinedPrompts().filter(p=>liked.has(String(p.id)));
  const savedPrompts=combinedPrompts().filter(p=>saved.has(String(p.id)));
  const commentStore=read(KEYS.promptComments,{});
  const myComments=[];
  Object.entries(commentStore).forEach(([slug,list])=>{(list||[]).forEach(c=>{if(c.userId===u.id&&c.status!=='removed')myComments.push({...c,slug,prompt:findPrompt(slug)});});});
  myComments.sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
  app.innerHTML=`<section class="profile-hero"><div class="profile-avatar-lg">${esc(initials(u.name))}</div><div><span class="eyebrow">YEREL FAVORİ PROFİLİ</span><h1>${esc(u.name)}</h1><p>Beğenilen, kaydedilen ve yorum yapılan promptlar.</p><span>${esc(u.email)} • veriler bu tarayıcıda saklanır</span></div><div class="profile-hero-actions"><button class="mini-action-btn" data-edit-profile>Profili Düzenle</button></div></section><div class="profile-tabs profile-tabs-v2"><button class="active" data-profile-tab="saved">Kaydedilenler (${savedPrompts.length})</button><button data-profile-tab="liked">Beğenilenler (${likedPrompts.length})</button><button data-profile-tab="comments">Yorumlarım (${myComments.length})</button></div><section id="profileTabContent"></section>`;
  const content=document.getElementById('profileTabContent');
  const show=tab=>{
    app.querySelectorAll('[data-profile-tab]').forEach(b=>b.classList.toggle('active',b.dataset.profileTab===tab));
    if(tab==='saved') content.innerHTML=`<div class="prompt-grid-modern">${savedPrompts.map(promptCard).join('')||'<div class="profile-empty-state">Henüz prompt kaydetmedin.</div>'}</div>`;
    if(tab==='liked') content.innerHTML=`<div class="prompt-grid-modern">${likedPrompts.map(promptCard).join('')||'<div class="profile-empty-state">Henüz prompt beğenmedin.</div>'}</div>`;
    if(tab==='comments') content.innerHTML=myComments.map(c=>`<article class="detail-card profile-comment-item"><span class="eyebrow">${esc(c.prompt?.title||'Prompt')}</span><p>${esc(c.text)}</p><div class="profile-action-row"><small>${esc(fmtDate(c.createdAt))}</small>${c.prompt?`<a class="mini-action-btn" href="${attr(promptUrl(c.prompt))}">Promptu Aç</a>`:''}</div></article>`).join('')||'<div class="profile-empty-state">Henüz yorum yapmadın.</div>';
  };
  show('saved');
  app.querySelectorAll('[data-profile-tab]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.profileTab)));
  app.querySelector('[data-edit-profile]')?.addEventListener('click',()=>{const name=prompt('Ad Soyad',u.name);if(!name)return;const users=getUsers();const target=users.find(x=>x.id===u.id);target.name=name.trim();setUsers(users);renderHeader();renderProfile();});
}

function bindPageAuth(){document.getElementById('pageLoginForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);if(login(fd.get('email'),fd.get('password'))){toast('Giriş yapıldı.');location.href=page('profil.html');}else toast('E-posta veya şifre hatalı.','error');});document.getElementById('pageRegisterForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const r=register(String(fd.get('name')),String(fd.get('email')),String(fd.get('password')));if(r.ok){toast('Hesap oluşturuldu.');location.href=page('profil.html');}else toast(r.message,'error');});}

function bindGlobalPromptActions(){
  if(PAGE==='prompts'||PAGE==='prompt-detail') return;
  document.addEventListener('click',async e=>{
    const like=e.target.closest('[data-prompt-like]');
    const save=e.target.closest('[data-prompt-save]');
    const copy=e.target.closest('[data-prompt-copy]');
    if(like){togglePromptAction(like.dataset.promptLike,'like');if(PAGE==='home')renderHome();if(PAGE==='profile')renderProfile();}
    if(save){togglePromptAction(save.dataset.promptSave,'save');if(PAGE==='home')renderHome();if(PAGE==='profile')renderProfile();}
    if(copy){const p=findPrompt(copy.dataset.promptCopy);if(p)await copyPrompt(p,'quick',Object.fromEntries(p.variables.map(v=>[v.key,v.default])));}
  });
}

function renderCurrentPage(){if(PAGE==='profile')renderProfile();}
function boot(){seed();renderAuthModal();renderHeader();bindPageAuth();bindGlobalPromptActions();if(PAGE==='home')renderHome();if(PAGE==='prompts')initPromptLibrary();if(PAGE==='prompt-detail')renderPromptDetail();if(PAGE==='builder')initStandaloneBuilder();if(PAGE==='profile')renderProfile();if(PAGE==='models')renderModels();}

document.addEventListener('DOMContentLoaded',boot);
})();
