

console.log(a);


var a = 10
let b = 20
const c = 30


function sayName() {
    
var name = 'someName'

console.log( 'my name is' ,name);

}



sayName()

/**
 * GEC
 * GEC = Global Execution Context

When JavaScript starts executing a script, it creates a global execution context.

Even if your JavaScript file is completely empty,
the JavaScript environment still has a global execution context.


window is the browser's global object.
The GEC is the execution context in which your global code executes.

GEC = where JavaScript executes global code.
Global scope = what variables/functions are accessible from the global level.

Global Execution Context is a runtime execution environment.

It is created when JavaScript begins executing the script.

It deals with things such as:

executing global code
creating the global environment
setting up this at the global level
managing the execution of the program

Think:

"Where is the code being executed?" → GEC
The value of the word THIS and the value of the word window 
is also window object, 
this === window ---> true

GEC
Creation pahse
window object this keyword
In the creation phase JS going to allocate memory for the variable and the functions 
var variables will be initialized as Undefined


var name = 'Tom'

function sayName() {
    console.log(this.name);
    
}

let or const variables will be having NO value b <value unavailable> c <value unavailable>
Function body will be placed in an memory
Memory allocation for each variables and function happens in creation pahse

in Execution phase
In the execution it'll assign the value to those variable, in our ex - it'll assign value to Tom
and for function it wont create functional execution phase unless it is called/invoked
As many function JS find to execute that many Function Exeution Context will be created, 
it means function has it sown execution even though all are called in the same time

FEC also has 2 phases, Creation Execution
Creation phase
it'll check whther there is a local varibale inside a function or not
if there is a variable it'll allocate a memory for it , and initiate with undefined

and goes to Execution phase
now here it sees , do I have anything to execute, oh yes, if it is initialized if it is there in the memory
console.log() a method is called log from console object I have to execute , it found another fn to execute , it sgonna create FEC
so it creates FEC for console.log() and executes it



when a function has  multiple funcitons inside or gets a callback to be invoked inside a function
every fn creates a FEC 


 */








