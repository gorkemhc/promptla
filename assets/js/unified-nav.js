(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var h=document.querySelector('.promptla-unified-header');
    if(!h)return;

    var b=h.querySelector('.hamburger');
    var dropdowns=[].slice.call(h.querySelectorAll('.nav-dropdown'));
    var collapsePoint=85;
    var ticking=false;

    function closeDropdowns(){
      dropdowns.forEach(function(item){ item.classList.remove('open'); });
    }

    function closeMenu(){
      h.classList.remove('menu-open');
      if(b)b.setAttribute('aria-expanded','false');
      closeDropdowns();
    }

    function updateHeader(){
      var condensed=window.scrollY>collapsePoint;
      h.classList.toggle('is-condensed',condensed);
      if(condensed && window.innerWidth>820) closeMenu();
      ticking=false;
    }

    function requestHeaderUpdate(){
      if(!ticking){
        window.requestAnimationFrame(updateHeader);
        ticking=true;
      }
    }

    updateHeader();
    window.addEventListener('scroll',requestHeaderUpdate,{passive:true});
    window.addEventListener('resize',function(){
      if(window.innerWidth>820) closeMenu();
      requestHeaderUpdate();
    });

    if(b){
      b.addEventListener('click',function(e){
        e.preventDefault();
        var willOpen=!h.classList.contains('menu-open');
        h.classList.toggle('menu-open',willOpen);
        b.setAttribute('aria-expanded',String(willOpen));
        if(!willOpen)closeDropdowns();
      });
    }

    h.querySelectorAll('.nav-dropdown-toggle').forEach(function(t){
      t.addEventListener('click',function(e){
        if(window.innerWidth<=820){
          e.preventDefault();
          var li=t.closest('.nav-dropdown');
          dropdowns.forEach(function(o){if(o!==li)o.classList.remove('open');});
          li.classList.toggle('open');
        }
      });
    });

    h.querySelectorAll('.promptla-unified-nav a:not(.nav-dropdown-toggle)').forEach(function(link){
      link.addEventListener('click',function(){ if(window.innerWidth<=820)closeMenu(); });
    });

    document.addEventListener('click',function(e){
      if(!h.contains(e.target))closeMenu();
    });

    document.addEventListener('keydown',function(e){
      if(e.key==='Escape')closeMenu();
    });
  });
})();
