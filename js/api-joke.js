const jokeContainer = document.querySelector("#jokeContainer")
document.querySelector("#btnGetJoke").addEventListener("click", event => {
fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
        "Accept": "application/json"
        
}})
.then(joke=> joke.json())
.then(parsedJoke => {
    console.log(parsedJoke)
    jokeContainer.innerHTML += buildJoke(parsedJoke.joke)
})})
function buildJoke (joke){
    return `<p>${joke}</p>`
}
