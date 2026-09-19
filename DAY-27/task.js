

// DAY -27 JS  How your Async code works , 
// Event Loop explanation Tasks


/**
 * 1. What's the output of the code below?
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);
Options are,

Let's do it!, f4, f1, f3, f2
Let's do it!, f1, f3, f2, f4
Let's do it!, f1, f2, f3, f4
Let's do it!, f1, f4, f2, f3
Example Answer: Let's do it!, f4, f1, f3, f2
Explanation:

"Let's do it!" is executed by Execution Stack
f1() calls browser API, so gets added to Callback Queue
f4() gets added to Execution Stack and is executed
Event loop finds a callback function f1() in callback queue & executes it
f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
f3() goes back into the stack after timeout, and gets executed
f2() too goes back into the stack after timeout, and gets executed






2. What's the output of the code below?
function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1();


Options are,

Let's do it!, in settimeout, f1, f1, f1, f1
Let's do it!, f1, f1, f1, f1, in settimeout
Let's do it!, f1, , in settimeout, f1, f1, f1

 Answer - Option B
//Explanation 
"Let's do it!" is executed first because it is a normal synchronous 
statement and goes into the Execution Stack.
setTimeout(..., 0) sends the callback function to the Browser/Web API. 
Even though the timeout is 0, it does not execute immediately.
 The callback is placed in the Callback Queue after the timer completes.
f1() is then called four times. Since these are normal synchronous function calls,
 each f1() is executed immediately on the Execution Stack.
Therefore, f1 is printed four times before the setTimeout callback gets a
 chance to execute. After the synchronous code finishes, the Execution Stack
  becomes empty. The Event Loop then checks the Callback Queue and moves
   the setTimeout callback to the Execution Stack.
Finally, "in settimeout" is printed.


3. Which statements are true? Select multiple

 JavaScript is single-threaded
 By default, JavaScript is synchronous
 Only promises make JavaScript asynchronous
 All function callbacks are asynchronous

 1 2 4 is true, 3 partially false why, not only promises
  but setimeout setinterval event listerner makes JS asynchronous


4. Which statement is true? Select Only one
(_) JavaScript Function Execution Stack(Call Stack) never gets empty.
(_) The job queue gets higher priority than the callback queue.
(_) The only job of Event Loop is to manage the Call Stack
(_) The StackOverflow exception is random.

Ans - Option B


5. Guess the output
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
Options are,

Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
Error

Ans Option - A 
Explanation
cartoon() is called, so it starts executing on the Execution Stack.
console.log('Cartoon') executes immediately, so Cartoon is printed first.
setTimeout(tom, 5000) sends tom to the Web API/Timer. 
After 5 seconds, its callback will be placed in the Callback Queue.
The Promise is created and immediately resolved with the value "should it be right after Tom, before Jerry?".
The .then() callback is placed in the Microtask Queue. It does not execute immediately.
jerry() is then called synchronously, so Jerry is printed before the Promise's .then() callback.
Now the synchronous cartoon() function has finished, so the Execution Stack is empty.
The Event Loop checks the Microtask Queue before checking the Callback Queue. Therefore, the Promise's .then() callback executes and prints should it be right after Tom, before Jerry?.
After 5 seconds, tom's timer callback is ready in the Callback Queue. The Event Loop moves it to the Execution Stack, and Tom is printed.

6. Guess the output
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
Options are,

Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
None of the above.

Ans -  Option - C 
Explaantion
cartoon() is called, so it starts executing on the Execution Stack.
console.log('Cartoon') executes immediately, so Cartoon is printed first.
setTimeout(tom, 50) sends tom to the Web API/Timer. It will be ready after 50 ms.
setTimeout(doggy, 30) sends doggy to the Web API/Timer. It will be ready after 30 ms.
The first Promise is immediately resolved. Its .then() callback is placed in the Microtask Queue.
The second Promise is also immediately resolved. Its .then() callback is placed in the Microtask Queue, after the first Promise callback.
jerry() is a normal synchronous function call, so Jerry is printed immediately.
Now cartoon() finishes executing, and the Execution Stack becomes empty.
The Event Loop checks the Microtask Queue before the Callback Queue.
Therefore, the first Promise runs and prints:
I am a Promise, right after tom and doggy! Really?
Then the second Promise runs and prints:
I am a Promise after Promise!
After the microtasks are completed, the timers are handled according to their delay.
doggy has a 30 ms timeout, so it executes before tom, which has a 50 ms timeout.
Therefore, Doggy is printed next.
Finally, after 50 ms, Tom is printed.

7. Guess the output
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
Options are,

f4, Boom, Sonic, Albert, f1, f3, f2
f4, f1, Boom, f2, Sonic, f3, Albert
f4, Boom, Sonic, Albert, f3, f1, f2
f4, Boom, Sonic, Albert, f1, f2, f3

Ans - Option - A 
Explanation
f4() is a normal synchronous function call, so f4 is printed immediately.
setTimeout(f1, 0) sends f1 to the Web API/Timer. Even with 0 ms, it will wait until the current synchronous code and pending microtasks are finished.
The first Promise is immediately resolved with Boom, so its .then() callback is placed in the Microtask Queue.
setTimeout(f2, 2000) sends f2 to the timer. It will be ready after 2 seconds.
The second Promise is immediately resolved with Sonic, so its .then() callback is also added to the Microtask Queue.
setTimeout(f3, 0) sends f3 to the timer.
The third Promise is immediately resolved with Albert, so its .then() callback is added to the Microtask Queue.


8. Guess the output
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
Options are,

f4, f1, f2, Sonic, f3, Albert
f4, Sonic, Albert, f3, f1, f2
f4, Sonic, Albert, f1, f2, f3
f4, Albert, Sonic, f1, f2, f3
 

Ans - Option - C 

Explanation
f4() is a normal synchronous function call, so f4 is printed first.
setTimeout(f1, 0) sends f1 to the Web API/Timer. It does not execute immediately.
The first Promise is immediately resolved with Sonic, so its .then() callback is added to the Microtask Queue.
setTimeout(f3, 0) sends f3 to the Web API/Timer.
The second Promise is immediately resolved with Albert, so its .then() callback is also added to the Microtask Queue.
The Event Loop executes microtasks before timer callbacks, so: Sonic → Albert
f1 was scheduled with 0 ms, so f1() executes.
Inside f1(), console.log('f1') prints f1.
Then f2() is called directly from inside f1(). Since f2() is a normal synchronous function call, it immediately prints f2.
After f1() finishes, the other 0 ms timer callback runs and prints f3.

the answer is
f4, Sonic, Albert, f1, f2, f3


 */