



const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);



/*
GEC

CP - Creation Phase

Creation phase is going to allocate memory for the variables
and function declarations.


message → uninitialized
sum     → function body
mul     → function body
calc    → function body
getResult → function body

Important:
message is const, so during CP it is created but it is NOT
initialized with its value yet.

It is in TDZ - Temporal Dead Zone until execution reaches:

const message = "I can do it";

Function declarations are available during the creation phase,
so sum, mul, calc and getResult can be called.


EP - Execution Phase

Now execution starts from the top.

First:

const message = "I can do it";

Now message gets its actual value:

message → "I can do it"


Then JS sees the function declarations:

function sum() { ... }
function mul() { ... }
function calc() { ... }
function getResult() { ... }

Their function bodies were already set up during CP,
so nothing needs to be executed inside them yet.

Then JavaScript reaches:

getResult(8, 5);

Now getResult() is invoked.

So JavaScript creates a new FEC -Function Execution Context for getResult().


--------------------------------------------------

getResult() FEC

CP

Now JavaScript checks the local things inside getResult().

getResult has: a b

and it also has access to the function calc
through its outer/lexical environment.

Arguments are:

a → 8
b → 5


EP

Now it executes:

return calc(a, b);

Since a = 8 and b = 5,

it becomes:

return calc(8, 5);

Now calc() is invoked.

So another FEC is created.


--------------------------------------------------

calc() FEC

CP

calc has:

a
b

Arguments:

a → 8
b → 5

There is no local result variable in calc.

The return statement is:

return (sum(a, b) + mul(a,b)) / 2;


EP

Now JavaScript needs to evaluate:

sum(a, b)

So:

sum(8, 5)

is invoked.

A new FEC is created for sum().


--------------------------------------------------

sum() FEC

CP

sum has:

a
b
result

Arguments:

a → 8
b → 5

result → uninitialized

Because result is const, it will be initialized
when execution reaches its declaration.


EP

Now:

const result = a + b;

a = 8
b = 5

so:

result = 8 + 5
result = 13


Then:

return result;

So sum() returns:

13


sum() FEC is finished and removed from the Call Stack.


--------------------------------------------------

Now we are back inside calc() FEC

The first part:

sum(a, b)

has returned:

13

So JavaScript now has:

13 + mul(a, b)

Now it needs to execute:

mul(a, b)

So:

mul(8, 5) is invoked. Another FEC is created.
-------------
mul() FEC

CP

mul has: a b result

Arguments:

a → 8
b → 5

result → uninitialized


EP

Now:

const result = a * b;

result = 8 * 5

result = 40


Then:

return result;

So mul() returns:

40


mul() FEC is finished and removed from the Call Stack.


--------------------------------------------------

Now back to calc() FEC

We have:

sum(a, b) → 13
mul(a, b) → 40

So:

return (13 + 40) / 2;

= 53 / 2

= 26.5

Therefore calc() returns:

26.5


calc() FEC is finished and removed from the Call Stack.


--------------------------------------------------

Now back to getResult() FEC

We had:

return calc(a, b);

calc() returned:

26.5

So:

getResult() returns:

26.5


getResult() FEC is finished and removed from the Call Stack.


--------------------------------------------------

Now back to GEC

The function call:

getResult(8, 5);

has completed.

There is no more code after it.

So GEC execution is completed.


--------------------------------------------------


MEMORY ALLOCATION -


message → uninitialized
sum → function body
mul → function body
calc → function body
getResult → function body

*/











