const joke=document.getElementById("joke")
const button=document.getElementById("btn")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
function Generatejoke(){
  fetch(url) .then((data) => data.json())
  .then((item)=>{
  joke.textContent =`${item.joke}`;
  console.log(item.joke)
  });

}
Generatejoke()
button.addEventListener("click", Generatejoke);