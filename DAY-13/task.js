

// DAY -13 THIS tasks

/**
1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations

At the Global
Inside an Object Method
Inside the Satandalone non-Arrow Function
Inside an Arrow Function(standalone)
Inside an Arrow Function(as object method)
Inside an object created with the Constructor Function
Please add examples for each of the scenarios.


2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
Arrow function took global as a parent so changed it to normal function
const user = {
  name: "tapaScript",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet()
//Hello, tapaScript!




3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();


const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet
greetFn.call(obj) //Hello, Tom!

//greetFn doesnt have access to obj, we can simply , do const greetFn = obj.greet(), or use call method



4. What is the problem with the following code? 
Why isn't it logging the name correctly?

const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();



const user = {
  name: "Alex",
  greet: function () {

  const inner = () => {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet(); //Hello, Alex!

// if we can see name if we log inside greet function not inside inner function
// since we call inner fn we cant print it so if we make inner as an arrow fn we can see the name 
//Hello, Alex!



5. Create a Sports constructor function that takes name 
and number of players as arguments and assigns them using this keyword. 
Then, create two sports instances and log their details


 Create a Sports constructor function that takes name 
and number of players as arguments and assigns them using this keyword. 
Then, create two sports instances and log their details

class Sports{
  constructor(name, num){
this.name = name;
this.number = num;

  }

    getPlayerNames (){
    console.log('Player is', this.name);
    
  }

  getPlayerNumbers(){
    console.log(this.name ,'number is', this.number);
    
  }

}


let p1 = new Sports('Sachin', 50)
let p2 = new Sports('Dhoni',5)

p1.getPlayerNames()
p2.getPlayerNumbers()


6. Can you attach the car1's describe() method to car2 object? 
Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};


/*
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
  desc : car1.describe
};

car2.desc() //This car is a BMW X1.
we can simply add the describe as a property so that we can call usign car2.desc() like this
*/
//or can assign it like this 
/*
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car2.desc = car1.describe
car2.desc()   //This car is a BMW X1.

Using call method
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

 car1.describe.call(car2) //This car is a BMW X1.


7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
Options are:

A: "Charlie" and "Charlie"
B: "Charlie" and undefined
C: "Charlie" and "" (empty string)
D: undefined and "Charlie

option - B, Charlie and undefined 

 */
// What will be the output of the following code and why?
