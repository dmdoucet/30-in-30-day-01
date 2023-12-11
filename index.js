
const apiKey = "67899b85e4595583171b402a1ab10d0b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apiKey}&units=metric&q=${city}`);
    var data = await response.json();

    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


