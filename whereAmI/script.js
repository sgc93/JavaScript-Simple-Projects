"strict mode";

/////

const placeSpan = document.querySelector(".place");
const moreP = document.querySelector(".more");
const askBtn = document.querySelector(".ask-btn");
const moreBtn = document.querySelector("more-btn");

const getLocation = function () {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = getLocation()
	.then((position) => console.log(position))
	.catch((err) => console.log(err));

askBtn.addEventListener("click", whereAmI);
