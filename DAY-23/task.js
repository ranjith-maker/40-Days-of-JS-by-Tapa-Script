

// DAY -23 JS Promises Tasks

/**
 * 1. Create Your First Promise
Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
Log the result using .then().



let prom1 = new Promise((res,rej)=>{

setTimeout(()=>{
    res('Hello, Promises!')
} , 1000)

})


prom1.then((value)=>{
 console.log(val);
 
}) //Hello, Promises!


2. Reject a Promise
Create a Promise that immediately rejects with the message "Something went wrong!".
Handle the error using .catch().

let prom2 = new Promise((res,rej)=>{
    rej('Something went wrong!')
})
.catch((error)=>{
    console.log('Error: ', error);
}) //Error:  Something went wrong!


3. Simulate Coin Toss
Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

function getRandom() {
    let num = Math.floor(Math.random( ) * 10 ) + 1
    return num
}

let prom3 = new Promise((res,rej)=>{

let random = getRandom()
let ans;
if(random % 2 === 0){
      ans = 'Heads'
}else{
    ans = 'Tails'
}

setTimeout(()=>{
   res(ans)
},1000)

})

prom3.then((value)=>{
    console.log(value)
    
})

4. Promise with Condition
Create a function checkAge(age) that returns a Promise.
Resolve if age >= 18, reject otherwise.
let age = 1
async function checkAge(age) {

try {
    let response = await new Promise((res,rej)=>{

    if(age >= 18){
        res('Age is resolved')
    }else{
        rej('Age is rejected')
    }
})

console.log(response);
} catch (error) {
    console.log('Error : ', error)   
}}

checkAge(age)


5. Chain Promises Sequentially
Create three Promises that log:
"Step 1 done"
"Step 2 done"
"Step 3 done"
Chain them using .then().


let prom1 = new Promise((res,rej)=>{
    console.log('Step 1 Done')
    
})

let prom2 = new Promise((res,rej)=>{
    console.log('Step 2 Done')
    
})
let prom3 = new Promise((res,rej)=>{
    console.log('Step 3 Done')
    
})

prom1.then((value)=>{
    console.log(value)
    return prom2
    
}).then((value)=>{
    console.log(value)
    return prom3
    
}).then((value)=>{
    console.log(value)
})



6. Value Transformation in Chain
Create a Promise that resolves with 5.
Chain .then() handlers to double it, then square it.
Final output should be 100.

let prom5 = new Promise((res, rej)=>{
res(5)
})

prom5.then((value)=>{
 return value * 2
}).then((value)=>{
 let ans = value * value
  console.log(ans)
})
//100


7. Chain with Random Rejection
First .then() resolves to "Start".
Second .then() randomly throws an error or returns "Continue".
Handle rejection gracefully.


let prom7 = new Promise((res,rej)=>{
    res('Start')
})

prom7.then((value)=>{
    console.log(value)
    return Math.random() > 0.5
}).then((value)=>{
    if(value){
        return 'Continue'
    }else{
        throw new Error('Something went wrong')
    }
}).then((value)=>{
    console.log(value)    
}).catch((error)=>{
    console.log('Error : ', error);
    
})


8. Multiple then() calls on same Promise
Create a single resolved Promise.
Attach two different .then() handlers to it.
Explain that both run independently.



let prom8 = new Promise((res, rej) => {
    res("Promise resolved");
});

//here both settles independently wont each for 
// each as these 2 are separated on their own

prom8.then((value) => {
    console.log("First then:", value);
});

prom8.then((value) => {
    console.log("Second then:", value);
});

//It'll run only step by step then by then 

prom8
    .then(() => {
        // First
    })
    .then(() => {
        // Second
    });


9. Return New Promises in .then()
Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
“First”
“Second”
“Third”

// let prom9 = new Promise((res,rej)=>{
//     res('First')
// })

// prom9.then((value)=>{
//   console.log(value)
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//      res('Second')
//     },1000)
//   })

// }).then((value)=>{
//     console.log(value)

//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res('Third')
//         }, 1000);
//     })
// }).then((value)=>{
//     console.log(value)
// })
// First
// Second
// Third


10. Implement fakeDBQuery()
Create a function that simulates a DB query with a random delay 
and returns data (like a user object).
Chain multiple fake queries.


function fakeDBQuery(id){

let ans = new Promise((res,rej)=>{
    let delay = Math.floor(Math.random() * 2000) + 1000

    setTimeout(() => {
        res({
        userId : id,
        name : `my name is ${id}`
    })
    }, delay)

})
return ans
}


fakeDBQuery(1)
.then((value)=>{
    console.log(value)
    return fakeDBQuery(2)
}).then((value)=>{
    console.log(value)
    return fakeDBQuery(3)

}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log('Error : ', error)
    
})



 */





