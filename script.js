/* ===== EDIT ME: your name, links and projects ===== */
const SITE={name:"ArctxFox",github:"https://github.com/arctxfox",email:"arctxfox@gmail.com"};
const PROJECTS=[
 {cat:"web",name:"Aurora Notes",desc:"A tiny note-taking app that lives in your browser.",tags:["HTML","JS"],url:"#"},
 {cat:"web",name:"Snowdrift Weather",desc:"Weather dashboard with animated icons.",tags:["JS","API"],url:"#"},
{cat:"tools",name:"Color Wheel Picker",desc:"Pick any colour from a wheel and copy its HEX and RGB.",tags:["Canvas","JS"],url:"colorpicker.html"},
 {cat:"tools",name:"Den Converter",desc:"Unit and colour converter for quick dev work.",tags:["JS","CSS"],url:"#"},
 {cat:"games",name:"Lemming Run",desc:"A snowy endless runner made with canvas.",tags:["Canvas","JS"],url:"#"},
 {cat:"lab",name:"Particle Blizzard",desc:"Experiment: 10k particles with a WebGL shader.",tags:["WebGL"],url:"#"}
];
const NAV=[
 ["Home","index.html"],
 ["Projects",[["Web apps","web.html"],["Tools","tools.html"],["Color picker","colorpicker.html"],["Games","games.html"]]],
 ["Lab",[["Experiments","lab.html"]]],
 ["About",[["About me","about.html"],["Skills","skills.html"]]],
 ["Contact","contact.html"]];
const FOX=`<img src="fox.png" alt="ArctxFox arctic fox">`;
const HEAD=`<img src="foxhead.png" alt="Logo">`;
const here=location.pathname.split("/").pop()||"index.html";
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
/* header */
const link=([t,h])=>`<a href="${h}" ${h===here?'class="active" aria-current="page"':""}>${t}</a>`;
const menu=NAV.map(([t,x])=>typeof x==="string"?`<li>${link([t,x])}</li>`:
 `<li><button aria-haspopup="true" aria-expanded="false">${t} &#9662;</button><ul class="sub">${x.map(i=>`<li>${link(i)}</li>`).join("")}</ul></li>`).join("");
document.body.insertAdjacentHTML("afterbegin",`<canvas id="snow"></canvas><header class="bar"><a class="brand" href="index.html">${HEAD}<span>${SITE.name}</span></a><button class="burger" aria-label="Menu">&#9776;</button><ul class="menu">${menu}</ul></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer>&copy; ${new Date().getFullYear()} ${SITE.name} &bull; Built with HTML, CSS and JS &bull; <a href="${SITE.github}">GitHub</a></footer>`);
const ul=document.querySelector(".menu");
document.querySelector(".burger").onclick=()=>ul.classList.toggle("show");
ul.querySelectorAll("button").forEach(b=>b.onclick=e=>{const li=b.parentElement,o=!li.classList.contains("open");
 ul.querySelectorAll("li.open").forEach(x=>{x.classList.remove("open");x.firstChild.setAttribute?.("aria-expanded","false")});
 li.classList.toggle("open",o);b.setAttribute("aria-expanded",o);e.stopPropagation()});
document.addEventListener("click",()=>ul.querySelectorAll("li.open").forEach(x=>x.classList.remove("open")));
document.addEventListener("keydown",e=>{if(e.key==="Escape")ul.querySelectorAll("li.open").forEach(x=>x.classList.remove("open"))});
ul.querySelectorAll(".active").forEach(a=>{const p=a.closest(".sub");if(p)p.previousElementSibling.classList.add("active")});
/* project cards */
const box=document.querySelector("[data-cat]");
if(box){const l=PROJECTS.filter(p=>p.cat===box.dataset.cat);
 box.innerHTML=l.length?l.map(p=>`<article class="card"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><a class="go" href="${p.url}">Open project</a></article>`).join(""):`<div class="win"><div class="title">Empty folder</div><div class="body empty">Nothing here yet. Add a project to the PROJECTS list in script.js.</div></div>`}
/* skill meters */
document.querySelectorAll(".meter div").forEach(m=>setTimeout(()=>m.style.width=m.dataset.v+"%",200));
/* snow */
const c=document.getElementById("snow"),x=c.getContext("2d");let W,H,fl=[];
const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight};rs();addEventListener("resize",rs);
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
 for(let i=0;i<70;i++)fl.push({x:Math.random()*W,y:Math.random()*H,r:1+Math.random()*3,s:.3+Math.random()*1,d:Math.random()*6});
 (function f(){x.clearRect(0,0,W,H);x.fillStyle="rgba(255,255,255,.85)";fl.forEach(p=>{p.y+=p.s;p.d+=.01;p.x+=Math.sin(p.d)*.5;if(p.y>H){p.y=-5;p.x=Math.random()*W}x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(f)})()}
/* home page */
const o=document.querySelector(".orb"),la=document.getElementById("latest");
if(o)o.innerHTML=FOX;
if(la)la.innerHTML=PROJECTS.slice(0,3).map(p=>`<article class="card"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><a class="go" href="${p.url}">Open project</a></article>`).join("");
document.body.appendChild(Object.assign(document.createElement("script"),{src:"i18n.js"}));