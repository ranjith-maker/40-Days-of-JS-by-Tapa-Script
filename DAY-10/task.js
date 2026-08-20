
/**
 *  DAY - 10 TASKS
 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {

    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
 //ans - Bob


2. What is the mistake in the code below?
let total = 0; 

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

add() is an impure function as the inner function variable dependes on and modifies globally decalred varaible total
it increased the outer variable total 0 to 15, Each call changes the state outside the function  
total starts at 0, then add(5) makes it 5, and add(10) makes it 15.




3. Create a function with a nested function and
 log a variable from the parent function.
function fun() {
      let park = 'disney'
   function play(){
       console.log(park);
      }

play()
}

fun()

4. Use a loop inside a function and declare a variable inside the loop. 
Can you access it outside?

NO, only inside the loop bracket {} will be accessible

5. Write a function that tries to access a 
variable declared inside another function.

function fun() {

    console.log(park);
    
   function play(){
   let park = 'disney'
}

}

fun()  // park is undefined
inner fucntion can access from outer fn , outer function can't access inner fn's value unless it is declared in global


6. What will be the output and why?

console.log(a);
let a = 10;
can't access a before initialization
 why, because during CP, creation phase only var is iniitalized as undefined 
 not let or const thatsh why it shows can't access

7. Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);

Options:

A: In Global
B: Only inside showAge
C: It will cause an error
D: None of the above

ans = Option B 
age variable is only accessible inside the function only not outside it, 
if we want age value we cal call the function showAge()



8. What will be the output and explain the output?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

Output is Hi , 
here inner function went one layer up and saw the message varaible is declared wiht value so printed,
 if not JS would have gone one layer up to the global scope to find the value of message


9. What will be the output and why?
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();


The output is Inner, why , JS first try to access in its own scope only
 if it couldn't find it goes one layer up and then finds it


10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

-1 -2 
it creates a closure it remembers the value of count, when the return function is created ,
 thats why it didnt create a new variable everytime the fn is called

 * 
 */





