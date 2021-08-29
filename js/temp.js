const search = () => {
    const search = document.getElementById('weather-button')
    const searchText = search.value

    search.value = ''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=3090f6cebb6ae4be2052dc5c2e8ae0a1`)
        .then(res => res.json())
        .then(data => displayWather(data))
}


const displayWather = (weathers) => {

    const showWeather = document.getElementById('showWeather')



    const div = document.createElement('div')
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png" alt="">
            <h1>${weathers.name}</h1>
            <h3><span> ${weathers.main.temp} </span>&deg;F</h3>
            <h1 class="lead">${weathers.weather[0].main}</h1>
        
        `
    showWeather.appendChild(div)



}