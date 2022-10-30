function errorMessage() {
  const error = document.querySelector('.error');
  error.classList.toggle('active');
}

async function fetchWeatherData(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=299210b0adfb06a8cfaeedf6ef92b116`,
    { mode: 'cors' }
  );
  const error = document.querySelector('.error');

  if (response.status === 400 || response.status === 404) {
    error.classList.add('active');
  } else {
    error.classList.remove('active');
    const weatherData = await response.json();
    let weatherData2 = convertTemp(weatherData);
    displayData(weatherData2);
  }
}

export default fetchWeatherData;

function convertTemp(weatherData) {
  // Kelvin to fahrenheit
  if (weatherData.main.temp) {
    let fahrenheit = weatherData.main.temp;
    let convert = Math.round((9 / 5 * (fahrenheit - 273) + 32), 10);
    return convert;
  }
}

function displayData(weatherData2) {
  const temp = document.querySelector('.temp');
  temp.innerHTML = `${weatherData2} `;
}
