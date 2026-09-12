

// DAY -25 JS FETCH Tasks


/***
 * 1. Use fetch() to retrieve a list of users from https://jsonplaceholder.typicode.com/users and log the names to the console
 
let url = 'https://jsonplaceholder.typicode.com/users'

async function getUsers() {
    
    try {
        const response  = await fetch(url)
        const data = await response.json()
   const names = data.map((value)=>{
    return value?.name
   })     
    console.log(names);
    
   } catch (error) {
   console.error(error)     
    }

}

getUsers()


2. Fetch all posts by userId=1 from https://jsonplaceholder.typicode.com/posts?userId=1 and display the titles in the DOM

let url = 'https://jsonplaceholder.typicode.com/posts?userId=1'


const container = document.getElementById('container')

async function getTiles(){
    try {
        
const response = await fetch(url)

const data = await response.json();
const container = document.getElementById('container');

data.forEach((value)=>{
    const h3 = document.createElement('h3')
    h3.textContent = value?.title

    container.appendChild(h3)
})

    } catch (error) {
       console.error(error) 
    }
}

getTiles()


3. Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post (title, body, userId). Show the response in console
let url = 'https://jsonplaceholder.typicode.com/posts'

const formData = {
    userId : 1,
    title : 'To make a new post',
    body : 'To all the body content'
}

async function sendReq(){

try {
    
const response = await fetch(url,{
    method :"POST",
    headers : {'Content-Type' : 'application/json'},
    body: JSON.stringify(formData)
})
const data = await response.json()
console.log(data)


} catch (error) {
    console.log(error)
    
}}


sendReq()

4. Update the post with ID = 1 by sending a PUT request with a new title and body. Use the same endpoint

let url = 'https://jsonplaceholder.typicode.com/posts/1'

const formData = {
    userId : 2,
    title : 'very New title',
    body : 'Very all body'
}

async function sendReq(){

try {
    
const response = await fetch(url,{
    method :"PUT",
    headers : {'Content-Type' : 'application/json'},
    body: JSON.stringify(formData)
})
const data = await response.json()
console.log(data)


} catch (error) {
    console.log(error)
    
}}


sendReq()

5. Send a PATCH request to update just the title of post ID = 1

let url = 'https://jsonplaceholder.typicode.com/posts/1'

const formData = {
    userId : 2,
    title : 'New title for patch',
    body : 'Very all body'
}

async function sendReq(){

try {
    
const response = await fetch(url,{
    method : 'PATCH',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(formData)
})

const data = await response.json()
console.log(data)


} catch (error) {
    console.log(error)
    
}}


sendReq()

6. Send a DELETE request to remove post with ID = 1. Log the status of the response


let url = 'https://jsonplaceholder.typicode.com/posts/1'

const formData = {
    userId : 2,
    title : 'New title for patch',
    body : 'Very all body'
}

async function sendReq(){

try {
    
const response = await fetch(url,{
    method : 'DELETE',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(formData)
})

const data = await response.json()
console.log(data)


} catch (error) {
    console.log(error)
    
}}


sendReq()


7. Send a POST request to https://jsonplaceholder.typicode.com/posts with Content-Type: application/json in headers. Log the response
let url = 'https://jsonplaceholder.typicode.com/posts/'

const formData = {
    userId : 2,
    title : 'New title for very new post',
    body : 'Very all body for question no. 7'
}

async function sendReq(){

try {
    
const response = await fetch(url,{
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(formData)
})

const data = await response.json()
console.log(data)


} catch (error) {
    console.log(error)
    
}}


sendReq()
8. Create a custom function request(url, options) that wraps fetch. Use it to GET users and POST a new post

let url = 'https://jsonplaceholder.typicode.com/users/'

const formData = {
    userId : 2,
    title : 'New title for very new post',
    body : 'Very all body for question no. 7'
}

const request1 = new Request(url,{
    method : 'GET',
    headers : { 'Content-type' : 'application/json'},
})

const request2 = new Request(url, {
    method : 'POST',
    headers : { 'Content-type' : 'application/json'},
    body : JSON.stringify(formData)
    }
)

async function sendReq(request){

try {
const response = await fetch(request)
const data = await response.json()
console.log(data)

} catch (error) {
    console.log(error)    
}}

sendReq(request1)
sendReq(request2)


9. Make a fetch call to a broken URL and use .catch() or 
try...catch to show a user-friendly error message

async function getData() {
let url = 'https://jsonplaceholder.typicde.com/users/'
    try {
        
const response  = fetch(url)
if(!response.ok){
    throw new Error('Something went wrong, Please try again later')
}
const data = await response.json()

    } catch (error) {
        console.error('Error', error.message)
        
    }
}


getData()

10. Use AbortController to cancel a
 long-running fetch request (you can delay the
  response using a mock server or setTimeout)

  

let controller = null
const abtn = document.getElementById('abtn')

abtn.addEventListener('click', ()=>{
    if(controller){
        controller.abort('Users cancelled the request')
        console.warn('API cancelled')
    }
})

async function getData() {
let url = 'https://jsonplaceholder.typicode.com/users/'
    try {
        controller = new AbortController()
        const signal = controller.signal

setTimeout(async() => {
     const response  =await fetch(url, {signal})
    if(!response.ok){
      throw new Error('Something went wrong, Please try again later')
}
const data = await response.json()
console.log(data)

}, 2000);


    } catch (error) {
        console.error('Error', error.message)
        
    }
}


getData()


  */






