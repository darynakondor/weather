weather("");
const cityInput = document.querySelector(".city-name");
cityInput.addEventListener('change', () => {
    weather(cityInput.value);
})
function weather (city) {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then ((res) => res.json())
    .then ((data) => {
        let section = document.querySelector(".block");
        section.innerHTML = `<div class="city"> ${data.name}</div>
        <div class="section"><div class="temperature"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" class="icon">
        <div class="temp">${Math.round(data.main.temp)}°C</div></div>
        <div class="wrapper"><div class="pressure">Pressure: ${data.main.pressure}</div>
        <div class="description">Description: ${data.weather[0].description}</div>
        <div class="humidity">Humidity: ${data.main.humidity}%</div>
        <div class="speed">Wind speed: ${data.wind.speed} m/s</div>
        <div class="deg">Wind direction: ${data.wind.deg}°</div></div></div>`;
    })
}

weather();