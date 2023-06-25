/*Working with Fetch & HTTP requests
Fetch API provides a JS interface for getting requests and responses*/ 

const jokeEl =document.getElementById('joke')
const jokeBtn =document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

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

/* for a cleaner code you can use async await to execute the same functionality as above, but without
using the .then methods */

// // USING ASYNC/AWAIT
// async function generateJoke() {
//     const config = {
//       headers: {
//         Accept: 'application/json',
//       },
//     }
        // ^^^^ this part is the same as the previous configuration using .then

//     const res = await fetch('https://icanhazdadjoke.com', config)
  
//     const data = await res.json()
  
//     jokeEl.innerHTML = data.joke
//   }

// the difference when using async/await: your request using fetch is stored in a response variable
// (in this case 'res'), and your response, once recieved, is stored as in its JSON format in another 
// variable ('data' in this case)
// Once the data is received and both variables have the info, you use the same innerHTML method to write 
// the joke to the page. 

// Key Points: when using fetch you need to label the function you're going to use with it as 'async'
// so basically before righting out hte function you put the word 'async' ahead of it, within the variables
// where you are storing your responses, you need to label them 'await' since they are part of the async Promise