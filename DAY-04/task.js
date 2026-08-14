



/**
 * 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

It goes to default It's a normal day,because the case has 'monday' where as in day is 'Monday', Uppercase of m changes so went to default case
 */

/**
 * 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM.
 He enters an amount to withdraw. 
The ATM only allows multiples of 100.
 Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
 let amount = 500

if( amount > 0 &&  amount % 100 === 0){
    console.log('Withdrawal successful');
    
}else{
    console.log('Invalid amount');
    
}
 */
/**
 * 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input,
 and performs the operation on two numbers. Print the output on the console.
 
let num1 = 10
let num2 = 20
let operator = '/'

switch(operator){

case '+':    
   console.log(num1 + num2);
   
break;

case '-':
     console.log(num1 - num2);
break;

case '*':
     console.log(num1 * num2);
break;

case '/':

 console.log(num2 === 0 ? 'Error' : num1 / num2);
break;
default:


}
 */


/**
 * 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.
let age = 22

if(age < 18){
  console.log('Children, Pay 3');
}else if (age > 18 && age <= 60){
    console.log('Adult, Pay 10');
}else{
    console.log('Seniors, Pay 8');
    
}
*/


/**
 * 5. Horoscope Sign Checker
Write a program that prints the
zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. 
Make it month bases, not date based. 
Like March and April borns are Aries, Aplil and May born are Taurus, and so on. 
Do not use if-else.

March + April → Aries
April + May → Taurus
May + June → Gemini
June + July → Cancer
July + August → Leo
August + September → Virgo
September + October → Libra
October + November → Scorpio
November + December → Sagittarius
December + January → Capricorn
January + February → Aquarius
February + March → Pisces
}
 
let month = 'july'

switch(month){

case 'may':
case 'june':
    console.log('They are Gemini');
    break;

case 'march':
case 'april':
    console.log('They are Aries');
    break;

case 'april' : 
case 'may' : 
    console.log('They are Aries');
    break;

case 'june' : 
case 'july' : 
    console.log('They are Cancer');
    break;

case 'july' : 
case 'august' : 
    console.log('They are Leo');
    break;

case 'august' : 
case 'september' : 
    console.log('They are Virgo');
    break;

case 'september' : 
case 'october' : 
    console.log('They are Libra');
    break;

case 'november' : 
case 'december' : 
    console.log('They are Sagittarus');
    break;

case 'december' : 
case 'january' : 
    console.log('They are Capricon');
    break;
    
case 'january' : 
case 'february' : 
    console.log('They are Aquarius');
    break;
    
case 'february' : 
case 'march' : 
    console.log('They are Pisces');
    break;

}
//A switch statement executes the first matching case and, 
//because of the break,  exits the switch. 
//Since July appears in both Cancer and Leo cases,
// only the first July case will execute.

we can structure our data like this
let month = 'may'

let zodiac ={
     january: ['Capricorn', 'Aquarius'],
    february: ['Aquarius', 'Pisces'],
    march: ['Aries', 'Pisces'],
    april: ['Aries', 'Taurus'],
    may: ['Taurus', 'Gemini'],
    june: ['Gemini', 'Cancer'],
    july: ['Cancer', 'Leo'],
    august: ['Leo', 'Virgo'],
    september: ['Virgo', 'Libra'],
    october: ['Libra', 'Scorpio'],
    november: ['Scorpio', 'Sagittarius'],
    december: ['Sagittarius', 'Capricorn'],

}


console.log(zodiac[month]); //[ 'Taurus', 'Gemini' ]

My own switch cases
let month = 'xlfkngud';
switch(month){
  case "january":
  case "february":
  console.log('Winter it is')
  break;

  case 'march':
  case 'april':
  case 'may' :
    console.log('Summer it is');
  break;
   
 case "june":
 case " july":
 console.log('After Summer');
 break;

  case "august":
  case "september":
    console.log('After 6 months')
    break;

 case "october" :
 case "november":
 case "december":
   console.log(' Festival Seasons ');  
   break;
   default :
   console.log('In reality its all only day');

}

 */


/**
 * 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and 
write a program to determine the triangle type. 
Change the inputs everytime manually to see if the output changes correctly.

let sides1 = 30
let sides2 = 30
let sides3 = 10

if(sides1 === sides2 && sides2 === sides3 ){
    console.log('Equilateral Triangle');
    
}else if(sides1 === sides2 || sides2 === sides3 || sides1 === sides3  ){
   console.log('Isosceles Triangle');
}else{
    console.log('Scalene Triangle');
    
}

 */




