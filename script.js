// ===============================
// OUR STORY
// ===============================

// LOADER
const loader = document.getElementById("loader");

if (loader) {
    loader.addEventListener("click", () => {
        loader.classList.add("hideLoader");
    });
}

// HERO BUTTON
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

// STARS

const canvas = document.getElementById("stars");

if (canvas) {

const ctx = canvas.getContext("2d");

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

const stars=[];

for(let i=0;i<220;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+0.5,
speed:Math.random()*0.5+0.2,
alpha:Math.random()*Math.PI*2

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

star.alpha+=0.02;

ctx.beginPath();

ctx.fillStyle=`rgba(255,255,255,${
0.5+Math.sin(star.alpha)*0.5
})`;

ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

ctx.fill();

star.y+=star.speed;

if(star.y>canvas.height){

star.y=0;
star.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animate);

}

animate();

}
// ===============================
// COUNTER
// ===============================

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

// ===============================
// TYPEWRITER
// ===============================

const letter = document.getElementById("letterText");

if (letter) {

    const originalText = letter.textContent;
    letter.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {

            letter.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    const letterObserver = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            typeWriter();

            letterObserver.disconnect();

        }

    });

    letterObserver.observe(letter);

}

// ===============================
// FADE ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all .8s ease";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";

    sectionObserver.observe(section);

});

const hero = document.querySelector(".hero");

if (hero) {

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";

}

// ===============================
// IMAGE PREVIEW
// ===============================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "999999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        overlay.appendChild(image);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});

console.log("Our Story Loaded ❤️");
