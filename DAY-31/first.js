


// DAY -31 JS OOPS explained  codes Notes

/**
 * 
 * 
 * 
 */


// let num = {
//  one  : 1,
//  two : 2
// }

// let person = {
// name : 'Rohith',
// number :num
// }

// console.log(person);
// {name: 'Rohith', number: {…}}
// name
// : 
// "Rohith"
// number
// : 
// {one: 1, two: 2}
// //Value of the property can be a reference type (look above), 
// // array, another object (destructuring), string,boolean


// const person = {
// name : 'Rohith',
// age :20
// }
// person.age = 12
// console.log(person);





// class Car {

//     constructor(model, color, year, owner, regno) {
//         this.model = model
//         this.color = color
//         this.year = year
//         this.owner = owner
//         this.regno = regno
//     }

//   wheel() {
//          console.log('Wheel no is 4');
         
//      }

// }


// function Owner(name, age){
// this.name = name
// this.age = age
// }

// const regNum = 1234
// const tapas = new Owner('Tapas', 25)
// const car1 = new Car('BMW', 'black', 2025, tapas, regNum )
// const car2 = new Car('Audi', 'white', 2022, tapas, regNum )
// car1.wheel()

// car1.regno = 54
// // console.log(regNum); // here it acts as an value
// console.log(car1) // here it acts as a ref because it is an obj
// console.log(car2)


// console.log(tapas)
// console.log(car)
// it is because when we pass an obj we pass by ref not by value
// as pass by ref we have the value not the ref 





// const animal = {
//     eat : function(){
//        console.log('I am eating')
//     }
// }

// const dog = Object.create(animal)
// dog.eat()  I am eating

// //this is a great example of prototypal inheritance
// JavaScript first checks:

// "Does dog have an eat property?"

// No.

// Then it checks dog's prototype:

// "Does animal have an eat property?"

// Yes → so it executes it.

// console.log(Object.getPrototypeOf(dog) === animal);
// true

// "Object.create(animal) creates a new object whose prototype points to animal. 
// Therefore, dog can access properties and methods defined on animal through the 
// prototype chain. dog doesn't have its own eat method; JavaScript finds it on its prototype."













// function flattenObject(obj, parentKey = "", result = {}) {
//     for (const key in obj) {
//         const newKey = parentKey ? `${parentKey}.${key}` : key;

//         if (
//             typeof obj[key] === "object" &&
//             obj[key] !== null &&
//             !Array.isArray(obj[key])
//         ) {
//             flattenObject(obj[key], newKey, result);
//         } else {
//             result[newKey] = obj[key];
//         }
//     }

//     return result;
// }


// const obj = {
//     user: {
//         name: "John",
//         address: {
//             city: "Madurai",
//             country: "India"
//         }
//     }
// };

// console.log(flattenObject(obj));






