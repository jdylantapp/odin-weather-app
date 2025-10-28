import apiSearch from "./apiSearch.js";

const weather = new apiSearch();

const cityForm = document.getElementById("search-location");
const searchBox = document.getElementById("location");
const weatherCard = document.querySelector(".weather-card");
const locationTitle = document.querySelector(".city-title");
const weatherLogo = document.querySelector(".weather-logo");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".weather-condition");
const humidity = document.querySelector(".humidity");

cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchCity = formData.get('city');

    await weather.getWeather(searchCity);
    weather.convertToCelsius(weather.temperature);

    searchBox.value = '';
    weatherCard.classList.add("active");

    locationTitle.textContent = weather.location;
    weatherLogo.style.backgroundImage = `url('./assets/api-icons/${weather.iconName}')`;
    temperature.innerHTML = `${weather.temperature}&deg;C`;
    condition.textContent = `${weather.weatherCondition}`;
    humidity.textContent = `Humidity: ${weather.humidity}%`;

})