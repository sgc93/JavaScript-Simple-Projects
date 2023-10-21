"strict mode";

/////

const placeSpan = document.querySelector(".place");
const moreP = document.querySelector(".more");
const resultP = document.querySelector(".result");
const tellerDiv = document.getElementById("teller");
const askBtn = document.querySelector(".ask-btn");
const moreBtn = document.getElementById("moreBtn");

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
		tellerDiv.classList.remove("teller");
		tellerDiv.classList.add("teller-error");
		resultP.innerHTML = `Ops, Something went wrong 😔 ${data}.`;
	} else {
		placeSpan.innerHTML = data;
		moreBtn.classList.remove("hidden");
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
			const city = [parsedData][0].city;
			const country = [parsedData][0].country;
			if (city === "Throttled! See geocode.xyz/pricing") {
				console.log(`Eror: ${city}`);
				throw new Error(`API Error`);
			}
			displayResult(`${city}, ${country}.`, "data");
		})
		.catch((err) => {
			displayResult(err.message, "error");
		});
};

function whereAmI() {
	getLocationCordinates()
		.then((position) => {
			getLocationName(position.coords.latitude, position.coords.longitude);
		})
		.catch((err) => {
			displayResult(err.message, "error");
		});
	console.log("fetching data ...");
}

askBtn.addEventListener("click", whereAmI);
