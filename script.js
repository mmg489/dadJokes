/*Working with Fetch & HTTP requests
Fetch API provides a JS interface for getting requests and responses*/ 

const jokeEl =document.getElementById('joke')
const jokeBtn =document.getElementById('jokeBtn')

generateJoke ()

function generateJoke(){
    /* config variable is created for cleaner code, by saving the headers in a seperate variable
    and passing them through our function it makes things cleaner*/
    const config = {
        headers: {
            'Accept':'application/json'
        }   
    }

    fetch('https://icanhazdadjoke.com', config).then((response)=> response.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
} 