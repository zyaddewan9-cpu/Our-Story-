// ===============================
// OUR STORY - SCRIPT
// ===============================

const loader = document.getElementById("loader");
const beginBtn = document.getElementById("beginBtn");

// -------------------------------
// LOADER
// -------------------------------

if(loader){

loader.addEventListener("click",()=>{

loader.classList.add("hideLoader");

});

}

// -------------------------------
// STARS
// -------------------------------

const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const stars=[];

for(let i=0;i<250;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+.4,
speed:Math.random()*.6+.15,
alpha:Math.random()

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

star.alpha+=0.01*Math.random();

ctx.beginPath();

ctx.fillStyle=`rgba(255,255,255,${
0.4+Math.sin(star.alpha)*0.6
})`;

ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

ctx.fill();

star.y+=star.speed;

if(star.y>canvas.height){

star.y=0;

star.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(draw);

}

draw();

// -------------------------------
// BEGIN BUTTON
// -------------------------------

if(beginBtn){

beginBtn.onclick=()=>{

document.getElementById("story")
.scrollIntoView({

behavior:"smooth"

});

};

}

// -------------------------------
// COUNTER
// -------------------------------

const startDate=new Date("2025-07-17T00:00:00");

function counter(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor(diff/3600000)%24;

const minutes=Math.floor(diff/60000)%60;

const d=document.getElementById("days");
const h=document.getElementById("hours");
const m=document.getElementById("minutes");

if(d)d.textContent=days;
if(h)h.textContent=hours;
if(m)m.textContent=minutes;

}

counter();

setInterval(counter,60000);
// -------------------------------
// FADE IN SECTIONS
// -------------------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(60px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// -------------------------------
// TYPEWRITER
// -------------------------------

const letter=document.getElementById("letterText");

if(letter){

const text=letter.innerHTML;

letter.innerHTML="";

let i=0;

function type(){

if(i<text.length){

letter.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

const letterObserver=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

type();

letterObserver.disconnect();

}

});

letterObserver.observe(letter);

}

// -------------------------------
// IMAGE PREVIEW
// -------------------------------

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="999999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

// -------------------------------
// END
// -------------------------------

console.log("❤️ Our Story Loaded Successfully");
