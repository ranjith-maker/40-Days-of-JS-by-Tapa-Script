


// DAY -33 JS SET MAP Weakmap Notes
/**
 * 
 we cant find the length of the object easily, 
 Array can contain duplicates
  Supporting an array that allows distinct elems can be difficult
 
 Map has a collection of Key-Value of pairs
  Map and Object diff is
  1) Map's key can be of any type but object key must be a string
 
  2) Map remembers the original order in which the elements were added to it
  so data can be retrieved in same order(it took it from array , a sequential order)
  
 In map based on key the size is being calculated
for ex - for this map now the size is for the below code 
 const map = new Map([
    ['name' ,'Rohith'],
    ['name' ,'Rohith'],
    ['name' ,'Rohith'],
])

in map and set both initialize as array in storing value look closely

console.log(map.size) //1
console.log(map) //Map(1) {'name' => 'Rohith'}


Add values to the map, means we need to set the key-value using 
map.set('key', 'value'  )
to get the value from the map
use  map.get('key')  console.log(map.get('city'));


const map = new Map()

map.set('name', 'Rohith' )
map.set('age', '22' )
map.set('city', 'delhi' )

console.log(map)

console.log(map.get('city'));


Map Keys

this is where obj vs map makes huge diff

const funMap = new Map()

let obj = {name : 'Rohith'  }



funMap.set(500, 'money')
funMap.set(true , 'yes am')
funMap.set([], '1' )
funMap.set(obj , '1st obj' )

console.log(funMap);


const onj = {}
onj[560] = 'my door no'
console.log(onj[560] === onj['560'] ) //true , it gives true because it is normal obj as it converts it to string                                                                                                                    

console.log( funMap.get(560) === funMap.get('560') ) //false as it treats diff, doesnt convert the key to any data type kept intact



console.log(funMap.has(500));

funMap.delete(500)

console.log(funMap);

funMap.clear()

console.log(funMap);




Map iterator

let ageMap = new Map([

    ['John' , 20],
    ['Alan' , 34],
    ['Bill', 10],
    ['Sam' , 9],
])

console.log(ageMap);
console.log(ageMap.keys());
console.log(ageMap.values());
console.log(ageMap.entries());


let ageKeys = ageMap.keys()

ageKeys.forEach((val)=>{
    console.log(val)
    
})


Map can take a foreach and for of loop

ageMap.forEach((value,key)=>{
console.log(`${key} is ${value} years old `);
})


for(let [key,value] of ageMap ){
console.log(`${key} is ${value} years old `)
}

Convert an Object into an Map, use new Map(Object.entries(city))

const city = {
    Rohith : 'Delhi',
    Tapas : 'Bangalore',
    James : 'Chennai'
}

// console.log(Object.entries(city))

const cityMap = new Map(Object.entries(city))

// console.log(cityMap);


//Convert Map into an object

let mapObj = Object.fromEntries(cityMap)

console.log(mapObj); // the order is changed as a-z but map has as it is original

//Convert Map into an array

let arrMap = Array.from(cityMap)

console.log(arrMap);

console.log([...arrMap]);

 Map vs Object when should you use them ?


Map has a both chars of arr, object
 *1) In the usage of data, when you want the key to be non string values and 
In obj also we can convert a keys to NUmber or Boolean we have to do it, in Map it available in ready-made 

2)When we want the data structure where eleemnt should be in order like an Array, in 
that case use Map , cant go for obj


3)Looking for a Flexibility
To see the length of the data,has,keys , with obj we need to rely on external lib.

4)When we need to parse the JSON, map cant be parsed 
on those cases use Obj

//SET 



Set is a collection o f Unique elements, cant have duplciate elems
Just like arr, elems can be of any data type , 
Just as the insertion order we can retrieve it back in the order like Array
set also has .size like .length for arr
let set = new Set()

// console.log(set);

const falSet = new Set(
    [ 'mango' ,  'apple' , 'banana']
)

console.log(falSet)

falSet.add('Lemon')

falSet.add('egg')
falSet.add('egg')  //no duplicate allows

console.log(falSet)

console.log( 'Do we have apple' , falSet.has('apple'))
falSet.delete('egg')
console.log(falSet);



SetIterator
Unlike Map Set doesnt not key value pairs , only one value
const doornos = new Set([100,200,300])

console.log(doornos.values());
console.log(doornos.keys());
console.log(doornos.entries()) //both key and value is same thing as there is no keyvalue concept here

The major diff in array and Set is, Array allows you to have duplicate values
now why we see difference in array and Set because  Array also take one elem not like keyvalues                                              

Set delete is much faster than arr's pop add than push 

How to convert Set into an Arr
console.log(doornos);

console.log([...doornos]);  //console.log(Array.from(doornos));

 
let dups = [10,10,20,20,30,50,60,60]

console.log(new Set(dups));  //Set(5) {10, 20, 30, 50, 60}

when we use Object with set


let person = {
    name  : 'Alex',
    age: 22
}

console.log( new Set(person)) // Object cant be iteratable
so how to add it
let pSet = new Set()

pSet.add(person)

console.log(pSet);  //size 1 that 1 is an object

person.age = 45

console.log(pSet); // now the age will show 45 why bcoz pset took person as its own , 
so making chnages can be visible in both pset and person

person = {}

pSet.add(person)
console.log(person);


* Union , Intersection , Difference , symettric Diff, Superset

const one  = new Set([1,2,3])
const two  = new Set([3,4,5])

Union Operation, unique values

after 2020
let res = one.union(two) 
console.log(res); //Set(5) {1, 2, 3, 4, 5}
 
before 2020
let res = new Set([...one, ...two])
console.log(res);  //Set(5) {1, 2, 3, 4, 5}



Intersection will only gives the same element in both set
in our case is 3
after 2020 
let res = one.intersection(two)
console.log(res) //Set(1) {3}

before 2020

let res = new Set([...one].filter((val)=> two.has(val))  )

console.log(res); //Set(1) {3}




Difference will only give us first Set elements, second set wont be coming in answer
after 2020
let res = one.difference(two)
console.log(res) //Set(2) {1, 2}
yet ans is only 1,2 why 3 isn't inside if only first set is answer 
because 3 is also inside second set thats why 3 didnt come in answer

before 2020
let res = new Set([...one].filter((val)=> !two.has(val) )  )
console.log(res) // Set(2) {1, 2}


symmetricDifference - removes duplicate value itself
 and gives only unique not that dups also

let res = one.symmetricDifference(two)
console.log(res); //Set(4) {1, 2, 4, 5}


Superset , means if b is inside A , means A has all elems that B has also some more elems

let nums = new Set([2,4,6,8,10,12,14,16,18,20])

let table = new Set([4,8,12,16,20])
//we can tell that nums is the Superset of table, table is a subset of nums
let res = nums
console.log(nums.isSupersetOf(table)) // true

for(let val of nums){
    if(table.has(val)){
        console.log(val)    
    }
}

Weak Map


let user = {name : 'Rohith'}
let allUser = [user]
let uMap = new Set([user, true])

user = null

console.log(user);
console.log(allUser[0]);
console.log(uMap);
since there is a reference  , it didnt do garbage collection

when we're using arr, maps, set, obj and having another ref inside it
that is where weakmap come into picture

the diff between map and weakMap is , 
weakmap key can only be an object , array, only KEY should be obj or arr Value can be of any type
 you cant have any other primitive values like num boolean string
Weakmap supports only 4 methods set get delete  has

let address = { country: 'India' }

let wmap = new WeakMap()
wmap.set(address , true)    //

console.log(wmap);

address = null

console.log(wmap);
 
before we saw  values even after it was null, but in Weak map case it says 
No properties ,in console, it got garbage collected


weakSet is also excatly same as weakmap

it should be only object


let onlineUser = new WeakSet()

let user1 = {name: 'Rohith'  }
let user2 = { name : 'Mohan' }

onlineUser.add(user1)
onlineUser.add(user2)

console.log(onlineUser.has(user1))  //true

user1 = null

console.log(onlineUser);  //shows only mohan


console.log(onlineUser.has(user1));  //false




"Map maintains a strong reference to its object keys, 
so even if I set my original reference to null, 
the object can remain in memory because the Map still references it. 
WeakMap doesn't prevent its object keys from being garbage-collected, 
so it's useful for temporary object-associated data and caches."




*/


//

/**
 * 
 * 
 * 
 */
function Dups(str) {
    const obj = {}
for(let key of str){
if(obj[key]){
    obj[key] += 1
}    else{
    obj[key] = 1
}}

let num = ''

for(let key of obj){
    if(obj[key] > 1){
        return key
    }
}

}

let res = Dups('banana')
console.log(res)