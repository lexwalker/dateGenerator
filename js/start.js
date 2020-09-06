let startBtn = document.querySelector('.start');
let eventBlock = document.querySelector('.event-block');
startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.start();
})