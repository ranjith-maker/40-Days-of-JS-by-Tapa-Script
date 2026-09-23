


// DAY -35 JS Debugging Notes
/**
 * 
function calculateDiscount( total ) {
    
let discount = 0
if(total >= 100){
    discount = 0.10
}else if(total >= 300 ){
    discount = 0.15
}else if(total >= 500){
    discount = 0.20
}
return total - total * discount
}

console.log(calculateDiscount(50) ) //45
console.log(calculateDiscount(600) ) //540 
console.log(calculateDiscount(350) ) //315
why, because JS reads from top to bottom, when it sees the calcualte total is 600
it comes to the first condition, is 600 higher than equal to 100 then then apply 0.10
it wont goto else if().The learning here is when we working on Range
we should go from TOP TO BOTTOM , Go from biggest to smallest. 
below is a correct code


function calcualteDis(total) {
    
let discount = 0

if(total >= 500 ){
    discount = 0.20
}else if(total >= 300){
    discount = 0.15
}else if(total >= 100) {
    discount = 0.10
}
return total - total * discount
}

console.log( calcualteDis( 500) ) 400
console.log( calcualteDis( 400) ) 340
console.log( calcualteDis( 300) ) 255
console.log( calcualteDis( 150) ) 135
console.log( calcualteDis( 600) ) 480


2) Var with Clousure

function createButtons( ) {
    const buttons = []

    for(var i = 1; i<=3; i++){
        buttons.push(()=>{
            console.log(`Buttons ${i} clicked`)
        })
      
    }
return buttons
}

const [btn1, btn2, btn3, ] = createButtons()

btn1()
btn2()
btn3()






"var gives me one shared i for the whole loop. 
 The functions are created during the loop, but they are called later.
  Since all of them refer to that same i, by the time I call them, 
 the loop has finished and i is 4. That's why all three print 4.
 
 With let, each iteration gets its own i, so each 
 function refers to the i from its own iteration. That's why I get 1, 2, and 3."
 "let gives each iteration its own i, and 
 the function's closure remembers that particular i."

3 Unhappy Button THIS problem
const user = {
name : 'Rohith',
count : 0,
handleClick : function(){
 document.querySelector('button').addEventListener('click',()=>{
    this.count++
    console.log( `${this.name} clciked ${this.count} times ` )
    
 })
}

}

user.handleClick()



04 - Payment Process Problem

function processPayment(paymentData) {
    
try {
    
    if(!paymentData.amount) throw new Error('Invalid Amount !')
    if(!paymentData.method) throw new Error('Payment method is missing!')
 
      simulatePayment(paymentData)
      console.log('Payment process successfully');
      
} catch (error) {
    console.error('Error', error.message)

} finally{
    console.log('Payment attempt logged');
}

}

function processPayment(paymentData) {
    
try {
    
    if(!paymentData.amount) throw 'Invalid Amount !'
    if(!paymentData.method) throw new Error('Payment method is missing!')
 
      simulatePayment(paymentData)
      console.log('Payment process successfully');
      
} catch (error) {
    console.error('Error', error instanceof Error ? error.message : error    )

} finally{
    console.log('Payment attempt logged');
}}




function simulatePayment(data) {
     if(Math.random() > 0.5){
        throw new Error('Payment Gateway timeout!')
     }
}

processPayment({ amount : 100 , method: 'card'})
processPayment({amount : 100})
processPayment({method : 'upi'})







async function getOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === "123") {
        resolve({ id: "123", item: "Book", status: "Processing" });
      } else {
        reject("Order not found!");
      }
    }, 1000);
  });
}



async function getTrackingInfo(order) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!order?.id) {
            reject("No Order ID");
        } else {
            resolve({ orderId: order.id, location: "Warehouse", eta: "2 days" });
        }

    }, 1000);
  });
}




async function trackOrder(orderId) {
  try {
    const order = await getOrder(orderId); 
    const tracking = await getTrackingInfo(order);
    console.log(`Tracking Order: ${tracking.orderId}`);
    console.log(`Current Location: ${tracking.location}`);
    console.log(`Estimated Delivery: ${tracking.eta}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

trackOrder("123");



neither it returns a resolve or reject if we dont write await ,
 it'll be in pending state 






 */









/**

 * 
 */
