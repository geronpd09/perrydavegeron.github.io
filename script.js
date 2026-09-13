const menu=document.querySelector('.mobile-menu');
const sidebar=document.querySelector('.sidebar');
if(menu){menu.addEventListener('click',()=>sidebar.classList.toggle('open'))}
document.querySelectorAll('.nav-item').forEach(a=>a.addEventListener('click',()=>sidebar.classList.remove('open')));