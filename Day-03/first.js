



/*
console.log('Cow'  &&  'Horse' ) // Horse
// if it comes like this, it checks like , it sees the first value, can it be converted into false ,
//  Cow string be converted to false NOT possible right,
//  then it directly returns the second operand

console.log('Cow' &&  0 ); // 0

// see since cow cant be converted into false it returned 0 
console.log('Cow' &&  null ); // null
console.log('Cow' &&  undefined ); // undefined
console.log('Cow' &&  0 ); // 0
console.log('Cow' &&  false ); // false
console.log('Cow' &&  -0 ); // -0
console.log('Cow' &&  '' ); //  
empty space came as answer as Cow cant be converted to false it returned the next operand


console.log(false && false); // false
console.log(true && false ); // false
console.log(true && true); //true


console.log('Cow' || 'Horse'); // Cow
// in OR Operator if first one is ture then it'll return that value 


console.log('Cow'  ==  1 )  false

since cow is a truthy value wouldnt it convert it as 1 and 1 ==1 true
console.log('Cow'  ==  1 ) 

Not quite. The key distinction is between truthiness and type coercion in JavaScript.

console.log('Cow' == 1);

This prints:

false
Why?

'Cow' is indeed a truthy value, but JavaScript does not convert every truthy value into 1 when using ==.

Truthiness is used mainly in conditions:

if ('Cow') {
    console.log("This runs");
}

Because 'Cow' is truthy, the if runs.

But with ==, JavaScript follows type-coercion rules. In this case, it tries to convert the string "Cow" into a number:

Number("Cow") // NaN

So the comparison effectively becomes:

NaN == 1

And:

NaN == 1 // false
Compare these examples
console.log(true == 1);      // true
console.log(false == 0);     // true

console.log("1" == 1);       // true
console.log("0" == 0);       // true

console.log("Cow" == 1);     // false
console.log("Cow" == true);  // false

The important rule is:

Truthy does NOT mean "converts to 1".

true can be coerced to 1 in numeric comparison, but an arbitrary truthy string like "Cow" is converted using Number(), which gives NaN.

A useful way to remember it:

Truthy/falsy → used for conditions
Type coercion → depends on the operator and the types involved


For Double Question mark 
 op1 ?? op2 
 if the first operand null or undefined then return the second op2 , otherwise return the 1st operand
console.log(null ?? true); // true
console.log(null ?? false); // false
console.log(undefined ?? 3); //3
console.log(false ?? 'Tapascript' ); // false
console.log(false ?? '354' ); // false
console.log(0 ?? 20 );//0



Bitwise Operators
The operands are treated as 32 bits in 0s and 1s
 & | ^ ~ << >>


15 & 9 = 9 do dsa of binary to decimal and decimal to binary
1111 & 1001 = 1001

15 / 2 = 7 (1) Q R 
7 / 2 = 3 (1)  Q R 
3 / 2 = 1 (1)  Q R

9 / 2 = 4 (1)
4/2 = 2 (0)
2/2 = 1 (0)


15 | 9 = 15

1111 | 1001 = 1111 

15 ^ 9 = 6




9 << 2 = 36
1001 << 2 shift two places before and the blank space is filled with 00 so 100100  now find decimal for this 100100 which is 

9 >> 2 = 2 this need to study right shift
1001 >> 2  , 0010


Easy way to remember

For positive numbers:

<< 1  → × 2
<< 2  → × 4
<< 3  → × 8

>> 1  → ÷ 2
>> 2  → ÷ 4
>> 3  → ÷ 8

So:

9 << 2 = 9 × 4 = 36
9 >> 2 = floor(9 ÷ 4) = 2

Here you go — bitwise shift shortcut from 1 to 10 for positive integers:

Left Shift <<
<< 1  → × 2
<< 2  → × 4
<< 3  → × 8
<< 4  → × 16
<< 5  → × 32
<< 6  → × 64
<< 7  → × 128
<< 8  → × 256
<< 9  → × 512
<< 10 → × 1024
Right Shift >>
>> 1  → ÷ 2
>> 2  → ÷ 4
>> 3  → ÷ 8
>> 4  → ÷ 16
>> 5  → ÷ 32
>> 6  → ÷ 64
>> 7  → ÷ 128
>> 8  → ÷ 256
>> 9  → ÷ 512
>> 10 → ÷ 1024

Simple formula
n << x  → n × 2ˣ
n >> x  → floor(n ÷ 2ˣ)   // for positive integers

For example:

9 << 3  // 9 × 8   = 72
20 << 4 // 20 × 16  = 320

9 >> 2  // floor(9 ÷ 4)  = 2
20 >> 3 // floor(20 ÷ 8) = 2

So just remember: left = multiply by powers of 2, right = divide by powers of 2.



*/
/*
Grouping Operator
Brackets → Power → Multiply/Divide → Add/Subtract

( )
**
* / %
+ -

let p = 1
let q= 2
let r = 3

let ans = p + q * r // 7
let ans = (p+q) * r //9

console.log(ans); 7 
*/

// instanceof ---> we can understand when leanring object

















