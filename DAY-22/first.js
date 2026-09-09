
// DAY -22 JS Callbacks with Asynchronous Notes

/*


console.log(1);

setTimeout(() => {
   console.log(2);
    
}, 0);

console.log(3);


Call back is a great mechanism to handle the result of an asynchronous operation


function sayHi(name, cb) {
    
    console.log('Hello', name, 'going for an api call')
setTimeout(() => {
    cb(name) 
}, 2000);

}

function sayBye(naam) {
    console.log( 'Bye Bye' ,naam);
    
}

sayHi('Rohith', sayBye)

CAll back hell also known as Callback pyramid, where function is keep calling one another function 


*/