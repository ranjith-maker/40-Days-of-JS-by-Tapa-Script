
// DAY - 11 Closures  notes

/**
 Closure is a fn that can remeber the variable from  its outer fucntion
even after the outer fn is executed

A closure allows a function to access a variable from its outer scope
even the execution of the outer funciton is OVER 



function outer() {
    let x = 10
  
    return function inner() {
        console.log(x);
        
    }
    inner()
}

const func = outer()
console.log(func);



if it is returning a function then I can definitely take the function adn store it in the variable and call when i want

const func = outer()
console.log(func);
as I stored the outer fn  inside a variable , I get whagt it returns since it is a func you can see whole inner fn as it being returned                                            
ƒ inner() {
        console.log(x);
        
    }
Closure Memorizes Outer values 

Real world ex- 
Data Encapulation

 */


/*


function createBalance(initialbalance) {
    
 let balance = initialbalance 


     function deposit(amount) {
        balance += amount
        console.log('Deposited', amount, 'current balance is', balance);

    }

     function withdraw(amount){
        if(amount > balance) {
            console.log('Insufficient balance');
        }else{
        balance -= amount
        console.log('withdraw this', amount,' now the balance is', balance);
        }

    }

    function currentBalance(){
        console.log('Your Current balance is', balance);
        
    }

    return {
        deposit, 
        withdraw,
        currentBalance
    }
      
}

let myAccount = createBalance(1000)

myAccount.deposit(500)
myAccount.withdraw(200)
myAccount.currentBalance()
console.log(myAccount); // see closure in console itself , deposit ---> Scopes --> Closure


balance belongs to createBalance(), 
but both deposit() and withdraw() can still access it even after createBalance() has finished.
And this is a common real-world use of closures: keeping a variable private. Outside code cannot directly do:
myAccount.balance because balance is not exposed.
 

how can i explain this code to an interview for closure concept , clearly cleanly, what am accessing whats not accessable by user and ewverything 
"This is an example of a closure. The createBalance function creates a private balance variable and returns an object containing two functions: deposit and withdraw.

The important point is that both deposit and withdraw form closures over the balance variable. 
Even after createBalance() finishes executing,
 these functions still have access to balance.

balance is not directly accessible from outside because it is declared using let inside createBalance. 
The user can only modify the balance through the deposit() and withdraw() methods that I return.
he can never ever directly influence the balance itself

Expensive operations , closure's very advantage is it'll remember the value of the  variable which is declared outer scope
what if that very variable holds large amt of data , that is when , since we have a reference to the varibale in closure , it wont be garbage collected
for ex- 

function drawBack(){
    let bigData = new Array(10000).fill('*')

    return function inner() {
        console.log(bigData[5]);
        
    }
}



const bigVar = drawBack()
bigVar() // it prints *, it means it has a ref to it ,ref to all 10000 array index's values

when we need a reference from biggest data we dont need to use closure 

"One consideration with closures is memory usage. 
A closure retains access to variables from its outer lexical scope. 
If one of those variables references a large object, that object can remain reachable and
 therefore cannot be garbage collected  as long as the closure is reachable.
 For example, if a closure references a large array,
 the array can remain in memory even after the outer function has finished executing.
  This isn't automatically a memory leak, but unnecessarily long-lived closures can cause 
  unnecessary memory consumption.
 So we should be careful about capturing large objects when they aren't actually needed




Advantages
1)we can keep the variable private without exposing it
2)we can create fucntion factory 
3) we can keep varibale alive between multiple func calls, rerenders in React
4)we can access it always using closure storing in a variable


function setButton() {
    let count = 0
 
    document.getElementById('btn').addEventListener('click', ()=>{
        count++
        console.log('Count is', count);        
    })
}

setButton()


For a closure to happen, the outer func doesnt always have to return the inner func, if the inner fn access the variable from its lexical scope then itself it is a closure , this is the good example
The browser's event system keeps a reference to that callback.
So even though setButton() has finished, 
the callback is still reachable through the event listener.
Therefore, the closure keeps access to count.


 Write a function createMultiplier(multiplier) 
that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    
return function multiply(num){
let ans =  multiplier * num
console.log(ans);
}

}

let double = createMultiplier(2);
let triple = createMultiplier(3);
let fiveTimes = createMultiplier(5);

console.log(double(10));    // 20
console.log(triple(10));    // 30
console.log(fiveTimes(10)); // 50

From this example we learnt its not closure remembers the varible only from outer scope
 also the params can be used in inner fn



function createMultiplier(multiplier){
 
    let result = multiplier

    return function multiply(num){
        result = result * num
        console.log(result);
    }

}

let double = createMultiplier(2)

double(5)
double(10)

10
100
// this is where it memorize the value of the outer clearly
//  and does calculation according to it 

*/





