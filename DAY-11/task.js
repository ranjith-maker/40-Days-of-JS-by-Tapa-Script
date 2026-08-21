

// DAY - 11  Tasks

/**
 * 
 * 1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
Output is 1 2  bacause inner funciton remembers the count variable value from the outer function



2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

100
To call the inner function we can either save it in another variable and call it or call twice


3. Create a button dynamically and attach a click event handler using a closure. 
The handler should count and log how many times the button was clicked.


function setButton() {
    let count = 0
 
    document.getElementById('btn').addEventListener('click', ()=>{
        count++
        console.log('Count is', count);        
    })
}

setButton()



4. Write a function createMultiplier(multiplier) 
that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    
return function multiply(num){
let ans =  multiplier * num
console.log(ans);
}

}

let double = createMultiplier(2)
double(5)
double(10)
From this example we learnt its not closure remembers the varible only from outer scope also the params can be used in inner fn


5. What happens if a closure references an object?
The object is garbage collected immediately
The object remains in memory as long as the closure exists
The object is automatically cloned
None of the Above.

option B ---> The object remains in memory as long as the closure exists


6. Write a function factory of counter to increment, decrement,
 and reset a counter. Use closure to refer the count value across the functuions.
 * 


function Counter(){
 let count = 0

  function incrementFn(){
     count++
    console.log('Count is ', count);
   }

   function decrementFn(){
    count--
    console.log('Count is ', count)
   }
   function resetFn() {
    count = 0
    console.log('Count is ', count);
   }

return{
    incrementFn,
    decrementFn,
    resetFn
}

} 

let counterVar = Counter()


counterVar.incrementFn()
counterVar.decrementFn()
counterVar.incrementFn()
counterVar.resetFn()
counterVar.incrementFn()
counterVar.incrementFn()




 */

