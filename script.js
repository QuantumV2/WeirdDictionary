

const txtBox = document.getElementById("text");


function getWordDefinition(word) {
  axios.get(`https://api.datamuse.com/words?sp=${word}&md=d`)
    .then(response => {
      const wordData = response.data;
      if (wordData && 'defs' in wordData[0]) {
        const definitions = wordData[0]['defs'];
        const [partOfSpeech, definitionText] = definitions[0].split('\t');
        txtBox.innerHTML = getRandomWord() + " - " + definitionText;
      } else {
        txtBox.innerHTML = `No definitions found for the word: ${word}`;
      }
    })
    .catch(error => console.log(error));
}

getWordDefinition(getRandomWord())