"use strict";

const resultDiv = document.querySelector(".result");
const input = document.querySelector(".word");
const btn = document.querySelector(".btn");
///

const renderData = (data) => {
	resultDiv.innerHTML = `
        <p>📙: ${data.word}</p>
		<p>📖: ${data.meanings[0].partOfSpeech}</p>
		<p>📚: ${data.meanings[0].definitions[0].definition}</p>
    `;
};

// with tradational XMLHttpRequest()

// const defineWord = (word) => {
// 	const request = new XMLHttpRequest();
// 	request.open(
// 		"GET",
// 		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
// 	);
// 	request.send();
// 	request.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		renderData(data);
// 	});
// };

// defineWord("hello");

// with modern fetch() and promises

const findWord = (word) => {
	//make a GET request
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
		.then((response) => {
			if (response.status < 200 || response >= 300) {
				throw new Error("word is not found");
			} else if (!response.ok) {
				throw new Error("Network connection error!");
			}
			return response.json();
		})
		.then((parsedData) => {
			const [data] = parsedData;
			console.log(data);
			renderData(data);
		})
		.catch((err) => alert(err));
};

btn.addEventListener("click", () => {
	const word = input.value;
	findWord(word);
});

function enterPressed(key) {
	if (key === "Enter") {
		const word = input.value;
		findWord(word);
	}
}
