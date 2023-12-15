
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateClock, 1000);
    updateClock(); // initial clock state
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    rotateHand("hour", (hours + minutes / 60) * 30);
    rotateHand("minute", minutes * 6);
    rotateHand("second", seconds * 6);
}

function rotateHand(handId, degrees) {
    const hand = document.getElementById(handId);


    hand.style.transition = 'none';
    hand.style.transform = `rotate(${degrees}deg)`;

    // force a reflow to apply the initial rotation immediately
    hand.offsetWidth;

    // re enable transitions for the next update
    hand.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.4, 0.55, 0.9)';
}
