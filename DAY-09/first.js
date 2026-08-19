
// DAY 9 
    // Task and notes 
// console.log('name is', name)

// var name
// name = 'Tom'


// console.log('name is', name);



// in global execution context if we see this problem then it is understood why it gives undefined and then gives a value
// when let and const is accessed before initializion it goes to TDZ 


// TDZ is a area where we cant access variables until it is initialozed, if we try to acess then we get Reference Error
// {

//     TDZ for name variable starts here from the starting of the block



// console.log('name is ', name);


// let name = 'Tom' // TDZ for name variable ends here


// }

// why function is affecting hoisting like we can call the fn before few lines of  its initializion ?
// because during CP Creation phase itself it allocates memory for it , fn body will be inside the Heap memoy
// stack has referecne to the function 

// thats why in EP Exeution phase, it sees, fn is invoked, it checks do we have this fn reference in memory , if yes, execute then by 
// creating Function Execution Context


// Now a little diff perspective of function 


// test()

// var test = function () {
//     console.log('This wont be called immediately as other functions');
    
// }

// so in GEC , in CP phase, it is gonna initiate test as a var variable , and var variable is initialized as undefined
// why it looks like fn right, nope , it is saved inside a variable aclled test thats why it is initialize as undefined
// when in EP phase it , it checks the memory , NO test function in HEAP memory, only test is undefined as a variable , thats why it throws as test is  not a function, because it iniitialized as variable undefined












