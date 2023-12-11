function getRandomWord() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://random-word-api.herokuapp.com/word', false);
    request.send(null);

    if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        return response[0].charAt(0).toUpperCase() + response[0].slice(1);;
    }

    throw new Error('Failed to retrieve a word.');
}

