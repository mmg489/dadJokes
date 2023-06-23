/*Working with Fetch & HTTP requests
Fetch API provides a JS interface for getting requests and responses*/ 

fetch('https://icanhazdadjoke.com/')
.then(response => response.json())
.then(data => console.log(data));