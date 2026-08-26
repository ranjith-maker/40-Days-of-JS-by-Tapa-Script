

// DAY -14 Error tasks

/**
1. What will be the output of the following code?
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
ReferenceError
SyntaxError
TypeError
 Option A --REference Error

 2. Write a function processPayment(amount) that checks
  if the amount is positive and not exceeding balance. 
 If any condition fails, throw appropriate errors


function processPayment(amount){
  
try {
    let balance = 1000

if(amount < 0){
    throw new Error('Amount should be positive')
}else if(amount > balance){
    throw new Error('Amount should not exceed the balance')
}else{
    console.log('Amount is', amount);
    
}
} catch (error) {
    console.error('Invalidate Error', error.message)
}}

processPayment(10000000)




 3. Implement a custom error handling system for an 
 e-commerce website that categorizes errors as
UserError
PaymentError
ServerError
EmailError



function CustomError(name,message) {
    this.name = name
    this.message = message
}

function Ecom(formData) {

    try {
            if(!formData.name.trim()){
        throw new CustomError('User Error: ', 'User name is invalid')
    } else if(!formData.email.includes('@')){
        throw new CustomError('Email error: ', 'Email is invalid')
    }else if(formData.pay  < 100 ){
        throw new CustomError('Payment error: ', 'Pay must higher than 100' )
    }else if(!formData.success){
        throw new CustomError('Server Error: ', 'Servor is down, please try again later' )
    }else{
        console.log(formData);
        
    }


    } catch (error) {
      console.error(error.name, error.message)        
    }

}


Ecom({ name : ' xfgh' , email : 'd@rh', pay : 1000, success :  true })






4. Simulate an API call function fetchData(url). 
If the URL does not start with "https", throw an "Invalid URL" error.
 Handle it using try...catch


async function fetchData(url) {
    
try {
    if(!url.startsWith('https') ){
    throw new Error('URL must start with https')
}
} catch (error) {
  console.error('Invalid Error', error.message)   
}
}

fetchData('http:')


5. Implement a custom error type ValidationError using constructor functions to 
handle form validation errors
Example:

const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number



function CustomError(message){
    this.name = 'Validation Error:',
    this.message = message

}

function checkUser(data) {
    
try {
    if(!data.name.trim()){
        throw new CustomError('Username cannot be empty')
    } else if( data.age < 0 || isNaN(data.age)  ){
        throw new CustomError('Age must be a positive number')
    }

} catch (error) {
    console.error(error.name, error.message)
}

}


const userInput = { name: 'dfg', age: -2}
checkUser(userInput)




6. Write a function readFile(filePath) that simulates reading a file. 
If the file does not exist (simulate with a condition), throw a "File not found" error.
 Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
Please note, you do not have to implement the actual IO operation here. 
Just use the console.log to simulate them.



function readFile(filePath) {
    let resourceOpened = false;

    try {
        console.log("Opening file:", filePath);
        resourceOpened = true;

   
        if (filePath !== "data.txt") {
            throw new Error("File not found");
        }

        console.log("Reading file:", filePath);
        console.log("File read successfully");

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        if (resourceOpened) {
            console.log("Closing file and releasing IO resources");
        }
    }
}

readFile("data.txt");
readFile("missing.txt");


7. Write a function parseJson(str) that takes a JSON string 
and tries to parse it using JSON.parse(). 
If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str){

try {

return JSON.parse(str)

} catch (error) {
 console.error('Invalid JSON')    
}}



console.log( parseJson('{"name" : "roger}') )





8. What is the purpose of throw in JavaScript?
It catches an error
It stops the execution of a program
It creates a new error manually
It prints an error message

Option C, It creates a new error manually

9. What does the finally block do in a try...catch statement?
Runs only if an error occurs
Runs only if no error occurs
Runs regardless of whether an error occurs or not
Stops the execution of the script

Option C ,  Runs regardless of whether an error occurs or not

10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
 */


// | Keyword / Concept | Usage                                                                      | Example                                         |
// | ----------------- | -------------------------------------------------------------------------- | ----------------------------------------------- |
// | **try**           | Contains code that may cause an error.                                     | `try { JSON.parse(str); }`                      |
// | **catch**         | Handles an error that occurs inside the `try` block.                       | `catch (error) { console.log(error.message); }` |
// | **throw**         | Manually creates and sends an error.                                       | `throw new Error("Invalid input");`             |
// | **rethrow**       | Passes a caught error to another part of the program by throwing it again. | `catch (error) { throw error; }`                |
// | **Error object**  | Contains information about an error, such as its message and name.         | `error.message` / `error.name`                  |

