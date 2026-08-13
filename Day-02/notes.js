

 // Notes of DAY 2 of Learning JS with TS

//Variable grammar
/*
it should either have digits or letters,
allowed chars are $_ can have $_ , let  _ = 'dollar' console.log(_); works 
first character must not be a digit
no reserved words such as if else break continue let const async await
use camelCase
*/


// var name = 'Rome'
// console.log(name);
// var name = 'Dubai'
// console.log(name);


// let name 
// console.log(name); // undefined , here undefined means not just value but also type of the value

// console.log(ball); // not defined no ball is being declared



/*
All the data is stored in memory storage for us to access later
there are 2 types of memory, Stack and Heap, Primitives are stored in stack
Non primitives data's types' value are stored in Heap memory only the address of the values will be stored in stack to access
However, technically, JavaScript does not guarantee that primitives are always stored on the Stack and objects are always stored on the Heap. 
The JavaScript engine is free to optimize memory however it wants.

ASTexcplorer.net is a Abstract Syntax Tree where we can see execution way

Whenever our JS Engine sees our code
it has 3 stages such as Tokenizing, Parsing, Interpretating
Token - the source code is broken down into small meaningful pieces called tokens.
Parsing -  It checks whether they follow the grammar and syntax rules of JS , hope it doesntt have systemprintOut int =  
then it creates a AST Tree representing the structure of the code.
Interpretating - runs the code, using interpretation and/or JIT compilation


----------------






 strings are not mutable
 let name = 'Rohith'
 name[0] = 'M'
console.log(name);
You cannot modify an existing string character-by-character. where as in arr we can do it
But you CAN assign a completely new string

Methods don't mutate the original string

This is another excellent example:

let name = "rohith";

name.toUpperCase();

console.log(name);

Output:

rohith

Because toUpperCase() doesn't modify the original string. It creates/returns a new string:

let name = "rohith";

let newName = name.toUpperCase();

console.log(name);     // rohith
console.log(newName);  // ROHITH
this is reassigning variable

let fruit = 'Mango'
 fruit = 'carrots'
console.log(fruit);

//pass by value

now both are independent 
let city = 'mumbai'
let town = city

city = 'delhi'

console.log(town); // it shows mumbai ,
//  because we reassigned the city value as delhi after assigning town value as city
console.log(city) it shows delhi now 



//pass by reference
/*


let obj1 = {
    name  : 'Rohith',
    city : 'delhi'
}

let obj2 = obj1

obj2.name = 'Mohan'
console.log(obj1);
console.log(obj2);

{ name: 'Mohan', city: 'delhi' }
{ name: 'Mohan', city: 'delhi' }

in pass by value , town city both creates a new memory in storage and points to it's own 

where as in pass by value only reference object ,
 both points to a same ref only,same memory, there is no copy is being made 

"JavaScript is pass-by-value.
 For objects, the value being passed or assigned is a reference to the object."
"Both variables hold a reference to the same object in memory, 
so modifying that object through either variable is reflected through the other."


*/
