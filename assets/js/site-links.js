(function(){
  const links={linkedin:'',github:''};
  document.querySelectorAll('[data-profile-placeholder]').forEach(card=>{
    const key=card.dataset.profilePlaceholder;
    if(links[key]){card.href=links[key];card.classList.remove('is-placeholder');card.target='_blank';card.rel='noopener';card.querySelector('small').textContent='Profili aç';}
    else card.addEventListener('click',event=>{event.preventDefault();window.showSiteToast?.('Bu profil bağlantısı henüz eklenmedi.','error');});
  });
})();
