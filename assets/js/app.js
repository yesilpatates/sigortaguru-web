document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(!btn||!nav) return;
  const closeMenu=()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');};
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
  nav.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu();});
  document.addEventListener('click',event=>{
    if(!nav.contains(event.target)&&!btn.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();btn.focus();}
  });
  window.matchMedia('(min-width:901px)').addEventListener('change',event=>{if(event.matches) closeMenu();});
});
