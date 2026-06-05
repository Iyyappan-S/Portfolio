function toggleMenu(){document.querySelector('.nav').classList.toggle('open')}

const cards = document.querySelectorAll('.card,.code-card,.contact-card');
const reveal = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
},{threshold:.15});
cards.forEach(c=>{c.style.opacity='0';c.style.transform='translateY(30px)';reveal.observe(c)});
const style=document.createElement('style');
style.innerHTML='.show{opacity:1!important;transform:translateY(0)!important;transition:.7s ease}';
document.head.appendChild(style);
