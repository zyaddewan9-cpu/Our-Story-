const startDate = new Date("2025-07-17T00:00:00");

function updateTimer() {

    const now = new Date();

    const timePassed = now - startDate;

    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (timePassed / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (timePassed / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (timePassed / 1000) % 60
    );


    document.getElementById("timer").innerHTML =
    `
    ${days} Days ❤️<br>
    ${hours} Hours ✨<br>
    ${minutes} Minutes 🌙<br>
    ${seconds} Seconds
    `;
}


setInterval(updateTimer,1000);

updateTimer();
