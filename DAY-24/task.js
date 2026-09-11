



// DAY -24 JS Async/Await Tasks


/**
 * 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay
function Wait(ms){

return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('This is a delayed one')
    },ms)
})
}

async function Foo() {
    
 console.log('Start')
let res =  await Wait(1000)

console.log(res)

console.log('The end')
}

Foo()

2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

function wait(ms){
    return new Promise((res,rej)=>{
        setTimeout(res, ms)
    })
}

async function Foo() {
    
    await wait(1000)
    console.log('One')

    await wait(1000)
    console.log('two')
    
    await wait(2000)
    console.log('Three')
}

Foo()

3. Use fetch() with async/await to load a
 local JSON file (data.json) and display its contents in the console
async function getOwnData(){
    try {
        let response = await fetch('/data.json')
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.error("Error: ", error)
    }
}


getOwnData()



4. Use the public API https://jsonplaceholder.typicode.com/users/1 to fetch and display the user’s name, email, and address on the page


   const name = document.getElementById('username')
   const email = document.getElementById('email')
   const address = document.getElementById('address')


async function getTypi() {
    
try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)

let data = await response.json()
 showDOM(data)
 console.log(data);
 

} catch (error) {
    console.error("Error: ", error)
}

}


function showDOM(data) {
    name.innerText = data?.name
    address.innerText = data?.address?.street
    email.innerText = data?.email

}

getTypi()


5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

const errorElem = document.getElementById('error')


async function getTypi() {

try {
        
let response = await fetch(`https://jsonplaceholder.typicode.com/user/1`)
if(!response.ok){
    throw new Error(` Failed to fetch, ${response.status} `)
}
let data = await response.json()

console.log(data);

} catch (error) {
  console.error('Error: ', error.message)    
  errorElem.innerText = 'Sorry, Failed to load data, Please try again later'
}}
getTypi()




6. Refactor then/catch to async/await
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
async function refactor() {

    try {
            
let response = await fetch('/api/data')

let data = await response.json()

console.log(data)

    } catch (error) {
        console.error(error)
    }
}

refactor()

  Project Task
Let's Build a “Movie Explorer” App

Build an app that lets users search movies
 using the OMDB API: http://www.omdbapi.com/?apikey=yourkey&s=movieName

Hints:

Input box for search term
Display movie title, poster, and year
Show “No results found” if search fails
Use async/await, DOM manipulation, and try/catch
 */

