let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')


const relogi = setInterval(function time(){
    let dateToday = new Date()
    let hora = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    horas.textContent = hora
    minutos.textContent = min
    segundos.textContent = sec
})
