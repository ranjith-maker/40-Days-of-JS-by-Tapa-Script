
// DAY -14 Errors in JS

/**
 * 
 * Parsing Error
 *  Grammar error , without fixing those JS won't able to proceed with the script not
 *  able to interpret, those are parsing errors
 *    
 * Runtime error - core syntax looks great, there  might be value or a condition
 *  that produces certain error when your coode runs,
 this is what we need to handle well, if not, our might crash silently
 One of the main reason is, we need to give great UX to our users

 What is an Exception in JS ?
 Exceptions are runtime erors that disrupt the program execution
 ex - console.log(ab) , I havent defined abything as ab, 
 so i get ReferenceError x  is not defined 

 Type Error
 let oba = null
console.log(oba.name);
first.js:23 Uncaught TypeError: Cannot read properties of null (reading 'name')

 
Syntax Error
console.log('hello';
Uncaught SyntaxError: missing ) after argument list


Range Error

let arr = new Array(-1)
first.js:35 Uncaught RangeError: Invalid array length
when it is not creating an expected range , it throws range error


eval()
Dont use eval for evaluate an expression

How to handle this Errors with Try catch 
It gives an ability to manage or handle gracefuly without making a fuss , crashing an app

try {
    //logic code
} catch (err) {  // catch takes an error object we access with err.message like that
  // handle error  
}
if there is no error the entire catch block will be ignored
if there is an error, the execution of the try block will be suspended, and catch ewill  be continued to execute


try {
    console.log('Execution starts');
    Dom-next 
    console.log('Execution ends');
     
    
} catch (error) {
    console.log('this error catches it ', error);
    
}
Execution starts
first.js:61 this is error catches ReferenceError: Dom is not defined


try {
    console.log('Execution starts');
    console.log('Execution ends');
     dom
    
} catch (error) {
    console.error('this is error catches', error.message);
    
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
//     thid gives you the current call stack, it gives you the sequence of all the calls, that lead to this error 
//     it is immensely useful debugging purpose 

// ReferenceError
// dom is not defined
// ReferenceError: dom is not defined
   
// even if you dont have this error object catch (error) you might get it
    

}



function divNum(a , b){

try {
if(b === 0){
   let err = new Error('Division by zero is not allowed')
   throw err
    // throw new Error('You cant devide with zero')
}
const result = a / b
console.log('Result is', result);
} catch (error) {
    console.error('Got a Math Error', error.message)
}

}
divNum(10,0)

first.js:103 Got a Math Error Division by zero is not allowed
divNum	@	first.js:103
(anonymous)	@	first.js:107
this is the stack


let person = {
    name :'tapas',
    country:{
        city : 'Bangalore'
    }
}


function getPostal(user){

    try {

console.log(user.country.address.postalcode);
        
    } catch (error) {
        console.error('Choose wisely', error);
        
    }

}

getPostal(person)

we get undefined why because in this obj, we have till country not address 
thats why country has no address thats why undefined as country 
should be there to define but if we try to access another property 
it is try to access postalcode 
from country itself
first.js:138 Choose wisely TypeError: Cannot read properties of undefined
 (reading 'postalcode') at getPostal (first.js




function CheckAge(age){

try {
    if(isNaN(age)){
    throw new Error(`Age must be an number your input is ${age}` )
}
console.log('Age is', age);

} catch (error) {
    console.error('Invalidation Error: ', error.message)    
}}


CheckAge('twenty')
// first.js:161 Invalidation Error:  Age must be an number your input is twenty


// Invalidation error is the error the user is seeing, if they anything ont invalid, 
// like email, not writing @ , like we're throwing our own error
//  from try as we do in backend

// what is Rethrow error 
function validateForm(formData) {
    
    try {
        if(!formData.name) throw new Error('Name is mandatory')
        if(!formData.email.includes('@')) throw new Error('Email is not valid')    
    } catch (error) {
        console.error('Invalid Error:', error.message)
        throw error
    }

}


try {
validateForm({ name : 'Raaj', email: 'raajGmail.com' })
    
} catch (error) {

    console.error('showing error', error.message)
}


//with Finally

try{
   //code that may throw error
}catch(error){
  //code to handle errors
}finally{
    //code that always runs
}








function customError(message){

    this.name = 'Validation Error',
    this.message = message

}



function validateAge(age) {
    
try {
    if(age <18){
    throw new customError('You are not allowed to vote')

}else{
    return 'You are allowed to vote'
}

} catch (error) {
 console.error('Errors', error.message)
    
}
}

validateAge(10)

//first.js:225 Errors You are not allowed to vote


*/


















