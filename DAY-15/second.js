/**
 * 
 Array Iterator Methods in JS


filter()
takes, elem, index, array

let seniorCitizen  = customers
.filter((cus)=> cus.age > 40 )
.map((cus)=> `${cus.f_name} ${cus.l_name} `)

console.log(seniorCitizen) //[ 'Jerry Tom ', 'Dev Currian ' ]

let bookBuyer = customers
.filter((cus)=> cus.purchased.includes('Book') )
.map((cus)=> `${cus.f_name} ${cus.l_name} ` )
console.log(bookBuyer) //[ 'Abby Thomas ', 'Dianna Cherry ', 'Dev Currian ' ]


let maleBuyer = customers
.filter((cus)=> cus.gender === 'M' )
.map((cus)=> cus.f_name + cus.l_name )
console.log(maleBuyer)   //[ 'AbbyThomas', 'JerryTom', 'DevCurrian' ]
 

let marriedBuyer = customers
.filter((cus)=> cus.married && cus.gender === 'M' )
.map((cus)=> cus.f_name + cus.l_name )

console.log(marriedBuyer)  //[ 'AbbyThomas', 'JerryTom', 'DevCurrian' ]

map()

Add new property to the objs as title Mrsmsis,and full name 
let fullName = customers.map((cus)=>{

let title = ''

if(cus.gender === 'M'){
    title = 'Mr.'
}else if(cus.gender === 'F' && cus.married ){
    title = 'Mrs.'
}else{
    title = 'Miss'
}

cus['full Name'] = `${title} ${cus.f_name} ${cus.l_name} `
cus.title = `${title}`

return cus

})

console.log(fullName);



reduce()
TO produce one conclusive single value
to get the average age of book buyers
let count = 0
let res = customers
.reduce((acc, curr)=>{

    if(curr.purchased.includes('Book')){
    count++
    acc += curr.age
    }
return acc
}, 0)
 
console.log(res) // 136
console.log( 'Average Age', Math.floor( res / count ))  //45


reduceRight()

It rns from right side
let arr = [100,40,15]
let res = arr.reduceRight((acc,curr)=> acc - curr ,0)
console.log(res) -155 




some()
it takes elem, index, array
if there is atleast 1 elem in the array as per the condition it reutrns true
let odd = [1,2,3,4,5,6,7,8,9]
console.log(odd.some((num)=> num === 10 )) // false, is any one elem is 10,NO 

console.log([1, undefined, 1].some((x) => x !== 1)); // true
[1, , 1].some(x => x !== 1) // false


1 !== 1 --> false
undefined !== 1 ---> true
as soon as it gets true, as soon one condition passes in those elems, it returns wont check otherwise
As soon as .some() gets true, it stops checking and returns true.
some checks for atleast 1 value to be true as per condition

console.log( customers.some((cus)=> cus.age < 10 )  ) //true


Every() --> All the elements has to be right as per the condition
 inside the array to return true, condition should meet all the elems in the array 
if any one doesnt meet the condition it returns false


let num = [1,2,3,4,5,6,7,,9,9]
console.log( num.every((num)=> num >= 1 )  ) //true


whether all the customers are married ?
console.log( customers.every((cus)=> cus.married )  ) //false


find()
"Which is the first element that satisfies this condition?"
and it returns a satisfied element itself
if not it returns undefined

console.log( customers.find((cus)=> cus.purchased.includes('Toys') )  )

//Find the young customer
console.log( customers.find((cus)=> cus.age > 5 && cus.age < 10 ))

console.log( customers.find((cus)=> cus.gender === 'Others' )  ) //undefined



findLast()

Find gives us the first matching elem
Findlast will give s the last matching elem, traverse form right to left

 Find the last the male customer in the store
console.log( customers.findLast((cus)=> cus.gender === 'M' )  )





findIndex()
it reurns an index if satisfied else -1
const arr  = [5, 12, 8, 130, 44];

console.log( arr.findIndex((num)=> num > 13 ) ) //3 , 
since it goes by 1by1 it returned me 130's index as 3 not 44 as 4 

console.log( arr.findIndex((num)=> num > 200 )  ) -1

console.log( customers.findIndex((cus)=> cus.age === 82 ) )  //3



findLastIndex()

it gives you the index of the elem , find the last occurence's index
from the right side of the array
we can also say last matching elem index will be returned

let num = [1,2,3,1,3,3,1,2,3,4,1,5,4,5,8,3]
console.log(  num.findLastIndex((no)=> no === 3 ) ) // 15


Array Method Chaining

total amount spent by married customers

let res = customers
.filter((cus)=> cus.married)
.reduce((acc,curr)=>  acc + curr.expense   ,0)

console.log(res) //2190

let res = customers.reduce((acc,curr)=> {
    if(curr.married){
    acc += curr.expense
    }
return acc
},0)


console.log(res) //2190


let customers = [
    {
        id: 1,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", 'lock', "Book"],
    },
    {
        id: 2,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: 3,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: 4,
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: 5,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
]
Flat Map Method
One level deepens the array result
let customers = [
  {
    name: "Abby",
    purchased: ["Book", "Toys"]
  },
  {
    name: "Jerry",
    purchased: ["Blade", "Book"]
  },
  {
    name: "Dianna",
    purchased: ["Bag", "Book", "Nail Polish"]
  }
];

console.log(customers.map((cus)=> cus.purchased )  )
[
  [ 'Book', 'Toys' ],
  [ 'Blade', 'Book' ],
  [ 'Bag', 'Book', 'Nail Polish' ]
]
console.log( customers.flatMap((cus)=>cus.purchased  )  );
[ 'Book', 'Toys', 'Blade', 'Book', 'Bag', 'Book', 'Nail Polish' ]

The useful intuition
When you see these words in a question:

"at least one" → some()
"all" / "every employee" → every()
"find the employee" → find()
"all employees matching..." → filter()
"transform every employee" → map()
"combine into one result" → reduce()
*/



































































































