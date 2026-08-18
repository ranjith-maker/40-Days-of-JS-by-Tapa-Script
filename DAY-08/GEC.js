
console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
    console.log("Inside testMe Execution context");
    var b = 10;
    var user = {
        name: "tapas",
        country: "India"
    }
    function testAgain() {
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution Context");
    }
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");

/**
  GEC
 CP
  Creation phase has 
  it's gonna allocate memory for the variables and function body will be kept in memory
  if the variable is var b it 'll be initialized as Undefined
  EP
  now EP , firstly it sees var, in the CP it allocatd memory so it attaches the values for it
  now it sees testMe() fn gets invoked,checks if it is there in the memory if it is iniitlaized
   now it creates a FEC - Function Execution Context
even in FEC it has the same 2 pahases
CP and EP
CP, in the creation phase it checks whether it has any local variable which is only inside the fn, here we have var b , user
so it memory allocation, primitive goes to stack, non-primitive goes to heap
any other fn exist if so , allocates and keeps body in the memory and 
now EP
now it assigns the value for those variable, and if there is a fn is invoked 
then again it'll create an CP and EP in CP ,again it checks the same to allocate memory
and executes it, here if we see testAgain will be called and
 finish execution then only testMe prints console.log("Exiting global execution context");
and now it finishes it completes its execution
it is a LIFO - last in first out
what fucntion was called last will first complete its execution


in memory allocation

primitives in Stack as, non-primitive only gets saved its name and address
a :  undefined
testMe: X10021

Non Primitive  in Heap as
fn {(body)} arr [body] obj {body}




 *Every time a function is invoked, a new execution context is pushed onto the call stack; when that function finishes, its context is popped off — giving us LIFO behavior.

Important correction to your notes

You wrote:

primitive goes to stack, non-primitive goes to heap

This is a useful beginner mental model, but don't treat it as a JavaScript rule.

JavaScript's specification does not say:

primitives go on the stack and objects go on the heap.

The actual memory implementation is handled by the JavaScript engine.

So for learning execution contexts, it's better to say:

b gets a value, and user gets a reference/value associated with an object.

Don't make stack vs heap part of your explanation of the Creation Phase.




*/












