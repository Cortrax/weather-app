import fetchWeatherData from "./weather";

function renderTemp(weatherData) {
    const tempDiv = document.querySelector('.temp')
    console.log(weatherData);
}

function renderData() {
    renderTemp();
}

export default renderData;