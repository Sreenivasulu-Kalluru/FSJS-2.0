// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

require('dotenv').config();
const API_KEY = process.env.API_KEY;

let data;

const time = document.getElementById('time');
const inputBox = document.getElementById('inputBox');
const countryName = document.getElementById('countryName');
const stateName = document.getElementById('stateName');
const cityName = document.getElementById('cityName');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const temprature = document.getElementById('temprature');
const logoImage = document.getElementById('logoImage');
const weatherStatus = document.getElementById('weatherStatus');

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert('Please Enter The City Name: ');
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  time.innerHTML = data.location.localtime;
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  feelsLike.innerHTML = data.current.feelslike_c;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
});
