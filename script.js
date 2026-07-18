// ==========================
// OUR STORY
// ==========================

// Loader

const loader = document.getElementById("loader");

if (loader) {

loader.addEventListener("click", () => {

loader.classList.add("hideLoader");

});

}

// Begin Button

const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {

beginBtn.addEventListener("click", () => {

const story = document.getElementById("story");

if (story) {

story.scrollIntoView({

behavior: "smooth"

});

}

});

}

// ==========================
// Stars Background
// ==========================

const canvas = document.getElementById("stars");

if (canvas) {

const ctx = canvas.getContext("2d");

function resizeCanvas() {

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 180; i++) {

stars.push({

x: Math.random() * canvas.width,

y: Math.random() * canvas.height,

r: Math.random() * 2 + 0.5,

speed: Math.random() * 0.4 + 0.1,

alpha: Math.random() * Math.PI * 2

});

}

function animateStars() {

ctx.clearRect(0, 0, canvas.width, canvas.height);

stars.forEach(star => {

star.alpha += 0.02;

ctx.beginPath();

ctx.fillStyle = `rgba(255,255,255,${
0.5 + Math.sin(star.alpha) * 0.5
})`;

ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

ctx.fill();

star.y += star.speed;

if (star.y > canvas.height) {

star.y = 0;

star.x = Math.random() * canvas.width;

}

});

requestAnimationFrame(animateStars);

}

animateStars();

}
// ==========================
// Counter
// ==========================

const startDate = new Date("2025-07-17T00:00:00");

function updateCounter() {

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
const minutes = Math.floor(diff / (1000 * 60)) % 60;

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");

if (d) d.textContent = days;
if (h) h.textContent = hours;
if (m) m.textContent = minutes;

}

updateCounter();

setInterval(updateCounter, 60000);

// ==========================
// Fade Sections
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
entry.target.style.transition = "all .8s ease";

}

});

}, { threshold: 0.15 });

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";

observer.observe(section);

});

const hero = document.querySelector(".hero");

if (hero) {

hero.style.opacity = "1";
hero.style.transform = "translateY(0)";

}

// ==========================
// Typewriter
// ==========================

const letter = document.getElementById("letterText");

if (letter) {

const text = letter.textContent;

letter.textContent = "";

let i = 0;

function write() {

if (i < text.length) {

letter.textContent += text.charAt(i);

i++;

setTimeout(write, 35);

}

}

const letterObserver = new IntersectionObserver((entries) => {

if (entries[0].isIntersecting) {

write();

letterObserver.disconnect();

}

});

letterObserver.observe(letter);

}

// ==========================
// Image Preview
// ==========================

document.querySelectorAll(".gallery img").forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:flex;
justify-content:center;
align-items:center;
z-index:999999;
padding:20px;
`;

const image = document.createElement("img");

image.src = img.src;

image.style.maxWidth = "95%";
image.style.maxHeight = "95%";
image.style.borderRadius = "18px";

overlay.appendChild(image);

overlay.onclick = () => overlay.remove();

document.body.appendChild(overlay);

});

});

console.log("❤️ Our Story Ready");
