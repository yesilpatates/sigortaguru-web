document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const btn=document.querySelector('.menu-toggle'); const nav=document.querySelector('.main-nav');
  if(btn&&nav) btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
  const form=document.querySelector('#quote-form');
  if(form) form.addEventListener('submit',e=>{e.preventDefault(); const d=new FormData(form); const msg=[
    'Merhaba SigortaGuru, ücretsiz teklif talebi oluşturmak istiyorum.',
    '', 'Ad Soyad: '+(d.get('name')||''), 'Telefon: '+(d.get('phone')||''), 'E-posta: '+(d.get('email')||'-'),
    'Sigorta Türü: '+(d.get('type')||''), 'Ek Bilgi: '+(d.get('note')||'-')
  ].join('\n'); window.open('https://wa.me/905432321853?text='+encodeURIComponent(msg),'_blank','noopener');});
});