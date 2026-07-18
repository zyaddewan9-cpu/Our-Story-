const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 220; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.7 + 0.2
    });
}

function animateStars() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fill();

        star.y+=star.speed;

        if(star.y>canvas.height){

            star.y=0;
            star.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();

const beginBtn=document.getElementById("beginBtn");

beginBtn.addEventListener("click",()=>{

    document.getElementById("story").scrollIntoView({

        behavior:"smooth"

    });

});
