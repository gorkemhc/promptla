(function(){
  'use strict';
  const header=document.getElementById('homeHeader');
  const updateHeader=()=>header?.classList.toggle('is-condensed',window.scrollY>85);
  updateHeader();
  window.addEventListener('scroll',updateHeader,{passive:true});

  const reveal=[...document.querySelectorAll('[data-reveal]')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:.12});
    reveal.forEach(el=>observer.observe(el));
  }else reveal.forEach(el=>el.classList.add('is-visible'));

  const target=document.querySelector('[data-home-terminal-type]');
  if(target){
    const commands=['claude  # proje analizi','codex /review','git diff','npx n8n'];
    let command=0,index=0,deleting=false;
    const tick=()=>{
      const word=commands[command];
      target.textContent=word.slice(0,index);
      if(!deleting && index<word.length){index++;setTimeout(tick,55);return;}
      if(!deleting){deleting=true;setTimeout(tick,1250);return;}
      if(index>0){index--;setTimeout(tick,24);return;}
      deleting=false;command=(command+1)%commands.length;setTimeout(tick,280);
    };
    tick();
  }
})();
