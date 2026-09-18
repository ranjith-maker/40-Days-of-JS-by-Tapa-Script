


// DAY -30 JS OOPS explained  codes Notes

// class A{
//     constructor(){


//         method(){}
//         method(){}
//         method(){}

//     }
// }

// const a = new A()
// it creates a new instance of the class , form above template
//  I made this object, which has this(method) behaviour intact, 
// see in console property for proof


// class Car{
//     constructor(brand){
//   this.brand = brand        
//     }

// sayThis(){
//     console.log(this)
    
// }

// }

// let car1 = new Car('BMW')
// let car2 = new Car('Audi')
// car1.sayThis() //Car {brand: 'BMW'}
// car2.sayThis() //Car {brand: 'Audi'}

// it'll see who called it, car1 is called it,so it returns that object


// console.log(typeof Car); //function

//  Because it is called with new 
// const car1 = new Car();
// console.log(typeof car2);

// class can be saved inside variable as well
// if you save it inside a variable always invoke with a variable

// const Person = class{
//     welcome(){
//     console.log('HEllo person'); 
//     }
// }

// let per = new Person()
// per.welcome()


// // Named class
// const Dept = class Department{


// welcome(){
//     console.log('HEllo Dept')
//     console.log(Dept)                // this both prints the same 
//     console.log(Department)        // prints this entire class 
// }
// }

// const gt = new Dept('')
// gt.welcome()


// class Phone{
//     brand = 'Apple'          // if we keep something outside constructor every instance will have to it,  

// make(){
//     console.log(this.brand)
// }
// }
// const p1 = new Phone()
// const p2 = new Phone()

// p1.make()
// p2.make()
// console.log(p1.brand);
// if we keep something outside constructor 
// every instance will have access to it, thats why both prints apple

// Getters and Setters
// the way you can get the value of a property
// and set the value to the property
// beyond that

// class Animal{
//     constructor(name){
// this.name = name
//     }

// get name(){
//     return this._name
// }

// set name(value){
//     this._name = value
// }

// }


// const ani1 =  new Animal('Tiger')  // here as we give value to name, first it 
// // sets value in set name and then it goes to constructor and set value to name property

// console.log(ani1.name) // when I access ani.name, get name will be used to get the value fo name 


// with set(conditions) and get(computations) we can have it like this

// class Animal{
//     constructor(name, color){
// this.name = name
// this.color = color
//     }

// get name(){
//     return `My animal name is ${this._name}`
// }

// set name(value){
//   if(!value){
//     console.warn('Name is mandatory')
//     return
//   }
//   if(value.length < 2){
//     console.warn('name length must be higher than 2')
//     return
//   }
//     this._name = value
// }
// }


// const ani1 =  new Animal('lion', 'yellow')
// Now Set
// here I havent given name and only gave color it threw a warn as first.js:134 Name is mandatory
// I gave only l as 1 length as a name it threw a warn Name is mandatory, 
// Its nice like a form validation
// when asked about getter setter when we set value we can 
// have some conditions like mandatory fields in FORMS

// Now Get
// we can run some computations when getting this value
// console.log(ani1.name) //My animal name is lion
//  lets say when the score is higher 100 congratulations 1st centruy


// Static Properties
// Dynamic, in class, all objs we create are diff to one another diff cars diff house
// but there'll be properties you wanna keep at class levels
// create once and reuse everywhere, where objs have access to the properties or methods

// class Stats{
// static sayName(){
//     console.log(this)
// }
// }
 
// Stats.sayName() 
// to create static method jus write static infront of it
// we can invoke wihtout creating new instance, we can use Stats itself 
// now inside static method this refers this class only , it prints the whole class 


// class User{
//     constructor(name, email){
//         this.name = name,
//         this.email = email
//     }

// static verifyEmail(){
//     return `${this.email}`.includes('@') 
// }
// }

// let user1 = new User('ROhith', 'rogmail.com')

// console.log(User.verifyEmail(user1.email))  //false
//  we can only access static method through Class Name itself and check like this
// we can use static to greet user as soon as he registers


// Private and Public Fields

// Public can be accessible frmo anywhere 
// Private - only access ible inside the class

// class WashingMachine{
// //public fields
// brand;

// //privatefields
// #powerStatus = false

//     constructor(brand){
//         this.brand
//     }

// start (){
// //spin // drain // //stop water 

// if(!this.#powerStatus){
//     this.#turnoff()
// }

// this.#spin()
// this.#drain()
// this.#stopwater()
// this.#turnoff()
// }

// stop (){
//  //turn off 
//  this.#turnoff()
// }


// #spin(){

// }

// #drain(){

// }

// #stopwater(){

// }

// #turnOn(){}

// #turnoff(){
//     this.#powerStatus = true
// }
// }




// Extending class inheritance and Polymorphism parent to child

// class Human{

// constructor(name,age){
//     this.name = name,
//     this.age = age
// }

// introduce(){
//     console.log(`Hello am, ${this.name}`)
// }

// sleep(){
//     console.log(`${this.name} is sleeping`)
// }
// }


// class Student extends Human{

//     constructor(name,age, grade){
//         super(name,age)
//         this.grade = grade
//     }

// marks(){
//     console.log(`${this.name} scored 100`);
// }

// introduce(){
//     console.log(`My name is ${this.name}, am studying ${this.grade}`)
// }

// }


// class Teacher extends Human{

// constructor(name,age,subject){
//     super(name, age)
//     this.subject = subject
// }

// test(){
// console.log(`Teacher is conduction exam on ${this.subject}`)
// }

// }


// const stu1 = new Student('ALice', 10, 5)
// const tech1 = new Teacher('Malar', 27,'Maths')

// // console.log(stu1);
// // console.log(tech1);
// stu1.introduce()  //My name is ALice, am studying 5
// stu1.marks()   //ALice scored 100
// tech1.introduce() //Hello am, Malar

















