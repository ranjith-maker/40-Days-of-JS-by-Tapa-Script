
// DAY -15 Array in JS




// let res = [] 
// let ros = Object.getPrototypeOf(res)

// console.log(ros)

// console.log(Object.getPrototypeOf(res)) 

// console.log(res === ros) //false
/**
 * 
let res = [] 
res is an Array instance, and its prototype is Array.prototype.
 * 
 */



/*

    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    //const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑")


for(let i=0; i < salad.length;i++){
    console.log(`The ${i} in ${salad[i]} `);
    
}


let res = fruit.push('onion')  adds at end
console.log(res) //5, push returns length of an array, doesnt return new arr
console.log(fruit) // push also modifies an original array, mutated it 

const fruit = ['Apple','Mango', ['Carrot', 'kiwi'], 'onion', 'tomato']

fruit[2].push('coconut')

console.log(fruit) ['Apple', 'Mango',  [ 'Carrot', 'kiwi', 'coconut' ],  'onion',  'tomato' ]


let res = fruit.unshift('onion')
console.log(res) // 5, unshift also returns length of an array,
// also modifies an original array, mutated it
console.log(fruit)  // adds infront unlike push

let arr = [1, 2, 3, [-4, -3]]
let len = arr.unshift([-7, -6], [-5]); // the new array length is 6
console.log(arr) //[ [ -7, -6 ], [ -5 ], 1, 2, 3, [ -4, -3 ] ]
console.log(len)6


const fruit = ['Apple','Mango', 'Carrot', 'kiwi']

let res = fruit.shift() // shift will delete the first value
console.log(res) //shift will return a shifted 1st value, the elem it deleted
console.log(fruit)


const fruit = ['Apple','Mango', 'Carrot', 'kiwi', 'onion', 'tomato']

let arcopy = fruit.slice()
console.log(arcopy)

console.log(fruit == arcopy) // false
console.log(fruit)

How to find whether an variable is an array or not
const fruit = ['Apple','Mango', 'Carrot', 'kiwi', 'onion', 'tomato']

console.log(Array.isArray(fruit)) //true
let res = 'fruits'
console.log(Array.isArray(res)) //false

console.log(Array.isArray([])) //true
let obj = {
    name :'Rohith',
    city : ['delhi', 'mumbai']
}

console.log(Array.isArray(obj.city)) //true


*/





/*
Destructure an Array , positionn matters
const fruit = ['Apple','Mango', 'Carrot', 'kiwi', 'onion', 'tomato']

const [one, fifty, three] = fruit

console.log(one); //Apple
console.log(fifty); //Mango
console.log(three); //Carrot

we can also skip the values while destructuring
const [ first, , third ] = fruit

console.log(first); // Apple
console.log(third); // Carrot

we can also assign default values while destructuirng,
const fals = [ 'apple']
const [ first, second = 'gova' ] = fals

console.log(first, second) //apple , gova

using rest operator for remaining
const [ one, ,...restall  ] = fruit
console.log(one) //Apple
console.log(restall) //[ 'Carrot', 'kiwi', 'onion', 'tomato' ]


Destructuring follows the shape of the array.
let arr = [1,2,3, [4,5]]
console.log(arr[3][1]) //5
const fals = ['Apple',['Mango', ['Carrot', ['kiwi']], ['onion', 'tomato']]]

// const [ one, [two, [three, [four]], [five,six] ]  ] = fals

console.log(one); //Apple
console.log(two); //Mango
console.log(three); //Carrot
console.log(four); //kiwi
console.log(five); //onion
console.log(six) //tomato

In nested arrays, I destrucuted,skipped, rest oprtr
const  [ one, [,[three,[]],[...lastAll] ] ]  = fals
 

console.log(one); //Apple
console.log(three); //Carrot
console.log(lastAll) //[ 'onion', 'tomato' ]

const nums = [
  1, [2,[3,4, [5,[ 6, 7, [ 8,    [ 9,  10,  [   11, 12,[ 13,14]]]]]]]]
]

one of the nice way to access 13 is not thinking endlessly in mind,
console.log(nums[1][1][2][])
we can do simple destructuring, jus follow position and give variable name, simply done

const [a,[b,[c,d,[e,[f,g,[h,[i,j,[k,l,[m,n]]]]]]]] ] = nums

we can also skip to get, still use same position with comma
const [ ,[,[,,[,[,,[,[,,[,,[,last]]]]]]]]] = nums
console.log(last) //14

console.log(m) // 13
console.log(n) // 14

*/

