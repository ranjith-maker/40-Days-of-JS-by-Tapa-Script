

// DAY -30 JS  OOPS Tasks
/*
1. Create a Book Class
Create a Book class with properties: title, author, pages.
Add a method describe() that logs: "Title: [title], Author: [author], Pages: [pages]"
Create at least two book objects and call the describe() method.




class Book{
    constructor(title, author, pages){
        this.title = title,
        this.author = author,
        this.pages = pages
    }

     describe(){
        console.log(`${this.title} is written by ${this.author} , it has ${this.pages} `)  
     }
}


const b1  = new Book( 'God of Small things','Arundhati Roy', 255)
const b2 = new Book('Rich Dad Poor Dad' ,  'Robert K' , 300)

console.log(b1)
console.log(b2)




2. Use Getters and Setters with a Temperature Class
Create a Temperature class with a private field _celsius.
Add a getter to return Fahrenheit value.
Add a setter to set Celsius temperature.
Test setting temperature and logging Fahrenheit.
this._celsius * 1.8 + 32;
class Temperature{

constructor(celsius){
    this.celsius = celsius
}

get celsius(){
    return `Farenheit is ${this._celsius * 1.8 + 32}  `
}

set celsius(value){
    this._celsius = value
}}

const temp = new Temperature(5)

console.log(temp.celsius) //Farenhiet value is 41



3. Build a User Class with Public & Private Fields
Fields: name, #password
Add a method checkPassword(pw) that checks if it matches #password.
Show how private fields can’t be accessed directly outside the class.
class User{

    constructor(name){
     this.name = name
    }

#password = 'Holapass'

checkPassword(pass){
  if(pass === this.#password){
    console.log('Password is same') 
  }else{
    console.log('Password is not same')
  }
}

}

const person = new User('Rohith')
person.checkPassword('Holapass') //Password is same




4. Inheritance — Vehicle and Car
Vehicle class has fields: make, model, and method start()
Car extends Vehicle, adds fuelType
Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

class Vehicle{
    constructor(make,model){
       this.make = make
       this.model = model
    }

    start(){
        console.log(`${this.model} is started`)
        
    }

}

class Car extends Vehicle{

constructor(make, model, fueltype){
  super(make, model)
 this.fueltype = fueltype
}
start(){
    console.log(`This car start on ${this.fueltype}`)
    
}
}

const car1 = new Car('Aluminium' , 'German model', 'Automatic')

car1.start() //This car start on Automatic
console.log(car1);




5. Use a Static Method
Create a class MathUtils with static methods: add(a, b), subtract(a, b), randomInt(min, max)
Call the methods without creating an object.


class MathUtils{

    static add(a,b){
        console.log(a+b)
    }

    static sub(a,b){
        console.log(a-b)
    }

 static randomInt(min, max){
        console.log(Math.floor(Math.random() * (max - min +1))+ min  )
        
    }

}

MathUtils.add(5,7)  //12
MathUtils.sub(15,7) //8
MathUtils.randomInt(1,20) //17




6. Smart Light Bulb Class with Access Control
Create a SmartLightBulb class:
Public method: turnOn(), turnOff()
Private method: #connectToWiFi()
turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
Try accessing the private method directly and observe the error.
class SmartLightBulb {

    turnOn() {
        this.#connectToWiFi();
        console.log("Light is ON");
    }

    turnOff() {
        console.log("Light is OFF");
    }

    // Private method
    #connectToWiFi() {
        console.log("Connected to WiFi");
    }


    static info() {
        console.log("SmartLightBulb v1.0 supports remote control and scheduling.");
    }
}

// Create an object
const bulb = new SmartLightBulb();

bulb.turnOn();
// Connected to WiFi
// Light is ON

bulb.turnOff();
// Light is OFF
// Static method — called on the class itself
SmartLightBulb.info();
// SmartLightBulb v1.0 supports remote control and scheduling.

bulb.#connectToWiFi();
// SyntaxError: Private field '#connectToWiFi' must be declared in an enclosing class




7. Animal Class and Subclasses
Base Class: Animal(name, sound)
Method: makeSound() logs: "The [name] says [sound]"
Subclass 1: Dog(name) — inherits from Animal
Overrides makeSound() → "The Dog [name] barks!"
Subclass 2: Cat(name) — overrides makeSound() → "The Cat [name] meows!"
Call super() inside each subclass constructor
Add a shared method sleep() in Animal and test with both Dog and Cat instances.


class Animal{

constructor(name, sound){
    this.name = name
    this.sound = sound
}

makeSound(){
    console.log(`The ${this.name} says ${this.sound}`)
}

sleep(){
    console.log(`${this.name} is sleeping`)
    }
}


class Dog extends Animal{
 
    constructor(name, sound){
        super(name, sound)
        this.sound = sound
        this.name = name
    }

    makeSound(){
    console.log(`The ${this.name} says ${this.sound}`)
    }

}

class Cat extends Animal{
 
    constructor(name, sound){
        super(name, sound)
        this.sound = sound
        this.name = name
    }

    makeSound(){
    console.log(`The ${this.name} says ${this.sound}`)
    }

}


const dog1 = new Dog('Blacky', 'barks')
const cat1 = new Dog('Tom', 'Meow')

dog1.makeSound() //The Blacky says barks
cat1.makeSound() // The Tom says Meow



*/












