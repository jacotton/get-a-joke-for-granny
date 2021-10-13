

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const jokeContainer = document.querySelector('#jokeContainer');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    jokeContainer.classList.remove('is-hidden');
    jokes.textContent = "";
    jokes.append(jokeText);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)