/*
 * Spread - it expands an arr/obj into an individual elems,Common use: copying/combining arrays
 * Rest  - it collects the remaining values into an array 
 rest usually appears on the left side of an assignment operatior or in function parameters,
  while spread appears where multiple values are expected.
 Rest
let one = 'sad';
let two = 'smile';

[one,two] = [two, one];

console.log(one) //smile
console.log(two) //sad

Spread

let one = [1,2,3,4];
let two = [ 5,6,7,8];
let res = [...one, ...two]
console.log(res) //combined in single arr 


Arr Length
Maximum no of elem array can hold the is 2 ** 32 -1 , can i do this , arr1.length = 2 ** 32 

let arr1 = [10,20,30,40,50]
let arr2 = new Array(7).fill('0')

console.log( arr2[5] )
console.log(arr1.length)
arr1.length = 3
console.log(arr1) //[ 10, 20, 30 ]
console.log(arr1.length) // 3

to empty an array , to remove all elems in the array jus make length as 0
arr1.length = 0
console.log(arr1 , arr1.length  ) // [] 0
*/




/**
 Concat an array
 let arr = [1,2,3]
 let brr = [5,6,9] 
 let crr = [7,8,9]

let merged = arr.concat(brr,crr)
console.log(merged) [ 1, 2, 3, 5, 6, 9, 7, 8, 9 ] 
concat returns an array of merged ones, we can jus 
add multiple till N level arr to merge

console.log(arr +' '+ brr) 1,2,3 5,6,9
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers) [[1], 2, [3]]

modify the first element of num1, through this we learnt that 
push can be put inside also if it is an nessted arr as push only be called with array
with accessing elem .push() num1[0].push(4)

console.log(numbers) [[1, 4], 2, [3]]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

 * 
 Join()
 const arr = [];
arr.push(1, [3, arr, 4], 2);  

const arr = [];
arr.push(1, [3, arr, 4], 2);
arr.join(';') 
console.log(arr) // 1;3,,4;2
const arr = ["Wind", "Water", "Fire"];
 

console.log(arr.join()) //Wind,Water,Fire
console.log(arr.join(',')) //Wind,Water,Fire
console.log(arr.join('')) //WindWaterFire
console.log(arr.join(' ')) //Wind Water Fire
console.log(arr.join(' + ')) //Wind + Water + Fire

empty array using join will return a string
console.log([].join() ) //''
console.log([].join('') ) //''
console.log([].join(',') ) //''

Fill()
fill mutates the og arr
let colors = ['blue', 'green', 'yellow' ]
console.log(colors.fill('pink')) //[ 'pink', 'pink', 'pink' ]
console.log(colors) //[ 'pink', 'pink', 'pink' ]

// Fill with 0 from position 2 until position 4
const arr = [1, 2, 3, 4];
fill(value, start, end)
so if we want our last to be added ,
 we should give one number extra 
console.log(arr.fill(0,2,4) ) //[ 1, 2, 0, 0 ]

Fill with 5 from position 1
const arr = [1, 2, 3, 4];
console.log(arr.fill(5, 1, 4))
[ 1, 5, 5, 5 ]
start is inclusive end is exclusive
const arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 4);
console.log(arr) //[ 1, 9, 9, 9, 5 ]

fill also supports negative indexes

console.log([1, 2, 3, 4, 5].fill(9, -3, -1)) //[ 1, 2, 9, 9, 5 ]
1   2   3  4 5
-5  -4  -3 -2 -1
1 2 9 9 5 
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr)
shouldnt it do only for 1st elem of obj
Exactly — this is a very important JavaScript gotcha. Your intuition would be correct if .fill({}) created a new object for every position, but it doesn't.

const arr = Array(3).fill({});


There is only ONE object being created:

        ┌─────────┐
arr[0] ─┤         │
arr[1] ─┤   {}    │
arr[2] ─┤         │
        └─────────┘
All three elements point to the same object.
You can prove it:

const arr = Array(3).fill({});
console.log(arr[0] === arr[1]); // true
console.log(arr[1] === arr[2]); // true


Includes
it also supports negative index
arr.includes(searchValue, fromIndex)

fromIndex tells JavaScript where to start searching.

const arr = [10, 20, 30, 40, 50];
arr.includes(30, 3) false
arr.includes(30);       // true
arr.includes(30, 2);    // true

so we're looking for 30, and we start our search from 3rd index since there are only 4 , and we start 
we search from index 3 and 3 4 is 40 and 50 so it returned false

console.log([1, , 3].includes(undefined)); // true


array length is 3
fromIndex is -100
computed index is 3 + (-100) = -97, JS defaults to 0

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false, why false arrlength - fromINdex 
3 - (-2) = 1 = we started seaching from 1 2 b c no a so false 


How can you check if a value is 
partially matching with any of the elements of an Array?

let arr = ["apple", "banana", "mango", "pine"];
console.log(arr.some((item)=>  item.includes('app'))) // true 

Includes checks exact match ,
 where as some + includes checks partial match
in numbers it is

let num = [12, 35, 878, 69]
console.log(num.some((nos)=> String(nos).includes('7')  )  ) //true







IndexOf()

array.indexOf(searchValue, fromIndex)
"Search for this value, starting from this index, and give me its index."


const array = [2, 9, 9];
array.indexOf(2, -1); // -1

looking for 2's index, since try to search from
last as -3 -2 -1, it is 9 and ended it gave us -1 as answer

array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -3); // 0

console.log([1, , 3].indexOf(undefined)); // -1
function updateVegetablesCollection(veggies, spinach) {
  if (veggies.indexOf(spinach) === -1) {
    veggies.push(spinach);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${spinach} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.



lastIndexOf()

const numbers = [2, 5, 9, 2];

numbers.lastIndexOf(2) //3
numbers.lastIndexOf(7); //-1
numbers.lastIndexOf(2, 3) // 3

numbers.lastIndexOf(2, 2) //0
numbers.lastIndexOf(2, -2) //0 
//because lastIndex doesnt search forward  ti deos in backward
numbers.lastIndexOf(2, -1)// 3

indexOf() → → →  searches forward

lastIndexOf() ← ← ←  searches backward


Reverse()
it mutates the OG array
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5


toReverse()
it doesnt mutate the OG array
const numbers = [3, 2, 4, 1, 5];


let res = numbers.toReversed()
console.log(res) //[ 5, 1, 4, 2, 3 ]
console.log(res[0])  //5  
console.log(numbers[0]) //3

it didnt mutate the original source array



Sort()

The default sort() method converts the element types into strings
The default sorting order is ascending.
mutates the OG arr
arr.sort((a, b) => {
    return negative → a comes before b
    return positive → b comes before a
    return 0 → keep their relative order
    a < b  → negative
    a > b  → positive
    a = b  → 0

})



let arr = [ 'Cathrine' ,'tom', 'Zain', 'Bob', 'aex', ]

console.log(arr.sort()) //[ 'Alex', 'Bob', 'Cathrine', 'Tom', 'Zain' ]

let res = arr.sort((a,b)=>  a.localeCompare(b)  )
console.log(res) //[ 'aex', 'Bob', 'Cathrine', 'tom', 'Zain' ]


const words = ["dog", "apple", "cat", "Banana"];

words.sort((a, b) => a.localeCompare(b));

console.log(words) // ["apple", "Banana", "cat", "dog"]

words.sort((a,b)=> b.localeCompare(a) )
console.log(words) //[ 'dog', 'cat', 'Banana', 'apple' ]
ascending (a, b) => a.localeCompare(b)
descending (a, b) => b.localeCompare(a)




if you wanna sort as descending, use comparator fn

if we use simple sort then it sorts from Uppercase and only lowercase
But .sort() uses UTF-16 code-unit ordering, which can produce results 
that aren't what you intuitively expect for different cases, accents, or locales.

let arr = [ 'cathrine' ,'Tom', 'Zain', 'Bob', 'alex', ]
console.log(arr.sort()) // [ 'Bob', 'Tom', 'Zain', 'alex', 'cathrine' ]
For Alphabets, first it'll sort in Caps and then smallCas
if we want intutive results for alphabets use a.localeCompare(b)



let brr = [78,95,6,5,4,50,56,98,10]
console.log( brr.sort())





const words = ["mango", "carot", "cat", "APPLE", "banana"];

words.sort((a, b) => console.log(a,b) ) //mango carot 
why this weird order
carot mango
cat carot
APPLE carot
APPLE cat
banana cat
banana APPLE


const word = ["mango", 'apple','Banana', "carot", "Cat", "APPLE", "banana"]

console.log(   word.sort((a,b)=>  a.localeCompare(b) )  )
['apple', 'APPLE', 'banana', 'Banana', 'carot', 'Cat', 'mango']


Negative → a first. 
Positive → b first.
 Zero → same/equal.
You can think of it as "dictionary ordering rules."
Simple example
In English, we normally have:
a < b < c < d < ... < z
"a".localeCompare("b") means roughly: Using the applicable 
language's sorting rules, compare a and b.

Numbers numbers.sort((a, b) => a - b);

Strings words.sort((a, b) => a.localeCompare(b));


if we wanna handle string as nums
   const artists = [
        "John White Abbott",
        "Leonardo da Vinci",
        "Charles Aubry",
        "Anna Atkins",
        "Barent Avercamp",
    ];

let res = artists.sort((a,b)=>{
    return a === b ? 0 : a > b ? -1 : 1
})
console.log(res)
[
  'Leonardo da Vinci',
  'John White Abbott',
  'Charles Aubry',
  'Barent Avercamp',
  'Anna Atkins'
]

    let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

this'll return only as 1 2 3 4 as big nums also,
so here, 10 1000 12 2 21 23 3 30 
    console.log(ages.sort()) //[ 10, 1000, 12,  2, 21,   23,  3, 30]
JS doesnt compare the numeric value, it converts as a string then compares

we should do this computation always
console.log(
ages.sort((a,b)=>{
    return a === b ? 0 : a < b ? -1 : 1
})) [  2,  3, 10,   12, 21, 23, 30, 1000]




toSorted()
it doesnt mutate the OG array
it didnt mutate the original source array
    let ages = [2, 1000, 10, 3, 23, 12, 30, 21];


let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

let res = ages.sort((a,b)=>{
return a === b ? 0 : a < b ? -1: 1   })

console.log(res) // [   2,  3, 10,12, 21, 23, 30, 1000 ]
console.log(res[1]) //3 
console.log(ages[1]) //3
// it mutated array


let res = ages.toSorted((a,b)=>{
    return a === b ? 0: a < b ? -1 : 1  })
console.log(res)  // [   2,  3, 10,12, 21, 23, 30, 1000 ]

console.log(res[1])  //3
console.log(ages[1]) //1000





splice()

splice(start, deleteCount, item1, item2, itemN)
Returns a new Array


Start - from where you wanna start changing the array from the index
DelCount - from the starting position , if  we give any integer no.
 we delete the that many following elems


const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2);

console.log(result) //[2,3], it gives a deleted ones 
console.log(arr) // [1,4]

const arr = [1, 2, 3, 4]
console.log(arr) //[1, 2, 3, 4]

arr.splice(4,0,5,6,7,8,9)
console.log(arr) //[  1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.splice(2,2,55 )
console.log(arr) // [1, 2, 55, 5,  6, 7,  8, 9]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");
myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");
myFish is ["angel", "clown", "mandarin", "sturgeon"]

const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

myFish is ["angel", "clown", "mandarin", "sturgeon"]

Remove 0 (zero) elements at last index, and insert "sturgeon"
const myFish = ["angel", "clown", "mandarin"];

myFish.splice(myFish.length ,0, 'sturgeon')
console.log(myFish) //[ 'angel', 'clown', 'mandarin', 'sturgeon' ]

myFish.splice(0,0,'apple', 'blue', 'berries')
console.log(myFish) //[ 'apple', 'blue', 'berries', 'angel', 'clown', 'mandarin' ]
 
let names = ['tom', 'alex', 'bob' ]
names.splice(1,0,'Jack')
console.log(names) //[ 'tom', 'Jack', 'alex', 'bob' ]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice()
console.log(myFish) //[ 'angel', 'clown', 'mandarin', 'sturgeon' ]


The 3 patterns I'd memorize for interviews
 REMOVE
arr.splice(index, count);

 INSERT
arr.splice(index, 0, value);

REPLACE
arr.splice(index, count, value);

And the master formula:
arr.splice(start, deleteCount, ...itemsToInsert);


toSpliced()


const arr = ["one", "two", "three", "four", "five", "six"];
arr.splice(3,2,14,54)
console.log(arr) //[ 'one', 'two', 'three', 14, 54, 'six' ]
console.log(arr[3]) //14 --> mutated the OG array

let res = arr.toSpliced(4,2,4,65,6,54)
console.log(res)  //[ 'one', 'two', 'three', 'four', 4, 65, 6, 54 ]
console.log(res[4]) //4
console.log(arr[4])  // five , didnt mutate the Array





with()
with takes 2 values, 1st index where we wanna change it,
can take both positive and negative value
2nd value, with what we wanna change

let nums = [1,2,3,4,5,6]
now if i have to change 2nd index 3 as 6 , bring output like [123456]
the normal way is access index[2] = 6 assign value to it, simple
nums[3] = 6
console.log(nums)  //[ 1, 2, 3, 6, 5, 6 ]
but this way mutates the original array, also cant use negative value
this is where with will be useful

let res = nums.with(2,6)
console.log(nums) //[ 1, 2, 3, 4, 5, 6 ] 
console.log(res) //[ 1, 2, 6, 4, 5, 6 ]


let nums = [1,2,3,4,5,6]

let res = nums.with(-2,6)
console.log(res) //[ 1, 2, 3, 4, 6, 6 ]


Data is your source of truth, you may not want to change the data directly,
we can use immutability as a great tool as a mechanism to ensure that you can change something , 
before make a copy of it and then change
we have better predictability in terms of debugging








At()
takes an integar at(3)
allows for positive and negative integers
const arr = ["one", "two", "three", "four", "five", "six"];
console.log( arr.at(0) ) //one
console.log( arr.at(-1) ) //six
console.log( arr.at(5) ) //six
console.log( arr.at(9) ) // undefined


copyWithin()
takes target, start,end
target is an index at which copyWithin starts taking the index
it basically copy the part of an arr to another location in the same arr
end is optional

so if we give  copyWithin(target, start)

target ok, it copies at there, start index refers from that 
index to till the end of the array, it copies and pastes at target,
it never ever override the length of an array, so we're safely assume the answer

const array = ["a", "b", "c", "d", "e"];
console.log(array.copyWithin(1,3)) // a d e d e


In copyWithin(target, start, end)

const array = ["a", "b", "c", "d", "e","f","g"];

console.log(array.copyWithin(2,4,6))  // [a b e f e f g  ]

as usual end excludes the last , it never ever exceeds the length of an array
the copying is how much we copy in index, that much gets replaced

const arr = [1,2,3,4,5,6,7 ]

arr.copyWithin(0,3,6)

console.log(arr) // 4 5 6 4 5 6 7


flat()

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat( Infinity ) ) //[ 0, 1, 2, 3, 4, 5 ]
need to learn DSA way of flattening like recursion 


groupBy()


I wanna see, group te employees by engineering dept

  const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravi", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];

let grpbyDept = Object.groupBy(employees,( {dept} )=> dept )

console.log(grpbyDept)
this is the syntax 
Object.groupBy(employees,( {dept} )=> dept )
write Objct.groypBy(array here, ({ objkey here }) )
for which objkey we can group it


{
  Engineering: [
    { name: 'Bob', dept: 'Engineering', salary: 5000 },
    { name: 'Ravi', dept: 'Engineering', salary: 7000 },
    { name: 'John', dept: 'Engineering', salary: 1000 }
  ],
  HR: [ { name: 'Alex', dept: 'HR', salary: 3000 } ],
  Sales: [ { name: 'Tom', dept: 'Sales', salary: 6000 } ]
}




  const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravi", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];

    let grpbySal = Object.groupBy(employees, ({ salary }) => salary > 3000 ? 'above 3000' : 'below 3000' )

console.log(grpbySal)

{
  'above 3000': [
    { name: 'Bob', dept: 'Engineering', salary: 5000 },
    { name: 'Ravi', dept: 'Engineering', salary: 7000 },
    { name: 'Tom', dept: 'Sales', salary: 6000 }
  ],
  'below 3000': [
    { name: 'Alex', dept: 'HR', salary: 3000 },
    { name: 'John', dept: 'Engineering', salary: 1000 }
  ]
}

console.log(grpbySal["above 3000"])
[
  { name: 'Bob', dept: 'Engineering', salary: 5000 },
  { name: 'Ravi', dept: 'Engineering', salary: 7000 },
  { name: 'Tom', dept: 'Sales', salary: 6000 }
]


 ** Static Array Methods in Javascript **

Array like
like HTML collections comes in when we do
document.getElementByTagsName('li'), it returns an array of li tags
but it isnt not an array, its array like it is an Object


function names() {
  console.log(arguments);                   //[Arguments] { '0': 'tokyo', '1': 'delhi', '2': 'australia' }
console.log([...arguments]);               // put it in a rest poerator to turn it as an array

let collectionArr = Array.from(arguments)     
    console.log(collectionArr)
  }

names('tokyo', 'delhi', 'australia')

Array.from() takes an arraylike items and turn it into an Array
it takes 3 args, 1st array, 2nd mapFn-CB 3rd thisArg(hadnt exploted 2rd args)
let res = Array.from([1,2,3], (x)=> x * x )
console.log(res) //[ 1, 4, 9 ]

Array.fromAsync()

this also creates a new array, here you get a 
Promise as a return and handle the promise to get the array
it works with async iterable objects
Array.fromAsync() is useful when you have an async iterable or 
an array-like/iterable containing Promises, 
and you want to collect the resolved values into a normal array.

const promises = [
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
];

const result = await Array.fromAsync(promises);
Without Array.fromAsync(), you'd commonly use:

const result = await Promise.all(promises);
console.log(result); // [10,20,30]

Array.from() converts synchronous data into an array; 
Array.fromAsync() converts asynchronous data into an array.

isArray()
checks whether the given value is arrayh or not, retruns boolean
console.log(Array.isArray([1, 3, 5])); //true

console.log(Array.isArray("[]")) // false

console.log(Array.isArray(new Array(5))) //true

console.log(Array.isArray(new Int16Array([15, 33])))  // false

console.log(Array.isArray( Array.prototype )) // true


Array.of()
we can pass any no of elems it creates an array
let arr = Array(5) //Creates 5 empty spaces 
let brr = Array.of(5) // creates an array passes this value, simple,wont create 
console.log(arr) // [empty × 5]
console.log(brr) //[ 5 ]










*/


 



























