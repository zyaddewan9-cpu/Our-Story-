// =========================
// STARS BACKGROUND
// =========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";

    stars.forEach(star => {

        ctx.beginPath();
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

// =========================
// BEGIN BUTTON
// =========================

const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

});
// =========================
// LIVE COUNTER
// =========================

const startDate = new Date("2025-07-17T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

}

updateCounter();

setInterval(updateCounter, 60000);

// =========================
// FADE ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

document.querySelector(".hero").classList.remove("hidden");
document.querySelector(".hero").classList.add("show");

// =========================
// IMAGE CLICK EFFECT
// =========================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});
