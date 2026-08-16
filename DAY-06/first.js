

// DAY 6 

// Functions

// this is expression
// let printMe = function(a=10,...b){
   
// console.log(a,b);

    
// }

// printMe(4,3,4,6,3,4)
// 4 [ 3, 4, 6, 3, 4 ]

// params are the palceholders or the variables that we pass as an input to the function while declaring the fn
// arguments are the actual values that'll replace those declared inputs when invoking or calling the fn




// let printMe = function(a , b = 0 ){
   
// return a + b
    
// }

// let result = printMe(4,8)
// console.log(result); //12

// function double(x) {
//     return x * x
// }

// let twice = double(result)
// console.log(twice); //114



// function printMe(a,b,cb) {

//     let sum = a + b
// console.log(sum);
//     cb(sum)
// }

// printMe(5,5, function(x){

//     console.log(x*x);

// } )

// 10
// 100



// Pure Function
// Pure function means when it doesnt have any dependency outside of its function to its returned value
// Impure function means , the returned value has dependency from outside of its scope, 
// that very dependency makes it impure function


// let wish = 'hello'

// function greet(name) {
//     return `${wish} ${name}`
// }
// console.log(greet('Rohith'));
// console.log(greet('Raaj'));
// wish = 'namaste'
// console.log(greet('Punith'));

// hello Rohith
// hello Raaj
// namaste Punith




// let count = 0;


// function increment() {
//     count++;
// }
// increment()
// increment()
// console.log(count);  // 2
// console.log(count);  // 2

// Even though it doesn't return anything, 
// it's impure because it changes external state.

// HOF
// Either takes another fn as a parameter and return it or
// A function returns another fn

// function getCamera(camera){
//     camera()
// }

// getCamera(function(){
//     console.log('My camera is Sony');
    
// })

// function returnFn() {
//     let name = 'Rohith'
//     return function() {
//             console.log('Hello', name);   
//         }
// }

// let fn = returnFn()
// fn()

// IIFE ,if you want to call this before any clicks as soon as DOM loaded

// (function(){
//     console.log('An IIFE fn doesnt need an name to the fn, anonymous works');
    
// })()

// //  Create Call Stack Execution Diagram for this flow
// // function f1() {}
// // function f2() {}
// // function f3() {
// //     f1();
// // }
// // f2();
// // f3();
// // f1();
 

// // see is it right or not 

// // first f2 is called so it creates and executes and finished
// // f3 is called, so it creates, goes inside, and execute f1 first and then only f3 finishes its execution 
// // now lastly f1 is called , here f1 is called and executes and over 
// //  it again doesnt have to invoke the f1 which is inside f3 

// // f2 → f3 → f1 → f1
// // the body of the f3 will only we executed when f3 is called
 



// Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//     f1();
// }
// f2();
// JS follows LIFO - LAst in First Out, 
// what funcntion called lastly will be executed first,
// The function that is called last is executed/finished first.
// f2()
//  ↓
// f1()
//  ↓
// f1() finishes
//  ↓
// f2() finishes
















