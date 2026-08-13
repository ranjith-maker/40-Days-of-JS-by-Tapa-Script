
//1. Odd or Even?
/*

 Take a number and find if the number is an odd or even number.
 Print the number and result in the console.

let num = 5

if(num % 2 === 1 ){
    console.log(num, 'is odd');
    
}else{
    console.log(num, 'is even');
    
}
*/



// 2. Do you have a Driving License?
/*
Let's check if you are eligible to get a driving license.
 The eligibility to get a driving licence is 18 years.
 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.

let age = 11


if(age >= 18){
    console.log(age,'is the eligible age to drive');
    
}else{
    console.log(age,'is not eligible age to drive' );
    
}
    */


//3. Calculate CTC with a Bonus
/*

Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?

 let monthlySalary = 12300
 let bonus = 20
 let ctc 

let salary = monthlySalary * 12
let bonusCalc = monthlySalary * bonus / 100
ctc = salary + bonusCalc

console.log( 'Annual Salary is' , salary); //Annual Salary is 147600
console.log( 'Bonus is' ,bonusCalc ); // Bonus is 2460
console.log(ctc); //150060

*/



//4. Write a program for the Traffic Light Simulation.
/*
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console
  if a traveller needs to STOP or GO. 
 The Red color is for STOP and the Green color is for GO.
let color = 'green'

if(color === 'red'){
    console.log('Stop');
    
}else if(color === 'green'){
    console.log('GO');
    
}

*/


/*
5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate 
 the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees,
 how much will you be charged per month?
 If there is a 20% discount on the annual payment, 
 how much will you be charged for an annual payment? 

let oneUnit = 10*150
let month = 30 * oneUnit
let year = month * 12 
let discount = year * 20 / 100
let annualPay = year - discount

console.log(annualPay); //432000

*/


//6. Leap Year Checker
/*
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator 
 to print if a year is a leap year or not.

let year = 2025
let leapYear = (year % 100 === 0 || (year % 4 === 0 && year % 100 !== 0 )  ) 
? 'a Leap Year' : 'Not a Leap year'
console.log(year + " is " + leapYear); 

*/

// 7. Max of Three Numbers
/*
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.

let p = 5;
let q = 20;
let r = 15;

let max


if(p > q && q > p ){
    max = q
}else if( q > r && p < q ){
    max = q
}else{
    return r
}

console.log('Maximum number', max); //20
*/

// 8. Bitwise Doubling
/*
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.
 
let count = 5;

let doubled = count << 1; // 5*2

console.log('Doubled value', doubled); //10

*/





