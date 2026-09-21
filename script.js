const api_key = 'BKULCM6WCG2SXVP8Y4EU7SY3W';
const print =
	'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=';

async function getWeather() {
	try {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${api_key}`,
		);
		const weatherData = await response.json();
		console.log(weatherData);
	} catch (error) {
		console.error(error);
	}
}
getWeather();
