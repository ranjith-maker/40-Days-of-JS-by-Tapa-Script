

// DAY -31 JS  OOPS Tasks

/**
 * 1. Create a Simple Prototype Chain
Define a base object animal with a method eat.
Create another object dog that inherits from animal using Object.create.
Call eat from dog and explain how the prototype chain resolves it.

const animal = {
    eat : function(){
       console.log('I am eating')
    }
}

const dog = Object.create(animal)
dog.eat()  //I am eating


2. Build a Custom Constructor Function
Create a constructor function Book(title, author).
Add a method getDetails() to the prototype of Book.
Instantiate two books and show they share the method from the prototype.

function Book(title, author){
  
this.title = title
this.author = author

}

Book.prototype.getDetails = function(){
    console.log(`the book, ${this.title} is written by ${this.author}`)
    
}

const book1 = new Book('Maths', 'RD Sharma' )
const book2 = new Book('Science', 'Einstein' )

book1.getDetails()  //the book, Maths is written by RD Sharma
book2.getDetails()   //the book, Science is written by Einstein




3. Compare Object Creation Patterns
Create three objects using:

Object literals
Constructor functions
Object.create
Add similar methods and compare how inheritance works in each pattern.


const obj = {
    name : 'Object Literal',
    
    getName : function(){
        console.log(` hello from ${this.name}`)
    }
}

// console.log(Object.getPrototypeOf(obj))




class  ConObj{

    constructor(name){
        this.name = name
    }

    sayName(){
        console.log(`My name is ${this.name}`)
}}

const constructobj  = new ConObj('Rohith')

console.log( Object.getPrototypeOf(constructobj) === ConObj.prototype  )
true





const person = {
    sayName : function(){
        console.log(`My name is ${this.name}`)       
    }

}

const createObj = Object.create(person)

createObj.name = 'Object Create'

createObj.sayName()

console.log(Object.getPrototypeOf(createObj) === person  ) //true


Object.create(prototype) 
creates an object whose prototype is exactly the object you provide.





4. Simulate a Real-World Inheritance Chain
Simulate a real-life hierarchy: Person → Student → GraduateStudent.
Each level should add its own methods or properties using prototypes.
Show how a GraduateStudent can access methods from both Student and Person.
class Person{

    constructor(name,age){
  this.name = name
  this.age = age
    }

eat(){
    console.log(`${this.name} is eating`)  
}}


class Student extends Person{

constructor(name,age,marks){
    super(name,age)
    this.marks = marks
}

exam(){
    console.log(`${this.name} has scored ${this.marks} in the exam`)
    
}}


class GraduateStudent extends Student{

 constructor(name,age,marks,college){
    super(name,age,marks)
      this.college = college
 }

study(){
    console.log(`${this.name} is studying at ${this.college}`);   
}

}

const stu1 = new GraduateStudent('Rohith',25,100,'SRM')
// console.log(
// Object.getPrototypeOf(GraduateStudent.prototype)=== Student.prototype   )
// Person === Person
//  console.log(
//   Object.getPrototypeOf(Student.prototype) === Person.prototype
//); //true


// console.log(stu1)
// stu1.eat()
// stu1.study()
// stu1.exam()








5. Object.create vs Class vs Constructor Function
Implement the same User entity using:
Constructor Function
ES6 Class
Object.create
Write a summary comparing syntax, readability, and prototype behavior.

function User(name, age){
    this.name = name
    this.age = age 
}
User.prototype.greet = function(){
    console.log(`Hello ${this.name}`)
    
}
const user1 = new User('Rohith',22)
user1.greet()  //Hello Rohith

class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
greet(){
   console.log(`Hello ${this.name}`)
    
}

}

const user2 = new User('Rohan',22)

user2.greet()  // Hello Mohan


const User = {
    greet(){
   console.log(`Hello ${this.name}`)  
    }
}

const user3 = Object.create(User)
user3.name = 'Mohan'

user3.greet()   Hello Mohan

Pattern	              Syntax	                      Prototype behavior
Constructor         Function	More verbose        Uses User.prototype explicitly
class	           Cleanest/readable	         Uses prototypes behind the scenes
Object.create()	   Very direct	                 You explicitly choose the prototype




 * 
 * 
 * 
 * 
 * 
 * 
 */

