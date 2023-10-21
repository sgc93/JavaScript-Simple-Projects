# WhereAmI?

## sample code:- <br>

a. with `Promising` a geolocation:-

```
const getLocationCordinates = function () {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		} else {
			throw new Error("The browser does not support geolocation.");
		}
	});
};
```

b. reverse geocoding

```
const getLocationName = function (latitude, longitude) {
	fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok.");
			}
			return response.json();
		})
		.then((parsedData) => {
			// ...
		})
		.catch((err) => {
			displayResult(err.message, "error");
		});
};
```

## API

- website: https://geolocation.xyz/
- Usage : The basic syntax of a URL request to the API is:
  ```
    https://geocode.xyz/[latitude],[longitude]?json=1
  ```
- Example: to get definition of English word `hello`, you can send request to :-
  `https://geocode.xyz/${latitude},${longitude}?json=1`
