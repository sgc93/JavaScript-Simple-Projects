# English Dictionary

## sample code:- <br>
a. with ```AJAXHttpRequest```:-
 ```
 const defineWord = (word) => {
   const request = new XMLHttpRequest();
   request.open("GET",`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   request.send();
   request.addEventListener("load", function () {
     const [data] = JSON.parse(this.responseText);
     renderData(data);
   });
 };
```

b. with ```fetch()`` + ```promises```
```
const findWord = (word) => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => return response.json())
    .then((parsedData) => renderData([data]))
    .catch((err) => alert(err));
  };
```
## API
- website: https://dictionaryapi.dev/
- Usage : The basic syntax of a URL request to the API is:
  ```
    https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  ```
- Example: to get definition of English word ```hello```, you can send request to :-
    ```https://api.dictionaryapi.dev/api/v2/entries/en/hello```
- Sample Response Parsed Data:-
  ```
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
```
