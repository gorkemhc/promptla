(function(){
  'use strict';
  function setMobileMenu(open){
    const menu=document.getElementById('menu');
    const nav=menu?.closest('nav');
    const btn=document.getElementById('hamburger');
    if(!menu || !nav) return false;

    nav.classList.toggle('open',open);
    menu.classList.toggle('active',open);
    document.body.classList.toggle('mobile-menu-open',open);

    if(btn){
      btn.classList.toggle('active',open);
      btn.setAttribute('aria-expanded',String(open));
      btn.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');
    }

    if(!open){
      menu.querySelectorAll('.nav-dropdown.open').forEach(dropdown=>{
        dropdown.classList.remove('open');
        dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded','false');
      });
    }
    return open;
  }

  window.toggleMenu = function(event){
    if(event){
      event.preventDefault();
      event.stopPropagation();
    }
    const menu=document.getElementById('menu');
    const nav=menu?.closest('nav');
    if(!menu || !nav) return;
    setMobileMenu(!nav.classList.contains('open'));
  };
  window.toggleDropdown = function(event){
    if(event) event.stopPropagation();
    document.getElementById('accountDropdown')?.classList.toggle('show');
  };
  document.addEventListener('click',()=>document.getElementById('accountDropdown')?.classList.remove('show'));

  window.showSiteToast=function(message,type='success'){
    let wrap=document.getElementById('siteToastWrap');
    if(!wrap){ wrap=document.createElement('div'); wrap.id='siteToastWrap'; wrap.className='site-toast-wrap'; document.body.appendChild(wrap); }
    const toast=document.createElement('div'); toast.className='site-toast '+(type==='error'?'is-error':''); toast.textContent=message;
    wrap.appendChild(toast); requestAnimationFrame(()=>toast.classList.add('show'));
    setTimeout(()=>{ toast.classList.remove('show'); setTimeout(()=>toast.remove(),250); },3200);
  };

  async function copyText(text){
    try{
      if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(text); }
      else{
        const ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }
      window.showSiteToast('Kopyalandı.'); return true;
    }catch(e){ window.showSiteToast('Kopyalama başarısız oldu. Metni elle seçebilirsin.','error'); return false; }
  }
  window.promptlaCopyText=copyText;
  window.copyGamePrompt=function(btn){ const text=btn?.closest('.prompt-copy-card')?.querySelector('textarea')?.value||''; copyText(text); };
  window.copyArcadePrompt=function(btn){ const text=btn?.closest('.arcade-info-panel')?.querySelector('textarea')?.value||''; copyText(text); };

  window.openCreateModal=function(){ const m=document.getElementById('createModal'); if(m) m.style.display='flex'; };
  window.closeCreateModal=function(){ const m=document.getElementById('createModal'); if(m) m.style.display='none'; };


  function initPromptDropdowns(){
    const mobileQuery=window.matchMedia('(max-width: 768px)');
    const dropdowns=[...document.querySelectorAll('.nav-dropdown')];

    dropdowns.forEach(dropdown=>{
      if(dropdown.dataset.dropdownReady==='true') return;

      const toggle=dropdown.querySelector('.nav-dropdown-toggle');
      const submenu=dropdown.querySelector('.nav-submenu');
      if(!toggle || !submenu) return;

      dropdown.dataset.dropdownReady='true';
      toggle.setAttribute('aria-haspopup','true');
      toggle.setAttribute('aria-expanded','false');

      let closeTimer=null;
      const clearCloseTimer=()=>{
        if(closeTimer){
          window.clearTimeout(closeTimer);
          closeTimer=null;
        }
      };
      const setOpen=(open)=>{
        dropdown.classList.toggle('open',open);
        toggle.setAttribute('aria-expanded',String(open));
      };

      dropdown.addEventListener('pointerenter',()=>{
        if(mobileQuery.matches) return;
        clearCloseTimer();
        dropdown.classList.add('hover-open');
        toggle.setAttribute('aria-expanded','true');
      });

      dropdown.addEventListener('pointerleave',()=>{
        if(mobileQuery.matches) return;
        clearCloseTimer();
        closeTimer=window.setTimeout(()=>{
          dropdown.classList.remove('hover-open');
          toggle.setAttribute('aria-expanded','false');
        },220);
      });

      submenu.addEventListener('pointerenter',clearCloseTimer);
      submenu.addEventListener('pointerleave',()=>{
        if(mobileQuery.matches) return;
        clearCloseTimer();
        closeTimer=window.setTimeout(()=>{
          dropdown.classList.remove('hover-open');
          toggle.setAttribute('aria-expanded','false');
        },220);
      });

      toggle.addEventListener('click',event=>{
        if(!mobileQuery.matches) return;
        event.preventDefault();
        event.stopPropagation();

        const willOpen=!dropdown.classList.contains('open');
        dropdowns.forEach(other=>{
          if(other!==dropdown){
            other.classList.remove('open');
            other.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded','false');
          }
        });
        setOpen(willOpen);
      });

      toggle.addEventListener('keydown',event=>{
        if(event.key==='Escape'){
          dropdown.classList.remove('hover-open');
          setOpen(false);
          toggle.focus();
          return;
        }

        if(event.key==='ArrowDown'){
          event.preventDefault();
          if(mobileQuery.matches) setOpen(true);
          else{
            clearCloseTimer();
            dropdown.classList.add('hover-open');
            toggle.setAttribute('aria-expanded','true');
          }
          submenu.querySelector('a')?.focus();
        }
      });
    });

    document.addEventListener('click',event=>{
      if(!mobileQuery.matches) return;
      dropdowns.forEach(dropdown=>{
        if(!dropdown.contains(event.target)){
          dropdown.classList.remove('open');
          dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded','false');
        }
      });
    });

    mobileQuery.addEventListener?.('change',()=>{
      dropdowns.forEach(dropdown=>{
        dropdown.classList.remove('open','hover-open');
        dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded','false');
      });
    });
  }

  function initMobileMenu(){
    const menu=document.getElementById('menu');
    const nav=menu?.closest('nav');
    const btn=document.getElementById('hamburger');
    const header=btn?.closest('header');
    if(!menu || !nav || !btn || btn.dataset.mobileReady==='true') return;

    btn.dataset.mobileReady='true';
    btn.setAttribute('role','button');
    btn.setAttribute('tabindex','0');
    btn.setAttribute('aria-controls','menu');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-label','Menüyü aç');

    btn.addEventListener('keydown',event=>{
      if(event.key==='Enter' || event.key===' '){
        window.toggleMenu(event);
      }
      if(event.key==='Escape') setMobileMenu(false);
    });

    menu.addEventListener('click',event=>{
      const link=event.target.closest('a');
      if(!link || link.classList.contains('nav-dropdown-toggle')) return;
      if(window.matchMedia('(max-width: 768px)').matches) setMobileMenu(false);
    });

    document.addEventListener('click',event=>{
      if(!window.matchMedia('(max-width: 768px)').matches) return;
      if(nav.classList.contains('open') && header && !header.contains(event.target)) setMobileMenu(false);
    });

    window.addEventListener('resize',()=>{
      if(window.innerWidth>768) setMobileMenu(false);
    },{passive:true});
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>{
      initPromptDropdowns();
      initMobileMenu();
    },{once:true});
  }else{
    initPromptDropdowns();
    initMobileMenu();
  }


  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.modal').forEach(m=>m.style.display='none');
      document.getElementById('accountDropdown')?.classList.remove('show');
      setMobileMenu(false);
    }
  });
  document.addEventListener('click',e=>{
    if(e.target.classList?.contains('modal')) e.target.style.display='none';
  });
})();
