import fetchWeatherData from "./weather";

function getWeatherData() {
  const searchBtn = document.querySelector('.searchBtn');
  searchBtn.addEventListener('click', () => {
    let searchInput = document.querySelector('.search');
    fetchWeatherData(searchInput.value);
    searchInput.value = '';
  });
}
getWeatherData();
