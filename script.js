// Countdown Timer Logic
const eventDate = new Date('January 18, 2025 09:00:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

function toggleMenu() {
    const menu = document.querySelector('.nav-links-mobile');
    menu.classList.toggle('active');
}
