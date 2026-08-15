/*

DAY 5 Tasks , question and answer

1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * *

for(let i = 0; i <= 5; i++){
    let print = ''
  
for(let j = 1 ; j <= i; j++){
     print += '*'
}    

console.log(print);

}





2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. 
For Example: If N = 3, output should be:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30

 let n = 3
for(let i=1; i<=10; i++){
  console.log(`${n} X ${i} = ${n* i} `  );
  
}


3. Find the summation of all odd numbers between 1 to 500
 and print them on the console log.

let sum = 0
for(let i = 1; i <=500; i++){
    if(i % 2 !== 0){
    sum += i
    }

}
console.log(sum); //62500


4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

for(let i=1; i<=20;i++){
if( i % 3 ===0){
    continue
}
    console.log(i);
    
}



5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876

let num = 6789
let rev = ''
while(num !== 0){

let last = num % 10
rev = (rev * 10 ) + last
num = Math.floor(num/ 10 )

}
console.log(rev); //9876
 

6. Write your understanding on the difefrences between for,
 while, and do-while loop. Create their flow charts.

for loop runs as long as the condition meets like second condition i <= 10; like this, when I know the no of times I need torun the code

while loop runs as long as the condition inside is true like start <= end for binary sums in DSA, I run this when i dont know how many times I need to run

do while loop runs the loop body first and checks the condition afterward. Atleast it runs atleast once

*/








