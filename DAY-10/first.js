

// Scope and Scope Chain in JS


/**
In real world ex- lets take home, something is available in all rooms , like wifi, light, 
but things like plant, shoes  wont be accessable in all rooms right, similar way JS works with its variable

they behave and accessable based on where they are declared and thats what Scoping is
Where the variable is acessble in JS, whether it is global, or functional scope ,or block scope,  depending on its existence and accessable determines its scope of the partivular variable


4 Types of scopes in  JS
1)GLobal scope
2)Functional scope
3)Block scope
4) Module scope


1)Global scope

A variable which is declared outside any function or block curly braces scope is called global scope

var name = 'Rome'

function greet() {
    console.log('city is ', name);    
}

greet()

console.log(name);
{
    console.log(name);
    
}
when we declare a variable with var, that particular variable becomes a property to global object as window and we can access it by window.name
as name is declared outside it can accessed from anywhere, inside any fn also, outside, inside a block also


2)Functional scope

the variable declared inside a function will omly be accessed inside a very function itself
cannot access outside of the fn, you'll get reference error

be it any , var let const their lifetime is inside that fucniton only


function greet(params) {

    var named = 'okok'
    console.log(named);
    
}

greet() for this line it shows okok

console.log(named); for this line it throws first.js:74 Uncaught ReferenceError: named is not defined
 

3)Block scope
 The variable decalred inside let const {} curly braces cant be accessed outside of it, the lifetime is inside only

{
    let goto = 'Mall'
    console.log(goto);     //Mall

}

console.log(goto); // throws Uncaught ReferenceError: goto is not defined
This is used in our DSA sums for for loops while loops if conditions

{
    var goto = 'Mall'
    console.log(goto);     //Mall

}

console.log(goto); // Mall , becaue it is with var we are able to access, window.goto  'Mall'



if a variable declared inside a function we cant access outside be it with var let const
let and const creates a block scope 
var is function-scoped
Inside a function — all three are inaccessible outside   
All three are local to the function.


On top everyone is similar, be it let const var, 
if it is written on top then it is accesssabel - Global scope

Scope Chain 
JS always goes to one layer up and within its scope  to find the variable's value when we try to access ti 


let globalVar;

function outer() {
    
let outerVar = 'Am a outer man in fn'

    function inner(){
        let innerVar = 'am a inner man in fn'
        
        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);
        
    }

inner()

globalVar = 'am a global'

}


outer()
am a inner man in fn
first.js:108 Am a outer man in fn
first.js:109 undefined


it also links to our closure, when inner is created and inner its called globalvar is nothing thats why you got undefined

even if i assign am a global before calling inner I get to see the value in console



var count = 10

function outer() {
    var count = 20

    function inner() {
        var count = 30
        console.log(count);   
    }

    inner()
    console.log(count);

}

outer()
console.log(count);
since var is in the function i can see 30 20 10 ,
 why because it is inside funciton, it cant be overwritten
Always see where it is createwd and where it is called , you won't get confused
why var inside function behaves well is because in Execution context in Creation pahse itself
 it creates a memory allocated for fn body thats why its not even over written cant be accessed outisde fn body


var gone = 'long'
{
    var gone = 'where ?'
console.log(gone);

}

console.log(gone);
where 
where , here it behave as you expected it , 
var gets overwritten in the block scope

outer()
var count = 10

function outer() {
    var count = 20

    function inner() {
        var count = 30
        console.log(count);   
    }

    inner()
    console.log(count);

}

outer()
console.log(count);


I thought the ans is 30 20 30 20 10

Variable Shadowing
when a variable in a inner scope has a same name as the variable of an outer scope, JS will prioritize the nearest written scope


function add( num ) {
   let total = 0
    total += num
    console.log(total);
}

add(5)
add(10)
in console you see it as 5 10 not 5 15 ,
 why because everytime the function is called
 total is created newly so always total is 0; and adds with params num





 */