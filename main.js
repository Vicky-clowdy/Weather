let searchBtn = document.getElementById("search");
let cityEl = document.getElementById("city");
let url = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'f6fb0d535256d3b13de5d468f7a1ad2c'

let iconDiv = document.getElementById("icons");
let windText = document.getElementById("wind-text");
let humidityText = document.getElementById("humidity-text");
let cityText = document.getElementById("city");
let temperatureText = document.getElementById("temp");
let cityIcon = document.querySelector("#city-icon")

async function fetchURL() {
    let cityInput = document.getElementById("city-input").value;
    let temp = `${url}?q=${cityInput}&appid=${apiKey}&units=metric`
    try {
        let res = await fetch(temp);
        if (!res.ok) {
            alert("City not found");
            throw new Error('city not found');
        }
        let data = res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error at fetching ", error)
    }

}



async function displayDetails() {
    let finalData = await fetchURL();
    humidityText.innerHTML = ` ${finalData.main.humidity} %  `
    windText.innerHTML = ` ${finalData.wind.speed} m/s `;
    cityIcon.classList.remove("hide");
    cityText.innerHTML = `${finalData.name} `;
    temperatureText.innerHTML = ` ${Math.round(finalData.main.temp)} °C`
    let mainWeather = finalData.weather[0].main
    console.log(mainWeather)
    let weatherIcon = document.getElementById("weather-icon");
    let weatherType = document.getElementById("weather-type");
    if (mainWeather == "Clouds") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/clouds.png";
        weatherType.innerHTML = "Clouds";
    } else if (mainWeather == "Clear") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/clear.png";
        weatherType.innerHTML = "Clear";
    } else if (mainWeather == "Haze") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/fog.png";
        weatherType.innerHTML = "Haze";
    } else if (mainWeather == "Rain") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/rain.png";
        weatherType.innerHTML = "Rain";
    } else if (mainWeather == "Mist") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/mist.png";
        weatherType.innerHTML = "Mist";
    } else if (mainWeather == "Snow") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/snow.png";
        weatherType.innerHTML = "Snow";
    } else if (mainWeather == "Drizzle") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/drizzle.png";
        weatherType.innerHTML = "Drizzle";
    } else if (mainWeather == "Thunderstorm") {
        weatherIcon.classList.remove("hide");
        weatherIcon.src = "images/storm.png";
        weatherType.innerHTML = "Thunder Storm";
    }

}

searchBtn.addEventListener("click", () => {
    displayDetails()
})