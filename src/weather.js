async function fetchWeatherData(location) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=299210b0adfb06a8cfaeedf6ef92b116`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
  }

  export default fetchWeatherData;