/*logic*/

const searchBtn = document.getElementById('searchBtn');
const inputBox = document.querySelector('.input-box');
const weatherBody = document.querySelector('.weather-body');
const locationNotFound = document.querySelector('.location-not-found');

const temperature = document.querySelector('.weather-box .temperature');
const description = document.querySelector('.weather-box .description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');
const gust = document.getElementById('gust');
const visibility = document.getElementById('visibility');

// OpenWeatherMap API Key and URL (replace YOUR_API_KEY with your actual API key)
const apiKey = '2f745fa85d563da5adb87b6cd4b81caf';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const location = inputBox.value.trim();
    if (location !== '') {
        fetchWeather(location);
    }
});

// Function to fetch weather data
async function fetchWeather(location) {
    const response = await fetch(`${apiURL}${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
        locationNotFound.style.display = 'flex';
        weatherBody.style.display = 'none';
    } else {
        locationNotFound.style.display = 'none';

        // Updating the weather data on the page
        temperature.innerHTML = `${data.main.temp}°C`;
        description.innerHTML = data.weather[0].description;
        humidity.innerText = `${data.main.humidity}%`;
        windSpeed.innerText = `${data.wind.speed} km/h`;
        pressure.innerText = `${data.main.pressure} hPa`;
        gust.innerText = `${data.wind.gust ? data.wind.gust : 'N/A'} km/h`;
        visibility.innerText = `${(data.visibility / 1000).toFixed(2)} km`; // Convert visibility to km
    }
}