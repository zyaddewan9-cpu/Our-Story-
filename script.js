const startDate = new Date("2025-07-17T00:00:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCounter() {

    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) return;

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((diff / (1000 * 60)) % 60);
    const second = Math.floor((diff / 1000) % 60);

    if (days) days.textContent = day;
    if (hours) hours.textContent = String(hour).padStart(2, "0");
    if (minutes) minutes.textContent = String(minute).padStart(2, "0");
    if (seconds) seconds.textContent = String(second).padStart(2, "0");
}

updateCounter();

setInterval(updateCounter, 1000);

const button = document.querySelector(".scroll-btn");

if (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("counter").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".counter,.letter,.music,footer").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s";
    observer.observe(section);
});
