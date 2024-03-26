//vamos buscar as informacoes em uma API

const key = "0e53d98fc0104267eba8def4d5786aef"

function putOnScreen(dados) {
    document.querySelector(`.city`).innerHTML = dados.name
    document.querySelector(`.weather`).innerHTML = Math.floor(dados.main['temp']) + 'º C'
    document.querySelector(`.text-forecast`).innerHTML = dados.weather[0].description

    document.querySelector(`.humidity`).innerHTML = 'Umidade: ' + dados.main['humidity'] + '%'
    
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados.weather[0].icon)
}
async function searchCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resp => resp.json())
    console.log(dados)

    putOnScreen(dados)
}



function clickBtn() {
    const city = document.querySelector('.input-city').value

    searchCity(city)
}

