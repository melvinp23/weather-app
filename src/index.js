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
			const address = document.createElement('div');
			address.textContent = `name: ${response.resolvedAddress}`;
			weatherContainer.appendChild(address);
		})
		.catch(function (error) {
			console.error(error.message);
		});
};

searchBtn.addEventListener('click', event => {
	event.preventDefault();
	if (searchInput.value == '') {
		console.error('Please enter a valid location');
	} else {
		searchLocation();
	}
});
