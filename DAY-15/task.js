

// DAY -15 Array tasks



/**
 *  T-001: Create an array of 5 elements using the Array Constructor.

let arr = new Array(5).fill(0)
 
 T-002: Create an array of 3 empty slots.
let arr = new Array(3).fill('')

 T-003: Create an array of 6 elements using the Array literals 
 and access the fourth element in the array using its length property.

 let arr = [10,20,30,40,50,60,]
console.log(arr[arr.length - 3] )
last means len -1, it gets reduced -- -one by one 

 T-004: Use the for loop on the above array to print elements in the odd index.
 let arr =  [10,20,30,40,50,60,70]

for(let i = 1; i< arr.length; i += 2){
console.log(arr[i])
    }

 T-005: Add one element at the front and the end of an array.
 let arr = [10,20,30]
arr.unshift(5)
arr.push(35)
console.log(arr)

 T-006: Remove an element from the front and the end of an array.
 
 let arr = [10,20,30]
arr.shift()
arr.pop()
console.log(arr)


 T-007: Create an array containing the name of your favourite foods(10 foods).
  Destructure the 6th food element from the array using destructuring.
 let foods = [
    "Pizza", "Biryani", "Burger","Dosa", "Pasta","Fried Rice","Noodles",
     "Paneer Tikka","Samosa", "Ice Cream"
];

let [ ,,,,,six,] = foods
console.log(six);

 T-008: Take out the last 8 food items from the above array using
  the Array destructuring. Hint: rest parameter.
 let [one, two , ...rest] = foods

console.log(rest)

  T-009: Clone an Array(Shallow cloning)
  let foodCopy = [...foods]
  T-010: Empty an array using its length property
foods.length = 0

  T-011: Create an array of 10 elements(number 1 to 10). 
 Resize the array to length 6 once you find the number 5 in that array.
  Hint: Use for-loop.
function len(arr) {
for(let i =0;i <arr.length; i++){
    if(arr[i] === 5 ){
        arr.length = 6
        return arr.length
}}    
}

let arr = [1,2,3,4,5,6,7,8,9,10]
let res = len(arr)
console.log(res) //6

 T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
let arr = [1,2,3,4,5,6,7,8,9,10]

arr.splice(0, arr.length)

console.log(arr)

 T-013: Create an Array of 10 elements. You can empty the array in multiple ways: 
 using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. 
 Which among these methods are most efficient and why?

 arr.length = 0 is best , so that we dont need to perform task repeatedly
 
 T-014: What happens when you concatenate two empty arrays?
Empty string ''
 
T-015: How can you check if a value is partially matching with any of the elements of an Array?


let arr = [12, 23, 36, 45]

console.log(arr.some(item => String(item).includes("6")));
true

let arr = ["apple", "banana", "mango", "pine"];
console.log(arr.some((item)=>  item.includes('app'))) // true 

Includes checks exact match , where as some + includes checks partial match
in numbers it is

let num = [12, 35, 878, 69]
console.log(num.some((nos)=> String(nos).includes('7')  )  ) //true


T-016: What is the difference between the slice() and splice() methods?

slice()  copies/extracts
splice()  removes/adds/replaces,
changes the original array where as slice wont do chnage the og arr



T-017: Create an Array of alphanumeric strings. 
Sort the elements in both ascending and descending orders.
 You must be doing this in an immutable way such that the source array never 
 gets modified.

let anim =
["Lion1", "Tiger2", "Elephant3", "Giraffe4", "Zebra5", "Panda6", "Koala7", "Wolf8", "Fox9", "Bear10"]

let asc = anim.toSorted((a,b)=>{
  return a === b ? 0 : a < b ? -1 : 1
})
// console.log(asc)

let des = anim.toSorted((a,b)=>{
  return a ===b ? 0 : a < b ? 1 : -1
})
console.log(des)


T-018: Can you give examples of sparse and dense arrays?

let sparr = [1,2,,,3,4,,5,,,6]
console.log(sparr)
console.log(sparr.length) //11 but real values are 6 only, it doesnt have value at every index
let denarr = [1,2,3,4,6,7,9,8]
console.log(denarr) //A dense array has a value at every index—there are no holes.


T-019: Give a practical usages of the .fill() method
 we can use it ticket booking like BMS 
let seating = new Array(10).fill('Available')
seating[2,3]= 'booked' 
console.log(seating)

let weaklySales = new Array(4).fill(0)
weaklySales[1] = 2
weaklySales[2] = 4
weaklySales[3] = 10 
weaklySales[4] = 6
console.log(weaklySales)  //[ 0, 2, 4, 10, 6 ]




T-020: How to convert an array to a string?
if we run join method on array we can turn array to string
let arr = [1,2,3,4,5]

console.log( arr.join(' ') )  //1 2 3 4 5
console.log(typeof arr.join(' ') )  //string
console.log(arr.toString())



 Consider these input arrays for question T-21 to T-48

employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
 T-021: Can you filter employees who work in the "Engineering" department?

let res = employees.filter((eng)=> eng.departmentId === 2 )
console.log(res)


 T-022: Create a new array that combines employee names and 
 department names in the format: "Alice (HR)".

let EmpDept = employees.map((emp)=> {

  const dept = departments.find(
    (dept) => dept.id === emp.departmentId 
  )
return `${emp.name} ${dept.name} `
} )

console.log(EmpDept)


 T-023: Find the highest salary among employees.
let highestSalary = employees.reduce((acc,curr)=>{
return  curr.salary > acc.salary ? curr : acc  
})
console.log(highestSalary)

 T-024: Check if there is at least one employee in the "Sales" department.
console.log(employees.some((emp)=> emp.departmentId === 4 ))

 T-025: Write a function to filter employees earning more than 6000.

console.log( employees.filter((val)=> val.salary > 6000 ))


 T-026: Create an array of employee names only.

let res = employees.map((emp)=> emp.name )
console.log(res)

 T-027: Calculate the total salary of all employees using
let sal = employees.reduce((acc,curr)=> acc + curr.salary ,0 )
console.log(sal)

 T-028: Is there any employee earning less than 5000?
console.log(employees.some((emp)=>  emp.salary < 5000))

 T-029: Find the first employee who earns exactly 5100.
 console.log( employees.find((emp)=> emp.salary === 5100 )  )

 T-030: Find the last employee in the "HR" department.
 console.log(employees.findLast((emp)=> emp.departmentId === 1 )  )


 T-031: Find the first employee in the "Marketing" department.
 console.log( employees.find((emp)=> emp.departmentId === 3 ) );

 T-032: Check if all employees earn more than 4000.
 console.log( employees.every((emp)=>emp.salary > 4000  ) )

 T-033: Find the first employee in the "Sales" and "HR" department.
console.log( employees.find((emp)=> emp.departmentId === 1 )  );
console.log( employees.find((emp)=> emp.departmentId === 4  )  );

 T-034: Verify if all employees belong to a department 
 listed in the departments array.
let res = employees.every((emp)=> {
 return departments.some((dept)=>  dept.id === emp.departmentId  )
})
console.log(res)
 T-035: Log each employee's name and department name to the console.
let res = employees.map((emp)=>{

let depat = departments.find((dept)=>{
  return emp.departmentId === dept.id 
})
return `${emp.name} is from ${depat.name} `

})
console.log(res)


 T-036: Extract all employee names into a single array.
let res = employees.map((emp)=> emp.name )
console.log(res)

 T-037: Increment each employee's salary by 10%
let res = employees.map((emp)=>{
let total = emp.salary + emp.salary * 10 / 100
return {
  name : emp.name,
  nowSalary : emp.salary,
  BonusSalary : total
}

})
console.log(res)


 T-038: Assume each employee can have multiple skills. 
 Create an array of employee skills and flatten them. 
 Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const skilledEmployee = [
  { id: 1, name: "Alice", skills: ["Excel", "Management"] },
  { id: 2, name: "Bob", skills: ["JavaScript", "React"] },
  { id: 3, name: "Charlie", skills: ["SEO", "Content Writing"] },
];

let res = skilledEmployee.flatMap((emp) => {
  return emp.skills.map((skill) => {
    return {
      name: emp.name,
      skill: skill
    };
  });
});

console.log(res)



 T-039: Find the total salary of all employees working in
  the "Engineering" department.
let res = employees.reduce((acc,curr)=>{

  if(curr.departmentId === 2 ){
  acc += curr.salary
}
return acc

},0)

console.log(res)

 T-040: Check if there is any department
  where all employees earn more than 5000.

let res = departments.map((dept)=>{

  let deptEmpl = employees.filter(
  (emp) => emp.departmentId === dept.id 
  )
return {
  above5000 : deptEmpl.every((emp)=> emp.salary > 5000 )  ,
  departmentName : dept.name
}

})
console.log(res)
 T-041: Assume each employee has a projects
  array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
   Find the total number of unique projects being handled across all employees.
const projects = [
  {
    id: 1,
    name: "Alice",
    projects: ["Project A", "Project B", "Project C"]
  },
  {
    id: 2,
    name: "Bob",
    projects: ["Project B", "Project E"]
  },
  {
    id: 3,
    name: "Charlie",
    projects: ["Project C", "Project G", "Project H"]
  },
  {
    id: 4,
    name: "David",
    projects: ["Project G"]
  },
  {
    id: 5,
    name: "Emma",
    projects: ["Project J", "Project K"]
  }
];


let res = new Set(
  projects.flatMap((emp)=> emp.projects )
).size
console.log(res)


 T-042: For each employee, find their department name 
 and return an array of employee names with their department names.
let res = employees.map((emp)=>{

let deptName = departments.find(
  (dept)=> dept.id === emp.departmentId 
)

return{
  name : emp.name,
  department_Name : deptName.name 
}

})

console.log(res)

 T-043: Get a list of names of employees earning more than 6000.
let res = employees
.filter((emp)=> emp.salary > 6000)
.map((emp)=> emp.name )

console.log(res)
 T-044: Write a for-of loop to print the names of all employees
  from the employees array.

 T-045: Using a for-of loop, print the names of employees earning more than 5000.
for(let key of employees){
  console.log(key.name)
  
}

 T-045: Using a for-of loop, print the names of employees earning more than 5000.

for(let key of employees){

if(key.salary > 5000){
  console.log(`${key.name} earns higher than 5000 `) 
}}

 T-046: Modify the for-of loop to destructure each employee object 
 and log their name and salary.

for(let key of employees.values() ){
console.log(key.name , 'is earning' , key.salary  );
}

 T-047: Write a for-of loop to match employees
  with their departments and print the results.
for(let key of employees.values()){

let dept = departments.find(
  (dep)=> dep.id === key.departmentId )
  console.log( key.name , dept.name )
  
}

 T-048: Use Array.prototype.entries() with a for-of loop to
  print the index and name of each employee.
for(let [key,value] of employees.entries()){
  console.log(key, value.name )
  
}
 T-049: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log( arrayLike[1] );

 T-050: Write a function that takes a variable number of
  arguments and converts the arguments object into a real array using Array.from.
function gets() {
  console.log(arguments)
  console.log( Array.from(arguments) )
}
gets(1,2,3,4,5)

 T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
const divs = document.querySelectorAll('div')
let arr = Array.from(divs)
console.log(divs)
console.log(arr)

 T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4]; 
let res = [...arr1, ...arr2]
console.log(res)

 T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
console.log( Array.from({length : 5},  (A)=> A  ) )


 T-054: Use Array.from to convert a string like "Hello" into an array of characters.
 console.log( Array.from('Hello') )

 T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
console.log( Object.groupBy(arr, (words)=> words[0] ) );



 T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

let count = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(count)


 T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].
let arr = [5, 2, 9, 1, 3, 6, 8]
let median = arr.sort((a,b)=> a - b )[Math.floor(arr.length / 2)]
console.log(median)
 T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
let arr = [['a', 1], ['b', 2], ['c', 3]]

let res = arr.reduce((obj, [key,value])=>{
  obj[key] = value
  return obj
},{})

console.log(res) //{ a: 1, b: 2, c: 3 }


 T-060: Flatten and convert all letters to uppercase 
 in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

let res = arr.flat()
.map((val)=> val.toUpperCase() )
console.log(res) //[ 'A', 'B', 'C', 'D' ]

 T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

 T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

 T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

 T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

 T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
 T-066: Find the longest word in this sentence using Array 
 and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
 T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
 * 
 */




const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
//departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

/**
 T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
let res = arr.reduce((acc, curr)=>{
  acc[curr] = (acc[curr] || 0 ) + 1 
return acc

},{})

 T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
let res =  arr.slice(0,arr.length-1)
console.log(res)

 T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
let res = arr.sort((a,b)=> a - b )
console.log(res)
 T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
let arr = [1, 2, 3, 4, 5]

let ras = arr.toReversed() // doesnt modifies OG arr
let res = arr.reverse()  // modifies OG arr

console.log(res)
console.log(ras)


 T-065: Group the follwing array elements based on age(Adult vs Non-Adult):


const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

let res = Object.groupBy(users, ({age})=> age >= 18 ? 'Adult' : 'Non Adult'  )

console.log(res)


 T-066: Find the longest word in this sentence using Array 
 and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
 let arr = '40 Days of JavaScript by tapaScript is a powerful initiative'

let res =  arr
.split(' ')
.reduce((long, word)=>{
return   word.length >= long.length ? word : long
},'')
console.log(res)

 T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
 let res = arr.filter((val)=> brr.includes(val))
console.log(res)
*/











