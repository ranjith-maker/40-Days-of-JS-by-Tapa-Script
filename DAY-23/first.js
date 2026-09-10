


// DAY -23 JS Promises Notes

/**
 * promise is like a constructor function it takes a another func as an argument
 * that takes 2 more args, resolve, reject
 * Promise() 


let prom = new Promise((res, rej)=>{

})

Executor func , //you'll call either resolve or jreect, you might conditionally call resolve and reject
function(res,rej){
    logic goes here
}


let prom1 = new Promise((res, rej)=>{

res('Got well done')

})

console.log(prom1);



let prom2 = new Promise((res, rej) => {
    try {
        throw new Error('Something went wrong');
    } catch (error) {
        rej('You are rejected');
    }
});

console.log(prom2);


Rule -1 Every promise give so you a a.then handler, and every reject gives .cvatch  handler
prom2.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
  console.log(error);
  
}).finally(()=> { console.log('loading: false');
 
})


let anoterProm = new Promise((res,rej)=>{

res('It is resolved now')

rej('it is rejected')
res('once again we resolved now')


})

in interview ques, whats the output?
only one state could be done , either res or rej, in above sum case, only first res runs



let getUser = new Promise((res,rej)=>{

const user ={
    name : 'Rohith',
    age : 55,
    city : 'Delhi',
    email:'rohi@gmail.com',
    permission : ['DEV', 'Accounts' ,]
}

res(user)

})

Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

 Return a promise from the .then() handler


.then((result)=>{
    console.log(result)

return  new Promise((res,rej)=>{
        setTimeout(() => {
            res( `user address is ${result.city}`)
        }, 1000);
    })
    
})
.then((city)=>{
    console.log(city);
    
})
if your then handler returns another promise then use then for that then also

{ name: 'Rohith', age: 55, city: 'Delhi' }
user address is Delhi




getUser.then((user)=>{
    console.log(`user name is ${user.name}`)
    return `${user.city}`
    
})
.then((city)=>{
    console.log(`user city is ${city}`)
    
})
we can also return something in then connection wiht that value we can wrk on later
ex- DB conncetion if it is success true , we may need all list of employess
user name is Rohith
user city is Delhi



we can also throw an error in then and if that very then throws
error we use catch to handel it, also if that very error 
returns somethign then use then to get the returned value and get it in catch

getUser.then((user)=>{

    if(!user.permission.includes('HR')){
        throw new Error('HR permission is required')        
    }

    return user.email

}).then((email)=>{
    console.log(`user email is ${email}`);
    
}).catch((err)=>{
    console.log(err)
    
})
Error: HR permission is required
only when the promise resolves you get an return value , here since
 the if conditions fails you wont get the email returning, 
returned value becomes an input to the next then fnc


RULE 3 - You can rethrow an error from the .catch  handler to handle
In this case, the control will go to the next closest .catch() handler

let promise401 = new Promise((res,rej)=>{
    rej(401)
})

promise401.catch((error)=>{
    console.log(error);
    
    if(error === 401){
        console.log('Rethrowing Error')
        throw error
    }else{
        //Do somwthing
    }
}).then((result)=>{

}).catch((error)=>{
    console.log('Error is: ', error)
    
})
// 401
Rethrowing Error
Error is:  401



RULE 4 Unlike .then .catch, the .finally() handler doesn't process the resolved 
value or error, it just passes the result as is to nect handler


let finalPromise = new Promise((res,rej)=>{
    res('Testing the . finally')
})
.then((result)=>{
console.log(`Result is ${result}`)
}).catch((error)=>{
// console.log('Error is: ', error)
}).finally(()=>{
console.log('Running finally')
})

finalPromise.finally(()=>{
    console.log('Final ran first');
    
}).then((value)=>{
    console.log(value);
    
})


.finally() never takes any argument in params , 
it simply executes the what is inside finally


RULE - 5 - 
Calling the .then() handler method multiple times 
on a single promise is NOT chaining.


Handle Multiple Promises
our backend will give 3 apis together where we need to show combinedly 1 information from all 3 apis 
For ex- tiacket booking paltform, when user enter tomo data, destination,
we need to show all 3 available routes, like Bus, Airline, Train, we have info 3 diff areas 
so 3 api calls needed to see the timings, seats  
In that time

1)  Promise.all(['api1', 'api2', 'api3'])it takes an array of promises, It returns a promise that resolves to an array of values.


const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function getData(url) {

    const respones = await fetch(url)
    return await respones.json()

}


let promise1 = getData(BULBASAUR_POKEMONS_URL)
let promise2 = getData(RATICATE_POKEMONS_URL)
let promise3 = getData(KAKUNA_POKEMONS_URL)


Promise.all([promise1, promise2, promise3])
.then((result)=>{
  console.log(result);
}).catch((error)=>{
    console.log(error);
})


async function getData(url) {

try{
  let response = await Promise.all(
     url.map((url)=> fetch(url) ) )
   
     let data = await Promise.all(
         response.map((res)=> res.json() ))

         console.log(data)
}catch(error){
    console.error( 'Error:', error)
}}


let urls = ['https://pokeapi.co/api/v2/pokemon/bulbasaur' ,
           'https://pokeapi.co/api/v2/pokemon/raticate',
            'https://pokeapi.co/api/v2/pokemon/kakuna'
 ]

getData(urls)

Promise.all(if any 1 api gets an error ,rest all works well, 
still it throws an error, it gives only resolved ones, either all or nothing)


Promise.any(), it returns the first successful response , dont wait fro all 3 to get succeed



async function getData(url) {
      
try{
  let responses = await Promise.any(
    url.map((url)=> fetch(url) ) )

  let data = await responses.json() 
  console.log(data)
  

}catch(error){
   console.error('Error :' , error)
}

}

let urls = ['https://pokeapi.co/api/v2/pokemo/bulbasaur' ,
           'https://pokeapi.co/api/v2/pokemo/raticate',
            'https://pokeapi.co/api/v2/pokemon/kakuna'
 ]


getData(urls)




in promise.any() q1)what if there 3 urls , and first 2 is broken, 
but its rule is , if any 1 resolves it returns a response right? 
q2) how the other unretunred errors I'll get, 
can a promise return both resolve reject ? 


let urls = ['https://pokeapi.co/api/2/pokemon/bulbasaur' ,
           'https://pokeapi.co/api/2/pokemon/raticate',
            'https://pokeapi.co/api/v2/pokemon/kakuna'
 ]

Promise.any() returns the first fulfilled promise; individual rejected promises aren't exposed
 if another promise fulfills; and no single Promise can both fulfill and reject.


So why does Chrome show the red error?

This:

GET https://pokeapi.co/api/v2/pokemo/raticate 400 (Bad Request)

is a Chrome DevTools network error message, not necessarily a rejected JavaScript Promise.

Chrome is telling you:
"Hey, this HTTP request received a 400 response."

It does not mean:
"The fetch() Promise rejected."  That's the distinction.





async function getData(urls) {
    try {
        const responses = await Promise.allSettled(
            urls.map((url) => fetch(url))
        );

        // const data = await Promise.allSettled(
        //     responses
        //         .filter((rest) => rest.status === "fulfilled")
        //         .map((rest) => rest.value.json())
        // );

        const data = await Promise.allSettled(
            responses
            .map(async(rest)=> await rest.value.json() )
        )

        console.log(data);
      

    } catch (error) {
        console.log("Error:", error);
    }
}
let urls = ['https://pokeapi.co/api/v2/pokemon/bulbasaur' ,
           'https://pokeapi.co/api/v2/pokemon/raticate',
            'https://pokeapi.co/api/v2/pokemon/kakuna'
 ]

getData(urls)

Those two things are not contradictory. 
The 400 is the HTTP result; fulfilled is the Promise result.
Promise.allSettled() is special because it waits for every Promise to finish, 
regardless of whether each one fulfills or rejects.

Think of it as:

"Tell me what happened to EVERY operation. Don't stop because one failed."




async function getData(url) {
    
try {
    let responses = await Promise.race(
    url.map((url)=> fetch(url)  )
)

let data = await responses.json()

console.log(data)

} catch (error) {
    console.log('Error: ', error)
}}

let urls = ['https://pokeapi.co/api/v2/pokemo/bulbasaur' ,
           'https://pokeapi.co/api/v2/pokemon/raticate',
            'https://pokeapi.co/api/v2/pokemon/kakuna'
 ]

getData(urls)

Promise.race() doesn't mean first successful request.

It means: First Promise to settle — fulfilled OR rejected.

For example:
bulbasaur → 800ms → ✅
raticate  → 300ms → ❌  ← race ends here
kakuna    → 500ms → ✅

Promise.race() will reject, because the first Promise
 to settle was a rejection.


Promise settles means both fulfilling(resolve) + rejected am i rught? 

Yes, exactly right. ✅

In JavaScript, "settled" means the Promise has finished — and there are two possible settled states:

Promise
   │
   ├── fulfilled ✅  → resolve()
   │
   └── rejected  ❌  → reject()

So:

Pending = not settled yet
Fulfilled = settled successfully
Rejected = settled unsuccessfully

Therefore:
Settled = fulfilled OR rejected

Promise.race() FIRST TO SETTLE ✅ OR ❌
Promise.any()  FIRST TO FULFILL ✅ only

*/














// https://interview-prep-frontend-weld.vercel.app/













