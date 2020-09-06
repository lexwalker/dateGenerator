let coreData = [
    {"28 июля 988": "Крещение руси"},
    {"5 февраля 2003": "День рождение Санька"},
    {"1 января 1": "День рождение Иисуса"}
]
let dataArray = [
    {"28 июля 988": "Крещение руси"},
    {"5 февраля 2003": "День рождение Санька"},
    {"1 января 1": "День рождение Иисуса"}
]

localStorage.setItem('coreData', JSON.stringify(coreData))

    if (localStorage.getItem('dataArray') == 'null' || localStorage.getItem('dataArray') == null) {
        localStorage.setItem('dataArray', localStorage.getItem('coreData'))
    }
    dataArray = JSON.parse(localStorage.getItem('dataArray'))



