/*==========================================
            DATE COUNTER
==========================================*/

const startDate = new Date("2025-07-17T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(diff / 3600000) % 24;

    const minutes = Math.floor(diff / 60000) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);


/*==========================================
            LIGHTBOX
==========================================*/

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.querySelector(".lightbox");

const preview = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        preview.src=img.src;

    });

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}
/*==========================================
            SCROLL ANIMATION
==========================================*/

const sections = document.querySelectorAll(
".counter,.gallery,.letter,.music,footer"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(70px)";
section.style.transition="all .9s ease";

observer.observe(section);

});


/*==========================================
            HERO PARALLAX
==========================================*/

const cover = document.querySelector(".cover");

window.addEventListener("scroll",()=>{

const y = window.scrollY;

cover.style.transform=
`scale(1.12) translateY(${y*0.15}px)`;

});


/*==========================================
            SMOOTH SCROLL
==========================================*/

const scrollBtn=document.querySelector(".scroll-btn");

scrollBtn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#counter").scrollIntoView({

behavior:"smooth"

});

});
