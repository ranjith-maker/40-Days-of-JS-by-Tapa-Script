
// DAY -12 Objects notes

/**
 * 
Objects starts with = { curly braces and always come with "Pair", key:value, key and its corresponding value, here user_name is key Rohit is Pair.
 

let role = "admin";
let obj ={
    name : "Harsh",
    age : 30,
    city : "Bhopal",
    [role] : "Jagan"
};

console.log(obj)  --> { name: 'Harsh', age: 30, city: 'Bhopal', admin: 'Jagan' }
In ans it says admin is Jagan, we can access it with [] and that value here becomes an key

let obj ={
    false : "Harsh",
    10: 30,
};
console.log(obj)  -->{ '10': 30, false: 'Harsh' }

//
Number and Boolean can also be an key
  
let a = {
    score : 90,
    marks : "bad"
}
let b = {...a}

console.log(a)   { score: 90, marks: 'bad' }
console.log(b)   { score: 90, marks: 'bad' }

b.score = 100;

console.log(a)  { score: 90, marks: 'bad' }
console.log(b)  { score: 100, marks: 'bad' }



let obj = {
user_name: "Rohit",
account_number: 987589,
balance: 1000
}
Add , comma after every line so it knows the first one ended
Why we use Object, becoz all the information is stored in 1 place. Like the above ex. And username, password of instagram accounts
Maximum time we deal with the object
let a {
name:"harsh";
}
let b = a;
b.name = "Harshita";
go to output console and type b it will come Harshita
type a it will come Harshita as a = b, means b = a 

*/


// let person = {
//     name: 'Rohith',
//     age: 5,
//     'is admin' : false
// }

// person['movie lover'] = 'Marvel'

// you cant access this like others person.is admin so person['is admin']
// console.log(person['is admin']); //false
// console.log(person);
// delete person['movie lover']


// const someKey = 'age'

// person[someKey] 
// console.log(person[someKey]);


// let car = prompt('Whats your car')

// let favCar = {
//     [car] : 2
// }

// console.log(favCar);

// as I write ans in prompt its added here as a key , baceause here [car] is boxed so, 
// instead of car , there will be Audi , or BMW as I type, Dynamically adding Keys to JS



function Car(name, model){
 this.name = name,
 this.model = model

}



// let bmwcar = new Car ('BMW', 'lexar1')
// let audicar = new Car('Audi', 'lu10')
// console.log(bmwcar);
// console.log(audicar);

// console.log(bmwcar instanceof Car); //true, we are saying that bmwcar is a instance of Car, it means bmwcar has a properties of Car

// const person = Object()
// person.city = 'Tokyo'
// person.country = 'japan'
// console.log(person);

// this is called a factory function, a function that creates and returns objects.
//  A constructor typically uses new, A factory function doesn't require new:



function createUser(name, age) {
    
return{
    name : name,
    age,
    greet(){
        console.log('Hello', name);
        
    }
 
}

}

const user1 = createUser('Tapas', 55)
const user2 = createUser('Rohith', 50)

//user1.greet()

//console.log(user2);

// propertie's key name and parameter is same then dont need to expand
//  it like, name : name,  we can use as name, age
// if we write a funct inside an object then it is called a method

// Nested Object

// let profile = {
// name : 'Rohith',
// age :10, 
// company : 'Youtube',

// address :{
//  city : 'Bangalore',
//  state : 'Karnataka',
//  pincode : 783025,
//  greet(){
//     console.log(`Welcome to ${this.city} ${profile.name}  `);
//  }

// },

// works: function(){
//     console.log(`${this.name} is working at ${this.company}`  );
// },

// }

//console.log(profile);

//profile.address.greet() //Welcome to Bangalore Rohith
 
//console.log('works' in profile );
// if you wanna check in whether particular property exist in the object , use their key is there are not
// use in first the 'key' in objectName  'name' in profile console it you see true or false based on existance




// now loop the object, 
// when I try to loop I get one level of key names 

// for(let key in profile){
//     console.log(key);
    
// }
// name
// age
// company
// address
// works

// how to get nested obj's key names is, 2 ways are there

// Normal For loop in way
// for(let key in profile){
//     console.log(key)
// if(typeof profile[key] === 'object'){
//     for(let nestedKey in profile[key] ){
//         console.log(nestedKey);
//     }
// } }


// Recursive approach
// function printKeys(obj) {
    
// for(let key in obj){
//     console.log(key)

