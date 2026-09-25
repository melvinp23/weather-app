const api_key = 'BKULCM6WCG2SXVP8Y4EU7SY3W';
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const weatherContainer = document.getElementById('container');

const searchLocation = () => {
	fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}?key=${api_key}`,
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response);

			const cityName = document.createElement('div');
			cityName.textContent = response.resolvedAddress;
			weatherContainer.appendChild(cityName);

			const tempDisplay = document.createElement('div');
			tempDisplay.setAttribute('id', 'temp-display');
			tempDisplay.setAttribute('data-temp-f', response.days[0].temp);
			tempDisplay.textContent = `${response.days[0].temp}°F`;

			const unitToggle = document.createElement('button');
			unitToggle.setAttribute('id', 'unit-toggle');
			unitToggle.textContent = 'Switch to Celsius';

			unitToggle.addEventListener('click', () => {
				const fahrenheit = response.days[0].temp;
				const isCurrentlyFahrenheit = unitToggle.textContent === 'Switch to Celsius';

				if (isCurrentlyFahrenheit) {
					const celsius = Math.round(((fahrenheit - 32) * 5) / 9);

					tempDisplay.textContent = `${celsius}°C`;
					unitToggle.textContent = 'Switch to Fahrenheit';
					weatherContainer.appendChild(unitToggle);
				} else {
					tempDisplay.textContent = `${fahrenheit}°F`;
					unitToggle.textContent = 'Switch to Celsius';
					weatherContainer.appendChild(unitToggle);
				}
			});

			weatherContainer.appendChild(tempDisplay);
			weatherContainer.appendChild(unitToggle);
			return weatherContainer;
		})
		.catch(function (error) {
			console.error(error.message);
		});
};

searchBtn.addEventListener('click', event => {
	event.preventDefault();

	if (searchInput.value == '') {
		alert('Please enter a location');
	} else {
		weatherContainer.textContent = '';
		searchLocation();
		searchInput.value = '';
	}
});
