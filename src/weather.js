const error = document.querySelector('.error');

async function fetchWeatherData(location) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=299210b0adfb06a8cfaeedf6ef92b116`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    
    if (response.status === 400) {
      errorMessage();
    } else {
      error.style.display = 'none';
    }
  }

  export default fetchWeatherData;