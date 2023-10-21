"strict mode";

/////

const placeSpan = document.querySelector(".place");
const moreP = document.querySelector(".more");
const askBtn = document.querySelector(".ask-btn");
const moreBtn = document.querySelector("more-btn");

const getLocationCordinates = function () {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		} else {
			throw new Error("The browser does not support geolocation.");
		}
	});
};

const displayResult = (data, type) => {
	if (type === "error") {
		placeSpan.innerHTML = "...";
	} else {
		placeSpan.innerHTML = data;
	}
};

const getLocationName = function (latitude, longitude) {
	fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok.");
			}
			return response.json();
		})
		.then((parsedData) => {
			console.log(`API Error: ${parsedData.error}.`);
			if (parsedData.error) {
				throw new Error(`API Error: ${parsedData.error}.`);
			}
			const data = [parsedData][0];
			displayResult(data.city, "data");
		})
		.catch((err) => {
			displayResult(err, "error");
			console.log(err);
		});
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
