/*====================================
        START DATE
====================================*/

const startDate = new Date(2025, 6, 17, 0, 0, 0);
// الشهر 6 = July لأن JavaScript بتبدأ من 0


/*====================================
        COUNTER
====================================*/

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    const difference = now.getTime() - startDate.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (difference % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const s = Math.floor(
        (difference % (1000 * 60))
        /
        1000
    );

    days.textContent = d;
    hours.textContent = h.toString().padStart(2,"0");
    minutes.textContent = m.toString().padStart(2,"0");
    seconds.textContent = s.toString().padStart(2,"0");

}

updateCounter();

setInterval(updateCounter,1000);


/*====================================
        SCROLL BUTTON
====================================*/

const button = document.querySelector(".scroll-btn");

button.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#counter").scrollIntoView({

behavior:"smooth"

});

});


/*====================================
        SCROLL ANIMATION
====================================*/

const sections = document.querySelectorAll(

".counter,.letter,.music,footer"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.2

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s ease";

observer.observe(section);

});
