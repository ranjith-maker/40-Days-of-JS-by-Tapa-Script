

/**
 *  DAY 6 TASK 
 * 
 * 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature 
from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
//Formula: (Celsius * 9/5) + 32 

function celToFar(celsius){
return celsius * 9/ 5 + 32
}
console.log(celToFar(22)); //71.6

2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers.
 It should work for negative numbers as well.

function findMax(n1,n2){

if(n1 > n2){
    return n1
}else{
    return n2
}

}

console.log(findMax(-50,5));


3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks
 if a given string is a palindrome (reads the same forward and backward). 
 You can not use any string function that we have not learned in the series so far.

function pal(str) {
    
let n = str.length
let start = 0; let end = n-1

while(start <= end){
if(str[start] !== str[end] ){
    return false
}
start++
end--
}
return true

}


let res = pal('madam')
console.log(res);

4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. 
Example 5! = 5 * 4 * 3 * 2 * 1


function fact(n) {
  if(n===1) return n

let sum = 1

for(let i=1; i <=n; i++){
sum *= i
}
return sum
}
let res = fact(10)
console.log(res); //3628800


5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels 
(a, e, i, o, u) in a given string.

function vow(str) {

let count = 0;
let vowels = ['a', 'e','i','o' ,'u']

for(let i = 0; i < str.length; i++){

    if(vowels.includes(str[i])){
        count++
    }
}
return count
}

let res = vow('umbrella')
console.log(res); //3

6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and
 capitalizes the first letter of each word. 
 You can use the toUpperCase() method of string to convert the lowercase to uppercase.

 function capiWords(str) {
    
let result = str[0].toUpperCase()
for(let i = 1; i < str.length; i++){
    result += str[i]
}
    return result
}


let res = capiWords('umbrella')
console.log(res); //Umbrella


7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. 
Here the Second word must be supplied using paramneter and argument.


(function IIfe(second){
    console.log( 'Hello, ' + second );
    
})('JavaScript!') //Hello, JavaScript!


8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message 
using the name parameter.
function greet(name, cb) {
    
console.log('hello ', name);

cb(name)

}

greet( 'Rohith', function(name){
    console.log('Welcome', name);
    
} )
hello  Rohith
Welcome Rohith



9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();
// JS follows LIFO - LAst in First Out, 
// what funcntion called lastly will be executed first,
//The function that is called last is executed/finished first.
f2()
 ↓
f1()
 ↓
f1() finishes
 ↓
f2() finishes

10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
 

see is it right or not 

first f2 is called so it creates and executes and finished
f3 is called, so it creates, goes inside, and execute f1 first and then only f3 finishes its execution 
now lastly f1 is called , here f1 is called and executes and over 
 it again doesnt have to invoke the f1 which is inside f3 

f2 → f3 → f1 → f1
the body of the f3 will only we executed when f3 is called
 


 */






