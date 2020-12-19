function getTimeFromSeconds(sec) { // 1-1-1970
    const date = new Date(sec * 1000) //sec * 1000 = thousandth
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const clock = document.querySelector('.clock')

let seconds = 0
let timer //att auto

function startClock() {
    timer = setInterval(function() {
        seconds++
        clock.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('start')) {
        clock.classList.remove('paused')
        clearInterval(timer)
        startClock()
    }
    if (el.classList.contains('pause')) {
        clearInterval(timer)
        clock.classList.remove('colorClock')
        clock.classList.add('paused')
    }
    if (el.classList.contains('reset')) {
        clearInterval(timer)
        seconds = 0
        clock.innerHTML = '00:00:00'
    }
})