
const apiKey = "67899b85e4595583171b402a1ab10d0b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}&units=metric&q=vancouver`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = data.main.temp + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}

checkWeather();