import fetchWeatherData from "./weather";

function getWeatherData() {
  let searchInput = document.querySelector('.search');
  const searchBtn = document.querySelector('.searchBtn');
  searchBtn.addEventListener('click', () => {
    fetchWeatherData(searchInput.value);
    searchInput.value = '';

  });

  searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      fetchWeatherData(searchInput.value);
      searchInput.value = '';
    }
  });
}
getWeatherData();