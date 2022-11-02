function errorMessage() {
  const error = document.querySelector('.error');
  error.classList.toggle('active');
}

async function fetchWeatherData(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=299210b0adfb06a8cfaeedf6ef92b116`,
    { mode: 'cors' }
  );
  const error = document.querySelector('.error');

  if (response.status === 400 || response.status === 404) {
    error.classList.add('active');
  } else {
    error.classList.remove('active');
    const weatherData = await response.json();
    displayTemp(weatherData);
    displayHumidity(weatherData);
    displayWindSpeed(weatherData);
    displayPressure(weatherData);
    displayClouds(weatherData);
    console.log(weatherData);
  }
}

function displayTemp(weatherData) {
  // Kelvin to fahrenheit
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const tempHighLow = document.querySelector('.highLow');

  const fahrenheit1 = Math.round(weatherData.main.temp);
  temp.innerHTML = `${fahrenheit1}°`;

  const feelsLikeTemp = Math.round(weatherData.main.feels_like);
  feelsLike.innerHTML = `Feels like: ${feelsLikeTemp}°`;

  const fahrenheitMax = Math.round(weatherData.main.temp_max);
  const fahrenheitMin = Math.round(weatherData.main.temp_min);
  tempHighLow.innerHTML = `High/low: ${fahrenheitMax}°/${fahrenheitMin}°`;
}

function displayHumidity(weatherData) {
  const humidity = document.querySelector('.humidity');
  humidity.innerHTML = 'Humidity: ' + weatherData.main.humidity + '%';
}

function displayWindSpeed(weatherData) {
  const windSpeed = document.querySelector('.windSpeed');
  const wind = Math.round(weatherData.wind.speed * 1.151);
  windSpeed.innerHTML = `Wind speed: ${wind}mph`;
}

function displayPressure(weatherData) {
  const pressure = document.querySelector('.pressure');
  const pressureIn = (weatherData.main.pressure / 33.864).toFixed(2);
  pressure.innerHTML = `Pressure: ${pressureIn}in`;
}

function displayClouds(weatherData) {
  const clouds = document.querySelector('.clouds');
  console.log(weatherData.weather.description);
}

export default fetchWeatherData;
