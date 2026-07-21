(function(){
  'use strict';

  function copyText(text, button){
    const done=()=>{
      if(!button) return;
      const old=button.textContent;
      button.textContent='Kopyalandı';
      window.setTimeout(()=>button.textContent=old,1400);
    };
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));
    }else fallbackCopy(text,done);
  }
  function fallbackCopy(text,done){
    const area=document.createElement('textarea');
    area.value=text; area.style.position='fixed'; area.style.opacity='0';
    document.body.appendChild(area); area.select();
    try{ document.execCommand('copy'); done(); }catch(e){}
    area.remove();
  }
  function initCopyButtons(){
    document.querySelectorAll('[data-copy-target]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const el=document.querySelector(btn.dataset.copyTarget);
        if(el) copyText(el.textContent.trim(),btn);
      });
    });
    document.querySelectorAll('[data-copy-text]').forEach(btn=>{
      btn.addEventListener('click',()=>copyText(btn.dataset.copyText||'',btn));
    });
  }

  const lessons={
    basics:{title:'Terminal temelleri',text:'Terminal, komutları metin olarak çalıştırdığın kontrol alanıdır. Bu laboratuvar gerçek dosyalarını değiştirmez; komutların ne yaptığını güvenli biçimde gösterir.',quick:['pwd','dir','cd proje','mkdir deneme','code .','clear']},
    git:{title:'Git çalışma döngüsü',text:'Değişiklikleri önce kontrol et, sonra seç, açıklayıcı bir commit oluştur ve en son uzak depoya gönder.',quick:['git status','git diff','git add .','git commit -m "AI Studio eklendi"','git log --oneline','git push']},
    claude:{title:'Claude Code',text:'Claude Code proje klasöründe çalışır. Önce klasörü aç, claude komutuyla başlat, plan iste ve değişiklikleri Git diff ile incele.',quick:['claude','claude --version','claude doctor','git status','git diff','/exit']},
    codex:{title:'OpenAI Codex',text:'Codex CLI ile klasörde ajan oturumu başlatabilir, izin düzeyini seçebilir, AGENTS.md talimatlarını okutabilir ve kod incelemesi isteyebilirsin.',quick:['codex','codex --version','codex --help','/init','/status','/review']},
    n8n:{title:'n8n',text:'n8n görsel otomasyon aracıdır. Yerel öğrenme ortamında npx n8n veya global kurulumdan sonra n8n start komutuyla açılabilir.',quick:['node --version','npm --version','npx n8n','npm install -g n8n','n8n start','Ctrl+C']},
    safety:{title:'Güvenli kullanım',text:'API anahtarlarını komuta yazma, .env dosyasını Git’e gönderme, ajan değişikliklerini kontrol etmeden commit/push yapma.',quick:['git status','git diff','git check-ignore .env','git restore dosya.html','git log --oneline','git branch']}
  };
  const commandResponses={
    'help':['info','Kullanılabilir örnekler: dir, cd proje, git status, git diff, claude, codex, npx n8n, clear'],
    'pwd':['info','C:\\Users\\Gorkem\\Projects\\promptla'],
    'dir':['info','assets   images   pages   games   index.html'],
    'ls':['info','assets  images  pages  games  index.html'],
    'cd proje':['success','Klasör değiştirildi: C:\\Users\\Gorkem\\Projects\\proje'],
    'mkdir deneme':['success','deneme klasörü oluşturuldu.'],
    'code .':['success','Geçerli klasör Visual Studio Code içinde açılır.'],
    'clear':['clear',''],
    'cls':['clear',''],
    'git status':['info','On branch main\nChanges not staged for commit:\n  modified: index.html\n  modified: assets/ai-studio.css'],
    'git diff':['info','diff --git a/index.html b/index.html\n+ AI Studio bağlantısı\n+ Terminal laboratuvarı bölümü'],
    'git add .':['success','Tüm değişiklikler staging alanına eklendi.'],
    'git commit -m "ai studio eklendi"':['success','[main a1b2c3d] AI Studio eklendi\n 8 files changed'],
    'git log --oneline':['info','a1b2c3d AI Studio eklendi\n92e12a0 Mobil menü düzeltmesi\n41e0f8c İlk sürüm'],
    'git push':['warn','Bu laboratuvar gerçek bağlantı kurmaz. Gerçek projede uzak depo ayarlıysa commitler GitHub’a gönderilir.'],
    'git branch':['info','* main\n  feature/ai-studio'],
    'git check-ignore .env':['success','.env dosyası .gitignore tarafından korunuyor.'],
    'git restore dosya.html':['warn','Gerçek kullanımda dosya.html üzerindeki kaydedilmemiş Git değişiklikleri geri alınır.'],
    'claude':['success','Claude Code oturumu başlatılır. Önce proje özeti ve plan istemen önerilir.'],
    'claude --version':['info','Claude Code sürüm bilgisi burada görüntülenir.'],
    'claude doctor':['info','Kurulum, giriş ve ortam kontrolleri çalıştırılır.'],
    '/exit':['success','Ajan oturumu güvenli biçimde sonlandırılır.'],
    'codex':['success','Codex CLI oturumu başlatılır. Çalışma klasörünü ve izinleri doğrula.'],
    'codex --version':['info','Codex CLI sürüm bilgisi burada görüntülenir.'],
    'codex --help':['info','Codex komutları ve seçenekleri listelenir.'],
    '/init':['success','Projeye uygun AGENTS.md başlangıç talimatı hazırlanır.'],
    '/status':['info','Oturum, model, izin ve çalışma dizini durumu gösterilir.'],
    '/review':['success','Mevcut değişiklikler kod incelemesi için analiz edilir.'],
    'node --version':['info','v22.x.x'],
    'npm --version':['info','10.x.x'],
    'npx n8n':['success','n8n geçici olarak indirilir ve yerel editör başlatılır: http://localhost:5678'],
    'npm install -g n8n':['success','n8n global komutu sisteme kurulur.'],
    'n8n start':['success','n8n editörü başlatılır: http://localhost:5678'],
    'ctrl+c':['warn','Çalışan terminal süreci durdurulur.']
  };
  function addTerminalLine(body,type,prompt,content){
    const line=document.createElement('span');
    line.className='terminal-line '+(type?'terminal-'+type:'');
    if(prompt) line.innerHTML='<span class="terminal-prompt">PS promptla&gt;</span> <span class="terminal-command"></span>';
    if(prompt) line.querySelector('.terminal-command').textContent=content;
    else line.textContent=content;
    body.appendChild(line); body.scrollTop=body.scrollHeight;
  }
  function initTerminalLab(){
    const input=document.getElementById('terminalInput');
    const output=document.getElementById('terminalOutput');
    const run=document.getElementById('terminalRun');
    if(!input||!output||!run) return;
    const execute=()=>{
      const raw=input.value.trim(); if(!raw) return;
      addTerminalLine(output,'',true,raw);
      const key=raw.toLowerCase();
      const response=commandResponses[key];
      if(response && response[0]==='clear'){ output.innerHTML=''; }
      else if(response){ response[1].split('\n').forEach(x=>addTerminalLine(output,response[0],false,x)); }
      else addTerminalLine(output,'warn',false,'Simülasyon bu komutu tanımıyor. “help” yazabilir veya soldan bir ders seçebilirsin.');
      input.value=''; input.focus();
    };
    run.addEventListener('click',execute);
    input.addEventListener('keydown',e=>{ if(e.key==='Enter') execute(); });
    document.querySelectorAll('.terminal-quick-command').forEach(btn=>btn.addEventListener('click',()=>{input.value=btn.dataset.command||btn.textContent.trim(); execute();}));
    document.querySelectorAll('.terminal-lesson-btn').forEach(btn=>btn.addEventListener('click',()=>{
      document.querySelectorAll('.terminal-lesson-btn').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      const lesson=lessons[btn.dataset.lesson];
      document.getElementById('terminalLessonTitle').textContent=lesson.title;
      document.getElementById('terminalLessonText').textContent=lesson.text;
      const quick=document.getElementById('terminalQuickGrid'); quick.innerHTML='';
      lesson.quick.forEach(cmd=>{const b=document.createElement('button'); b.className='terminal-quick-command'; b.type='button'; b.textContent=cmd; b.dataset.command=cmd; b.addEventListener('click',()=>{input.value=cmd;execute();});quick.appendChild(b);});
    }));
  }

  const workflowData={
    issue:{title:'GitHub issue analiz akışı',description:'Yeni issue geldiğinde içeriği sınıflandırır, önem derecesi üretir ve ekibe gönderir.',nodes:[['Trigger','GitHub Issue','Yeni issue'],['Transform','Metni hazırla','Başlık + gövde'],['AI','Claude / OpenAI','Sınıflandır'],['Logic','IF','Kritik mi?'],['Action','Slack / E-posta','Ekibi bilgilendir']]},
    content:{title:'İçerik üretim akışı',description:'Formdan gelen konuyu yapılandırır, taslak üretir, kalite kontrolünden geçirir ve taslak olarak kaydeder.',nodes:[['Trigger','Form','Konu al'],['Research','HTTP Request','Kaynak çek'],['AI','Model','Taslak yaz'],['Review','AI kontrol','Dil + SEO'],['Store','Sheets / CMS','Taslak kaydet']]},
    prompt:{title:'Prompt iyileştirme akışı',description:'Kullanıcı promptundaki eksikleri bulur, gelişmiş sürüm üretir ve kalite raporu döndürür.',nodes:[['Trigger','Webhook','Prompt al'],['Parse','Set','Alanları ayır'],['AI','Prompt analizi','Eksikleri bul'],['AI','Prompt Builder','Yeni sürüm'],['Response','Webhook','Sonucu döndür']]},
    support:{title:'İnsan onaylı destek ajanı',description:'Soruyu bilgi tabanında arar, yanıt hazırlar; riskli konularda insana yönlendirir.',nodes:[['Trigger','Chat','Soru al'],['Agent','AI Agent','Karar ver'],['Tool','Bilgi tabanı','Kaynak bul'],['Guard','IF','Riskli mi?'],['Action','Yanıt / İnsan','Gönder']]}
  };
  function renderWorkflow(key){
    const data=workflowData[key]; if(!data) return;
    const title=document.getElementById('workflowTitle'),desc=document.getElementById('workflowDescription'),row=document.getElementById('workflowNodes');
    if(!title||!desc||!row) return;
    title.textContent=data.title; desc.textContent=data.description; row.innerHTML='';
    data.nodes.forEach(n=>{const el=document.createElement('div');el.className='workflow-node';el.innerHTML='<small></small><strong></strong><p></p>';el.querySelector('small').textContent=n[0];el.querySelector('strong').textContent=n[1];el.querySelector('p').textContent=n[2];row.appendChild(el);});
  }
  function initWorkflowTabs(){
    document.querySelectorAll('.workflow-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.workflow-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderWorkflow(btn.dataset.workflow);}));
    if(document.getElementById('workflowNodes')) renderWorkflow('issue');
  }
  function initAutomationFilters(){
    document.querySelectorAll('[data-automation-filter]').forEach(btn=>btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-automation-filter]').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
      const filter=btn.dataset.automationFilter;
      document.querySelectorAll('.automation-card').forEach(card=>card.hidden=!(filter==='all'||card.dataset.category===filter));
    }));
  }
  function initToc(){
    const links=[...document.querySelectorAll('.ai-guide-toc a[href^="#"]')]; if(!links.length) return;
    const sections=links.map(x=>document.querySelector(x.getAttribute('href'))).filter(Boolean);
    const update=()=>{let active=sections[0];sections.forEach(s=>{if(s.getBoundingClientRect().top<160)active=s;});links.forEach(l=>l.classList.toggle('active',active&&l.getAttribute('href')==='#'+active.id));};
    document.addEventListener('scroll',update,{passive:true});update();
  }
  function initHeroTerminal(){
    const el=document.querySelector('[data-terminal-type]'); if(!el) return;
    const messages=['claude  # proje analizi','codex  # ajan oturumu','npx n8n  # otomasyon editörü','git diff  # değişiklik kontrolü'];
    let mi=0,ci=0,deleting=false;
    const tick=()=>{const msg=messages[mi]; el.textContent=msg.slice(0,ci); if(!deleting&&ci<msg.length){ci++;setTimeout(tick,65);}else if(!deleting){deleting=true;setTimeout(tick,1300);}else if(ci>0){ci--;setTimeout(tick,28);}else{deleting=false;mi=(mi+1)%messages.length;setTimeout(tick,240);}};tick();
  }
  document.addEventListener('DOMContentLoaded',()=>{initCopyButtons();initTerminalLab();initWorkflowTabs();initAutomationFilters();initToc();initHeroTerminal();});
})();
