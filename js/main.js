(function () {
    // Определение переменных и элементов
    let date = document.querySelector('.date');
    let buttonsBlock = document.querySelector('.buttons');
    let restartBtn = document.querySelector('.restart')
    let datesBlock = document.querySelector('.dates-block')
    let restartBlock = document.querySelector('.restart-block')
    let continueBtn = document.querySelector('.continue')
    let successBtn = document.querySelector('.success');
    let deniedBtn = document.querySelector('.denied');
    let event = document.querySelector('.event');
    let randomDate;

    // Запуск программы
    window.start = function () {
        JSON.parse(localStorage.getItem('coreData'))
        startBtn.style.display = 'none';
        eventBlock.style.display = 'block';
        fadeAnimation();
        validate()
    }

    // Получение новой случайной даты и вывод значений на UI
    function getRandomElement() {
        randomDate = dataArray[Math.floor(Math.random() * dataArray.length)];
        date.textContent = Object.keys(randomDate)[0];
        event.textContent = Object.values(randomDate)[0];
    }

    // Нажатие на кнопку "Я знаю"
    successBtn.addEventListener('click', e => {
        e.preventDefault()
        // Удаление даты из массива
        dataArray.splice(dataArray.indexOf(randomDate), 1)
        localStorage.setItem('dataArray', JSON.stringify(dataArray))
        dataArray = JSON.parse(localStorage.getItem('dataArray'))
        // Проверка на наличие дат
        if (localStorage.getItem('dataArray') != null && dataArray.length > 0) {
            getRandomElement()
        }
        else {
            localStorage.setItem('dataArray', null)
            datesBlock.style.display = 'none'
            restartBlock.style.display = 'block'
        }
    })

    // Нажатие на кнопку "Не помню"
    deniedBtn.addEventListener('click', e => {
        e.preventDefault()
        showEvent()
        buttonsBlock.style.display = 'none'
        continueBtn.style.display = 'block'
    })

    // Нажатие на кнопку "Запомнил"
    continueBtn.addEventListener('click', e => {
        e.preventDefault()
        buttonsBlock.style.display = 'block'
        continueBtn.style.display = 'none'
        event.style.backgroundColor = `rgba(161, 161, 161, 1)`
        eventOpacity = 1;
        getRandomElement()
    })

    restartBtn.addEventListener('click', e => {
        e.preventDefault()
        localStorage.setItem('dataArray', JSON.stringify(coreData))
        location.reload()
    })

    function validate() {
        if (localStorage.getItem('dataArray') != null) {
            if (dataArray.length > 0) {
                getRandomElement()
            }
            else {
                localStorage.setItem('dataArray', null)
            }
        }
    }

})()

