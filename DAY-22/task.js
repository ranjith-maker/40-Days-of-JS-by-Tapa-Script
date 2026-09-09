

// DAY -22 JS Callbacks with Asynchronous Tasks

/*
1. Pass a function to greet a user and then thank them
function greet(name, cb){
    console.log('hello', name);
  cb(name)  
}


greet('Rohith', function(name) {
    console.log('Thank you ', name);
    
} )
hello Rohith
Thank you  Rohith

2. Implement a calculator function that accepts two numbers and a 
callback to perform operations like add, subtract

function calculator(a, b, operationCallback) {
  // Complete this function
}

function add(x, y) {
  return x + y;
}

// Test calculator(5, 3, add);
Also test it with subtract, multiply, divide functions.

function calc(a,b, operation ) {

    operation(a,b)    

}

function add(a,b) {
    console.log(a+b);
}

function sub(a,b) {
    console.log(a-b);
    
}


function multiply(a,b) {
    console.log(a*b);
    
}

function divide(a,b) {
    if(b <= 0){
    console.log('Error');
    }else{
       console.log(a/b);
       
    } 
    
}

calc(2,5,add )
calc(2,5,sub )
calc(2,5,multiply )
calc(2,5,divide )


3. Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {
  // Your code here
}

// delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

function delay(message, delay , cb) {
    setTimeout(() => {
        console.log(message);
    }, delay);
    
    cb()
}

delay('Task Done', 2000, ()=>console.log('Callback fired'))



4. Implement a function that filters numbers in an array based on a condition provided via callback
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
}

// Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]


function filterNums(arr, cb) {
    
    cb(arr)
}

function even(arr) {
    
    for(let i =0; i<arr.length; i++){
        if(arr[i] > 2){
            console.log(arr[i]);    
        }
    }
}

filterNums([1,2,3,4],  even  )  //3,4

5. Execute a sequence of tasks one after another using callbacks
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks

function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(()=>{
    task2(()=>{
        task3()
    })
})
*/
// Execute a sequence of tasks one after another using callbacks

