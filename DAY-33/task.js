

// DAY -33 JS SET MAP Weakmap Tasks

/**
 * 1. Create a Map of Student IDs and Names
Add at least 5 students.
Retrieve a name using a student ID.
Delete one entry and print the Map.


const stuMap = new Map()

stuMap.set('id : 1' , 'Rohith' )
stuMap.set('id : 2' , 'Mohith' )
stuMap.set('id : 3' , 'Rohan' )
stuMap.set('id : 4' , 'Mohan' )
stuMap.set('id : 5' , 'Soham' )

console.log(stuMap);

console.log(stuMap.get('id : 5'))

stuMap.delete('id : 2')

console.log(stuMap);


2. Create a Set of Programming Languages
Add duplicate languages to test uniqueness.
Iterate and print all unique entries.
let arr = ['js', 'css', 'js', 'reactjs', 'java']

let lang = new Set(arr)

console.log(lang);

for(let prog of arr){
    console.log(prog)
}



3. Compare Object vs Map for Key-Value Storage
Store the same data in both.
Compare insertion order and key types (e.g., object keys).
let person = {
    name : 'Rohith',
    city :'Delhi',
    age : 55,
}

let map = new Map([
    ['name' ,'Rohith'],
    ['age' ,55],
    ['city' ,'Delhi'],
])

console.log(Object.keys(person) )

console.log(map.keys())




4. Build a Contact List Using Map
Use phone numbers as keys and names as values.
Add, update, delete contacts.
Search for a contact by number.
let list = new Map([
    ['12', 'Rohith'],
    ['13', 'Mohith'],
    ['14', 'Sohith'],
    ['15', 'Lohith'],
    ['16', 'Kohith'],

])
console.log(list.set('17', 'Prohith' ));
console.log(list.get('17'));
console.log(list.set('15', 'Updahith' ));
console.log(list.get('15'));

list.delete('13')
console.log( list)


5. Remove Duplicates from Array Using Set
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
Convert to a Set and back to an array with only unique values.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

let set = new Set(fruits)

console.log([...set]);



6. Track User Logins with Set
Add user IDs when users log in.
Remove them on logout.
Check if a specific user is currently logged in.


const obj = {

 loggedinUser : new Set(),

 login : function(userId){
   console.log(`${userId}th is loggedin`)
   this.loggedinUser.add(userId)   
 },

 logout : function(userId){
    console.log(`${userId}th is logged out`)
    this.loggedinUser.delete(userId)
 },
 
 isloggedIn : function( userId ){
   let info = this.loggedinUser.has(userId)
   if(info){
    console.log(`${userId}th user is logged in `)
   }else{
    console.log(`${userId}th user is logged out`)
   }
 }

}


obj.loggedinUser.add(10)
obj.loggedinUser.add(20)
obj.loggedinUser.add(30)

console.log(obj.isloggedIn(20))

obj.login(10)
obj.logout(20)


7. Create a Map of Book Titles and Authors
Add at least 5 entries.
Update an author.
Count the number of books.

let lib = new Map()

lib.set('Rich dad, Poor dad' , 'Robert K')
lib.set('Famous Five ' , 'Enid blyton'  )
lib.set('HP', 'JK Rowling' )
lib.set( 'You can win' , ' Shiv Khera' )
lib.set( 'Atomic Habits', 'James Clear' )


console.log(lib)

lib.set('HP', 'JKR')

console.log(lib)

console.log('book is',lib.size )


8. Associate Metadata with DOM Elements Using WeakMap
Create fake DOM elements (objects).
Store related metadata in a WeakMap.
Demonstrate benefits for garbage collection.


let button = {}
let input = {}

let wmap = new WeakMap( )

wmap.set(button,{
    type : 'button',
    text : 'login'
}  )

wmap.set(input ,{
    type: 'text',
    placeholder: 'Enter User name'
})


console.log(wmap)

button = null
console.log(wmap.has(button))

//Map has ref

let button = {}

const map  = new Map()

map.set(button, 'type : submit' )

console.log(map)

button = null

console.log(button);

console.log(map);


9. Track Instances of a Class with WeakSet
Define a Session class.
Add each instance to a WeakSet when created.
Discuss how it avoids memory leaks.


class Session {
    constructor(user) {
        this.user = user;
        activeSessions.add(this);
    }
}

const activeSessions = new WeakSet();

let session1 = new Session("Rohith");
let session2 = new Session("Rahul");

console.log(activeSessions.has(session1)); // true
console.log(activeSessions.has(session2)); // true
session1 = null;
console.log(activeSessions.has(session1)); // false


10. Build a Shopping Cart Using Map
Product IDs as keys and quantity as values.
Add, remove, and update quantities.
Calculate total items in the cart.

let cart = new Map()

cart.set('id1', 2 )
cart.set('id2', 4)
cart.set('id3', 1)

cart.delete('id2')

cart.set('id3', 3)

let sum = 0
let total = cart.values()
console.log(typeof total)

for(let num of total){
    sum += num
}
console.log(sum) //5


11. Anagram Checker with Set
Write a function that checks if two strings are anagrams.
Use Sets to compare character presence.

function anag(str1, str2) {
    
let set = new Set()
for(let num of str1){
    if(set[num]){
        set[num] += 1 
    }else{
        set[num] = 1
    }   
}

for(let key of str2){
    if(!set[key]){
        return false
    }
    set[key]--
}
return true
}


let res = anag('anagram', 'nagaramlknk')
console.log(res)



12. First Non-Repeating Character with Map
Count character frequencies in a string using a Map.
Return the first character with count 1.
function firstNonRepeating(str) {
    let map = new Map()

    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for (let char of str) {
        if (map.get(char) === 1) {
            return char
        }
    }

    return null
}

console.log(firstNonRepeating('aabcdcde')) // b


13. Measure Performance: Object vs Map
Insert 100,000 key-value pairs into both.
Use console.time() to benchmark speed.
const SIZE = 100000

// Object
console.time('Object insert')

let obj = {}

for (let i = 0; i < SIZE; i++) {
    obj['key' + i] = i
}

console.timeEnd('Object insert') //Object insert: 110.60400390625 ms


// Map
console.time('Map insert')

let map = new Map()

for (let i = 0; i < SIZE; i++) {
    map.set('key' + i, i)
}

console.timeEnd('Map insert')  //Map insert: 57.044921875 ms

14. Voting App with Set to Prevent Duplicate Votes
Track user IDs in a Set.
Allow each ID to vote only once.

let set = new Set()
 
function Vote(userId) {

if(set.has(userId) ){
    return 'User already voted'
}

if(!set.has(userId)){
    set.add(userId)
    return "User Vote recorded successfully!";
}
}

console.log(Vote(101));
console.log(Vote(102));
console.log(Vote(101));
console.log(Vote(104));



15. Employee Registry Using Object Keys in Map
Use employee objects as keys.
Add and retrieve job-related info.
Show that Object keys don't work similarly in plain objects.



let emp = {
    name: 'Rohith',
    age: 12,
    city: 'Delhi'
};

let emp2 = {
    name: 'Rahul',
    age: 25,
    city: 'Mumbai'
};


let map = new Map();

map.set(emp, {
    id: 'emp1',
    job: 'Developer',
    salary: 50000
});

map.set(emp2, {
    id: 'emp2',
    job: 'Designer',
    salary: 45000
});

console.log(map.get(emp));
console.log(map.get(emp).job);

console.log(emp.age);


console.log(map.has(emp)); 


let obj = {};

obj[emp] = 'Employee 1';
obj[emp2] = 'Employee 2';

// obj["[object Object]"] = "Employee 1";
// obj["[object Object]"] = "Employee 2";
// The second line overwrites the first.

console.log(obj.emp);
console.log(obj.emp2);

console.log(Object.keys(obj));


 */


















