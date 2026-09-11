


// DAY -24 JS Promises Notes

/**
 * The problem with promise that we switch to Async/Await
 * 
 * The main problem isn't that Promises are bad. 
 * It's that when you have many asynchronous operations, 
 * Promise-based code can become harder to read and maintain, 
 * putting the debugger on particular .then .catch will be cumbersome
 * async/await is mostly a cleaner syntax built on top of Promises.
 


the moment we put async keyword infront of funct it returns a promise

async function fool() {
    return 100
}

let value = fool()

console.log(value); //100


const errorPromise = new Promise((res,rej)=>{
    rej('It is tradition error Came')
})



async function erroProm(){

try {
  await errorPromise
    
} catch (error) {
    console.log('Error:', error)    
}
}

 erroProm()  //Error: It is tradition error Came



Weather Project 
const API_KEY = 'YOUR_API_KEY'

document.getElementById('searchbtn').addEventListener('click',()=>{

const city = document.querySelector('#cityInput').value

if(city){
    getWeather(city)
}

})

async function getWeather(city) {
     
try {
    showLoading()
       let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
       if(!response.ok){
        throw new Error('Not found')
       }
   let data = await response.json()
  dispalyWeather(data)

} catch (err) {
    showError(err.message)

}finally{
    hideLoading()
}
}


function showLoading(){ 
document.getElementById('loading').innerText = 'Loading...'
}
function hideLoading(){
document.getElementById('loading').innerText = ''

}

function displayWeather(data) {
  const html = `
    <h2>${data.name}</h2>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>☁️ Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
  `;
  document.querySelector('#result').innerHTML = html;
}




function showError(message) {
  document.querySelector('#result').innerHTML = `<p style="color:red;">❌ ${message}</p>`;
}


const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let urls = [
'https://pokeapi.co/api/v2/pokemon/bulbasaur',
'https://pokeapi.co/api/v2/pokemon/raticate',
'https://pokeapi.co/api/v2/pokemon/kakuna',
]



async function getData(url){

    try {
         
        let response = await Promise.allSettled(
            url.map((url)=> fetch(url))
        )
     
     let data = await Promise.allSettled(
        response.filter((rest)=> rest.status === 'fulfilled')
        .map((rest)=> rest?.value.json())
     )
       console.log(data)
       
    } catch (error) {
        console.log(error);
    }
}

 getData(urls)










 */


// https://interview-prep-frontend-weld.vercel.app/













