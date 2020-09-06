let blockOpacity = 0;
let eventOpacity = 1;
let event = document.querySelector('.event');
function fadeAnimation() {
    if (blockOpacity < 1) {
        blockOpacity += .02;
        setTimeout(function () {fadeAnimation()}, 10)
    }
    eventBlock.style.opacity = blockOpacity;
}

function showEvent() {
    if (eventOpacity > 0) {
        eventOpacity -= .02;
        setTimeout(function () {showEvent()}, 10)
    }
    event.style.backgroundColor = `rgba(161,161,161, ${eventOpacity})`
}