// if(typeof obj[key] === 'object' &&  obj[key] !== null  ){
//     printKeys(obj[key])
// }

// }}

// let res = printKeys(profile)
// console.log(res);


// name
// age
// company
// address
// city
// state
// pincode
// greet
// // works
// I get all keys in an Array
// console.log(Object.keys(profile)); //['name', 'age', 'company', 'address', 'works']


// Objects will always get compared to their references , not values 

// let fruit = {name :'mango'}
// const anotherFruit = {name : 'mango'}

// console.log(fruit === anotherFruit); //false
// console.log(fruit == anotherFruit);   //false
// even == also compares only references for Non primitive data type , lets see for array also

// let arr = [1,0,2]
// let brr = [1,0,2]

// console.log(arr == brr ); //false
// console.log(arr === brr ); // false


// fruit = anotherFruit // right side gets assigned to left side variable, now both of their ref are pointing to same values
// console.log(fruit === anotherFruit); // true
// console.log(fruit == anotherFruit);   //true


// Object.assign - static method


// let classes = {
//     a : 10 , b: 20
// }

// let school = {
//  c : 30, b: 40
// }


// let mergedObj = Object.assign(school,classes)

// console.log(mergedObj);

// first has over rided the next one, {c: 30, b: 20, a: 10},
//  since we gave school first , so scoll b is overrided by classes


// const obj1 = {name : 'JS king'}

// const obj2 = Object.assign({}, obj1 )

// console.log( obj2 ); // {name: 'JS king'}
// console.log(obj1 == obj2 ); //false 


// const obj1 = { a:10 ,  b:20, c : { d :40 } }


// const obj2 = Object.assign({}, obj1)

// console.log(obj1);
// console.log(obj2);

// obj2.c.d = 50
// obj2.b = 25

// console.log(obj1); 

// console.log(obj2);


// so Object assign does is, it only copy one level , 
// another nested it foes only reference copy, it'll be same, only 
// thats why changes made in obj2.c.d is visible in obj1 too. It is called Shallow copy
// it impacts both the cases, it only copies one level and nested obj are copied ref only 
// thats why changes made in one obj is reflected in both the objects

// To copy deeply, Use StructuredClone


// const obj3 = { a:10 ,  b:20, c : { d :40 } }

// const obj4 = structuredClone(obj3)

// console.log(obj3);
// console.log(obj4);

// obj4.c.d = 50

// console.log(obj3); //shows d : 40
// console.log(obj4); //shows d : 50

// console.log(obj3 === obj4); //false
//always use {} abd then putting inside it
// const obj1 = { a:10 ,  b:20, c : { d :40 } }
// const obj2 = { d:10 ,  e:20,  }


// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// { a: 10, b: 20, c: { d: 40 } }
// { d: 10, e: 20 }
// { a: 10, b: 20, c: { d: 40 }, d: 10, e: 20 }




// To Obj into an Array , use Object entries

// const obj1 = {
//     name : 'Rohith', city : "Delhi"
// }
// let res = Object.entries(obj1)
// console.log(res);
// console.log(res.length); //2 , as we turned into an array we're able torun length and see as 2
// Object enteries is useful when we get api data as obj and we need to turn 
// it as array toloop through in that situation object.entries erwally helpful

// Now lets see how to turn arr to Obj
// when want this, keep arr in such as Map([ [],[],[],[] ])
// let arr = new Map([
// ['foo' , 'bar'], ['bus', 20]
// ])

// let res = Object.fromEntries(arr)
// console.log(res); //{foo: 'bar', bus: 20}

// to mutate obj
// Object.freeze() we cant  even add new property or delete or modify existing one
// let obj1 = {
//     salary : 100
// }

// Object.freeze(obj1)

// obj1.salary = 500
// obj1.id = 5560
// delete obj1.salary

// console.log(obj1); {salary: 100}
// console.log( Object.isFrozen(obj1) ); true

// with Object.seal you can only modify existing ones not delete 
// or add like cant push or pop

// const obj1 = {
//     name : 'Raaj',
//     age: 20
// }

// Object.seal(obj1)

// obj1.name = 'Rocky'
// delete obj1.age

// console.log(obj1); //{name: 'Rocky', age: 20}


// hasOwn tells me in this object, do i have this key , if yes true else false

// const obj1 = {name: 'Rocky'}

// console.log(Object.hasOwn(obj1, 'name')); //true
// console.log( Object.hasOwn(obj1 , 'city'  )  ); //false








































































































































