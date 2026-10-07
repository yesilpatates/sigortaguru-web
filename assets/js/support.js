(()=>{
  const button=document.querySelector('.support-fab');
  if(!button) return;
  let loading=false, ready=false, timer;
  const api=window.Tawk_API=window.Tawk_API||{};
  api.onLoad=()=>{ready=true;clearTimeout(timer);button.textContent='Canlı Destek';button.removeAttribute('aria-busy');api.showWidget();api.maximize();};
  api.onChatMaximized=()=>{document.body.classList.add('support-open');button.setAttribute('aria-expanded','true');};
  api.onChatMinimized=()=>{api.hideWidget();document.body.classList.remove('support-open');button.setAttribute('aria-expanded','false');button.focus();};
  button.setAttribute('aria-expanded','false');
  button.addEventListener('click',event=>{
    if(ready){event.preventDefault();api.showWidget();api.maximize();return;}
    if(loading) return;
    event.preventDefault();loading=true;button.setAttribute('aria-busy','true');
    button.querySelector('img')?.remove();button.textContent='Bağlanıyor…';
    window.Tawk_LoadStart=new Date();
    const script=document.createElement('script');script.async=true;
    script.src='https://embed.tawk.to/6ac6c546ab412d34c7659dca/1k4c7573d';
    script.charset='UTF-8';script.setAttribute('crossorigin','*');
    const fallback=()=>{clearTimeout(timer);button.textContent='Sohbeti yeni sekmede aç';button.removeAttribute('aria-busy');};
    script.onerror=fallback;timer=setTimeout(fallback,15000);document.head.appendChild(script);
  });
})();
