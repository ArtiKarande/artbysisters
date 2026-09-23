const menuToggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
const images=[...document.querySelectorAll('.gallery-item img')].map(i=>i.src);
const lightbox=document.getElementById('lightbox'); const lightboxImage=document.getElementById('lightbox-image'); let current=0;
function show(i){current=(i+images.length)%images.length;lightboxImage.src=images[current];lightboxImage.alt=`Artwork ${current+1} preview`;}
function openBox(i){show(i);lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.gallery-item').forEach((item,i)=>item.addEventListener('click',()=>openBox(i)));
document.querySelector('.lightbox-close').addEventListener('click',closeBox);
document.querySelector('.lightbox-prev').addEventListener('click',()=>show(current-1));
document.querySelector('.lightbox-next').addEventListener('click',()=>show(current+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox();});
document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')closeBox();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});
