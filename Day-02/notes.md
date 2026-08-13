✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
✅ Task 2: Print the values to the console.
✅ Task 3: Try reassigning values to let and const variables and observe errors.
✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes




DAY - 02 Tasks 

let name  = 'Rohith'
const age = 42
let isStudent = true
let favourite_programming_language = 'React.js'

name = 'Rohan'
// age = 50 
console.log(name);
// console.log(age); //TypeError: Assignment to constant variable.
 

//Array
let arr = [10,20,30,40,50,60]
arr[2] = 55

console.log(arr); //[ 10, 20, 55, 40, 50, 60 ]

//object
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

console.log(isStudent);
console.log(favourite_programming_language);
Rohith
42
true
React.js














