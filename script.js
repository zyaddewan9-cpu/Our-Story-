// Tap effect
document.body.addEventListener("click", () => {

    document.querySelector(".intro").style.opacity = "0";

    setTimeout(()=>{

        document.querySelector(".hero").scrollIntoView({
            behavior:"smooth"
        });

    },500);

});


// Create floating stars

const stars = document.getElementById("stars");

for(let i = 0; i < 80; i++){

    let star = document.createElement("span");

    star.style.position="absolute";
    star.style.width="2px";
    star.style.height="2px";
    star.style.background="white";
    star.style.borderRadius="50%";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}


// Scroll reveal

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        let position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.style.transform="translateY(0)";
            card.style.opacity="1";

        }

    });

});


// Initial cards state

cards.forEach(card=>{

    card.style.transform="translateY(80px)";
    card.style.opacity="0";
    card.style.transition="1s";

});
