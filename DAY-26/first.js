


// DAY -26 JS Mistakes in Promises and async codes Notes


// Looping with Promises
// never start promises with loop, accomplish with async operation is best 
// when you need to handle multiple asynchronous one by one , 
// network speed, latency, how far the server is located, how fast the server is responsding,
// what kind of logic that we have for each of the call 
// you'll be handling organically in asynchronous way, code is mush simpler
  


// const arr = [ "1" , "2", "3", "4" , "5" ]

// function getId(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
// }

// this returns array of first 5 objs
// async function getData() {

// try {
//         let responses = await Promise.allSettled(arr.map((id)=> getId(id) ))

//         let data = await Promise.allSettled(responses.map((rest)=>{
//             return rest.value.json()
//         }))

//     const userdetails = data.map((user)=>{
//         const obj = {
//             name  : `${user?.value?.name}`,
//             id: `${user?.value?.id}`,
//             email : `${user?.value?.email}`
//         }
//         return obj
//     })
//         console.log(userdetails)
// } catch (error) {
//     console.log(error);
    
// }

// }

// getData()

// async function getData(){
//     let response = await Promise.allSettled(arr.map((id)=>  getId(id) ))

//     let data = await Promise.allSettled(
//         response.filter((rest)=> rest.status === 'fulfilled')
//         .map((rest)=> rest?.value?.json() )
//     )

//     data.map((rest)=>{
//         console.log(
//           `
//            name : ${rest.value.name}
//             id: ${rest.value.id}
//             email : ${rest.value.email}
//            `
//         )
//     })

    

// }


// getData()

// 2 Promise Chain vs No Chain


// from .then we return a resolved value or new Promise or throw an error 

// const ten = new Promise((resolve, reject) => {
//     resolve(10);
// });

// ten.then((result) => {
//     // returns 20
//     return result + 10;
// })
//     .then((result) => {
//         // returns 200
//         return result * 10;
//     })
//     .then((result) => {
//         // returns 190
//         return result - 10;
//     })
//     .then((result) => {
//         // logs 190 in console
//         console.log(result);
//     });

// ten.then((result) => {
//     // returns 20
//     return result + 10;
// });
// ten.then((result) => {
//     // returns 100
//     return result * 10;
// });
// ten.then((result) => {
//     // returns 0
//     return result - 10;
// });
// ten.then((result) => {
//     // logs 10 in the console.
//     console.log(result);
// }); 


// Not handling error with promises

// function OddEve(num){
//   return new Promise((res,rej)=>{
//         if(num % 2 === 0){
//            res('It is even') 
//         }else{
//         rej(new Error('It is odd'))
//         }
//     })
// }

// OddEve(12).then((value)=>{
//     console.log(value)
// }).catch((value)=>{
//     console.log(value)
// })


// 4. Missing .then callback , always send cb 

// const hello = Promise.resolve('Hello all')

// hello.then('hello all').then((value)=> console.log(value)) //Hello all

// hello.then(()=> 'world').then((value)=> console.log(value)) //world 


// 5. Using promises for Synchronous Operation

// 6. Using unnecessary try catch with promises

// Try catch should written only with async await now with 
// explicit promises like

// new Promise((res ,rej)=>{
// const value = getValue()
// res(value)
// })

// .then((value)=> console.log(value))
// .catch((error)=> console.log(error))

























