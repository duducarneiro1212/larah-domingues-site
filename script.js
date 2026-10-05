// Para adicionar posts: coloque o arquivo na pasta img/ e inclua uma linha aqui.
// Foto: {tipo:'foto', src:'img/foto1.svg', txt:'...', quando:'...', likes:0}
// Video: {tipo:'video', src:'img/video1.mp4', poster:'img/foto2.svg', txt:'...', quando:'...', likes:0}
const PROFILE_IMAGE='dudufts/WhatsApp%20Image%202026-10-05%20at%2020.11.18.jpeg';
const POSTS=[
 ...[
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.45.11.mp4'},
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.45.07.mp4'},
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.45.05.mp4'},
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.45.03.mp4'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.45.03.jpeg'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.45.03%20(1).jpeg'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.45.00.jpeg'},
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.44.55.mp4'},
  {tipo:'video',src:'dudufts/WhatsApp%20Video%202026-10-05%20at%2020.44.52.mp4'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.44.52.jpeg'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.44.48.jpeg'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.44.47.jpeg'},
  {tipo:'foto',src:'dudufts/WhatsApp%20Image%202026-10-05%20at%2020.44.47%20(1).jpeg'}
 ].map(p=>({...p,quando:'Dudufts',likes:0})),
 ...Array.from({length:9},(_,i)=>({tipo:'video',src:`dudufts/ft${i+1}.mp4`,quando:'Dudufts',likes:0}))
];
const $=s=>document.querySelector(s);
$('#nf').textContent=POSTS.filter(p=>p.tipo==='foto').length;
$('#nv').textContent=POSTS.filter(p=>p.tipo==='video').length;
$('#feed').innerHTML=POSTS.map((p,i)=>`<article class="post"><header><img class="mini" src="${PROFILE_IMAGE}" alt=""><div><strong>Larah Domingues</strong><small>${p.quando}</small></div></header>
<div class="media">${p.tipo==='video'?`<video src="${p.src}"${p.poster?` poster="${p.poster}"`:''} controls muted loop playsinline preload="metadata"></video>`:`<img src="${p.src}" alt="${p.txt||'Foto do feed'}" loading="lazy">`}</div>
<div class="acts"><button class="like" data-i="${i}" aria-pressed="false">♥ <span>${p.likes}</span></button></div>${p.txt?`<p>${p.txt}</p>`:''}</article>`).join('');
$('#feed').addEventListener('click',e=>{
 const b=e.target.closest('.like');if(!b)return;
 const on=b.classList.toggle('on');b.setAttribute('aria-pressed',on);
 b.querySelector('span').textContent=POSTS[b.dataset.i].likes+(on?1:0);
});
// Vídeos tocam sozinhos (sem som) quando aparecem na tela
const io=new IntersectionObserver(es=>es.forEach(en=>{const v=en.target;if(en.isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.6});
document.querySelectorAll('video').forEach(v=>io.observe(v));
