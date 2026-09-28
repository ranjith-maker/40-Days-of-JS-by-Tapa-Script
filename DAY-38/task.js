

// DAY -38 JS  JS Memory Management and Garbage Collection Tasks




/**
 * 1. Identify Reachable vs Unreachable Objects
Write a small program where:

You create an object user
Create a second object profile that references user
Then set user = null
Is the original user object still reachable? Why or why not?

let user = {
    name : 'Rohith'
}

let person = user

user = null

console.log(person);
yes reachable , because user is reachable through person reference and user is set to null, it means only 
one of the ref is removed, still we can reach user through person
GC roots , traverse references , mark reachable objects , unreachable objects are garbage , free their
memory , memory becomes available for reuse.



2. Simulate and Break a Cyclic Reference
Observe how cyclic references can cause memory retention.

Create two objects a and b
Make them reference each other (a.ref = b and b.ref = a)
Nullify external references to both
Explain why this may or may not cause a memory leak.
 Add a.ref = null; b.ref = null; and explain how it helps

let a = {
 num  :  10
}

let b = {
 num  :  20
}

a.ref = b
b.ref = a

// a.ref = null
// b.ref = null

console.log(a)
console.log(b)

// a = null;
// b = null;


// JavaScript engines use reachability-based garbage collection, so an unreachable cycle can still be garbage collected. 
// Setting a.ref = null and b.ref = null explicitly breaks the cycle, removing those internal references, but it generally  isn't necessary for garbage collection when the whole cycle is already unreachable.



3. DOM Leak Detection and Fix
Learn how DOM elements and closures can create memory leaks.

Create a button using JavaScript
Add an event listener that references a variable outside the listener
Remove the button from the DOM, but not the event listener
Identify the leak & fix it.


*/

let btn = document.createElement("button");

btn.textContent = "Click Me";

document.body.appendChild(btn);


let message = 'hello all, its Sunday'

function handleClick() {
    console.log(message)
}


btn.addEventListener('click', handleClick )

btn.removeEventListener('click', handleClick )

btn.remove();

btn = null



// btn.remove(); only removes the element from the DOM tree.

// It does not mean: Delete this object from JS memory.

// If something still references the button:
// GC Root   ---> btn --> Button  the button remains reachable.
// btn.remove()
// does not itself create a leak. If nothing else can reach the button after it's removed, 
// the GC is free to collect it.
//  The leak happens when some reachable object continues to retain it.
//"I'd use Chrome DevTools Memory → Heap Snapshot, take a snapshot before and after removing the element, 
// and look for detached DOM nodes and their retaining paths. 
//The retaining path shows which object is still holding the reference




