// Replace 'YOUR_API_KEY' with your actual API key from a weather service provider
const apiKey = 'e262d05f2e075765580bbd7439beaf3c';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationName = document.getElementById('locationName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            locationName.textContent = data.name;
            temperature.textContent = data.main.temp;
            weatherCondition.textContent = data.weather[0].description;
            humidity.textContent = data.main.humidity;
            windSpeed.textContent = data.wind.speed;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
