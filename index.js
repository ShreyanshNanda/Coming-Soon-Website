let countDownDate = new Date("Oct 29, 2023 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let Dist = countDownDate - now;

    let days = Math.floor(Dist / (1000 * 60 * 60 * 24));
    let hours = Math.floor((Dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mintues = Math.floor((Dist % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((Dist % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mintues;
    document.getElementById("sec").innerHTML = seconds;

    if (Dist < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }
}, 1000);