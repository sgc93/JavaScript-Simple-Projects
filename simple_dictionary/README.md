simple english dictionary with promise and AJAXHttpRequest

sample code:-

with AJAXHttpRequest:-
// const defineWord = (word) => {
// const request = new XMLHttpRequest();
// request.open(
// "GET",
// `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
// );
// request.send();
// request.addEventListener("load", function () {
// const [data] = JSON.parse(this.responseText);
// renderData(data);
// });
// };

with fetch() + promises
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
api :
https://dictionaryapi.dev/

Usage : The basic syntax of a URL request to the API is shown below:

https://api.dictionaryapi.dev/api/v2/entries/en/<word>

As an example, to get definition of English word hello, you can send request to

https://api.dictionaryapi.dev/api/v2/entries/en/hello
sample response parsed data:-
[
{
"word": "hello",
"phonetic": "həˈləʊ",
"phonetics": [
{
"text": "həˈləʊ",
"audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
},
{
"text": "hɛˈləʊ"
}
],
"origin": "early 19th century: variant of earlier hollo ; related to holla.",
"meanings": [
{
"partOfSpeech": "exclamation",
"definitions": [
{
"definition": "used as a greeting or to begin a phone conversation.",
"example": "hello there, Katie!",
"synonyms": [],
"antonyms": []
}
]
},
{
"partOfSpeech": "noun",
"definitions": [
{
"definition": "an utterance of ‘hello’; a greeting.",
"example": "she was getting polite nods and hellos from people",
"synonyms": [],
"antonyms": []
}
]
},
{
"partOfSpeech": "verb",
"definitions": [
{
"definition": "say or shout ‘hello’.",
"example": "I pressed the phone button and helloed",
"synonyms": [],
"antonyms": []
}
]
}
]
}
]
