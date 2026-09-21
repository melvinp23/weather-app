const getWeatherBtn = document.getElementById('get-weather');
const addressDiv = document.querySelector('p');
const api_key = 'BKULCM6WCG2SXVP8Y4EU7SY3W';
const print =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=';

console.log(addressDiv.textContent);

async function getWeather() {
	try {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${api_key}`,
		);
		const weatherData = await response.json();
		addressDiv.textContent = weatherData.address;
		document.body.appendChild(addressDiv);
		getWeatherBtn.addEventListener('click', () => {
			console.log(weatherData);
		});
	} catch (error) {
		console.error(error);
	}
}
getWeather();
