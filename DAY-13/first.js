
// "use strict"

// DAY -13 THIS notes

/*

The main purpose of THIS keyword in jS?
The value of THIS depends on how the function is called
It lets you access properties and methods belonging to the current object:

even in an empty JS file, THIS keywords has a value, 
it points to who how called it, global so window
In an object when the property value is a function we call them as  method

console.log(globalThis);


this.__proto__.__proto__.__proto__.__proto__.__proto__
only 5th level comes null 

this is implicit Binding,
const person1 ={
    name: 'Rohith',
    age :22,
    greet : function(){
       console.log('Hello', this.name);
    }   
}


const person2 = {
    name :' Mohan',
    age :55,
    greet  : person1.greet
}

person2.greet() //Hello Rohith
person1.greet()  //Hello  Mohan


Strict mode is to make sure the code
 that you are writing is adhering to some of the core 
philosophy of the JS, and our code doesnt end with mistake



function outer(a) {
    console.log('Am outer fn', this);

    return function inner(b){
        console.log('Im an inner' , this);   
    }
}

let bothFn = outer(2)
bothFn(1)
this both will give undefined in strict mode, else window object
outer()



const fruit = {
    name : 'Mango',
    color : 'yellow',

    getTaste : () =>  console.log(`${this.name} color is ${this.color} `)
    
}

fruit.getTaste()
for arrow function be it strict mode or non strict mode it'll undefined if an parent is window object,
here getTaste parent fn is window itself
color is undefined 


const fruit = {
    name : 'Mango',
    color : 'yellow',

   getTaste(){
    return () => console.log(`${this.name} is ${this.color}`);
     
  }
    
}

const result = fruit.getTaste()
result()
Mango is yellow



CALL BIND APPLY is Explicit Method


function greeting() {
    console.log('Hello', this.name);
    
}

const user = {
    name :'Rohith',
    age : 55
}

greeting.call(user) //Hello Rohith, you see even greeting not even getting params still prints
as user's name as this value 


function likes(hobby1, hobby2) {
    console.log(this.name, 'likes', hobby1, hobby2);
    
}

let person = {
    name :'Rohith'
}


likes.call(person, 'Cricket ,', 'Football' ) 
Rohith likes Cricket , Football
when we use call with this, first params dont need to take in function
Think of call() like this:
likes.call(person, 'Football', 'Cricket');
           ↑
        becomes `this`




Apply

function likes(...hobby) {
    console.log(this.name, 'likes', hobby);
    
}

let person = {
    name :'Rohith'
}


const hobbies = ['Cricket', 'football', 'Tennis']

likes.apply(person, hobbies ) //Rohith likes [ 'Cricket', 'football', 'Tennis' ]
apply in params I didnt take person as user still printed correctly




const person ={
    name :'Alice'
}
function likes(...hobby) {
    console.log(this.name , 'likes', hobby);
    
}

const newFn = likes.bind(person, 'Dancing', 'Singing' )

newFn()

Bind returns a new fn we save in a variable and call it, 
here also it dint get the params as obj



const user = {
    name: "Tapas",
    greet: function () {
      const inner = () => {
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
  };

  user.greet(); //Hello, Tapas!


const obj = {
    name: "John",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };

  const greetFn = obj.greet;
  
  greetFn.call(obj)  //Hello, John!

here if we simply call it ,  const greetFn = obj.greet() we can see the answer, 
not really have to use .call



  const user = {
    name: "Tapas",
    greet: function () {
      function inner() {
        console.log(`Hello, ${this.name} !`);
      }
      inner();
    },
  };

  user.greet(); //Hello, undefined!

when a this is used inside a standalone function 
and not inisde an object then it is global window,
if it is strict then undefined,
even if it is non strict, and it is written like this.name then also itis undefined
 why window obj doesnt have window.name thast why undefined


*/