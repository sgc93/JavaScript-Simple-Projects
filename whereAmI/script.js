"strict mode";

/////

const placeSpan = document.querySelector(".place");
const moreP = document.querySelector(".more");
const askBtn = document.querySelector(".ask-btn");
const moreBtn = document.querySelector("more-btn");

const getLocationCordinates = function () {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const getLocationName = function (latitude, longitude) {
	fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("error happend");
			}
			return response.json();
		})
		.then((parsedData) => {
			const data = [parsedData][0];
			console.log(data);
			placeSpan.innerHTML = `${data.city},${data.country}`;
		})
		.catch((err) => console.log(err));
};

function whereAmI() {
	getLocationCordinates()
		.then((position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			console.log(position.coords);
			getLocationName(latitude, longitude);
		})
		.catch((err) => console.log(err));
	console.log("fetching data ...");
}

askBtn.addEventListener("click", whereAmI);
