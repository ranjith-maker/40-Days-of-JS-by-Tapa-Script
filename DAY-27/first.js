


// DAY -27 JS How your Async code works , Event Loop explanation
//  codes Notes



// The job of the event loop is to keep on checking whether callstack is empty, 
// if it is empty it'll push whatever is inside the CB
// SettIN, Event listener -->  callback queue / task queue , 
// Promises goes to  micro task queue 


// function f1() {
//     console.log('f1')
// }

// function f2() {
//     console.log('f2')
// }


// function main() {
//    console.log('main')
   
//    setTimeout(f1,0)
//    f2()
// }


// main()
// //main
//f2
//f1





// function f1() {
//     console.log('f1')
// }

// function f2() {
//     console.log('f2')
// }


// function main() {
//    console.log('main')
   
//    setTimeout(f1,0)

//    new Promise((res,rej)=>{
//      res('I am a Promise')
//  }).then((value)=>  console.log(value))

//    f2()

// }


// main()


//main
// f2
// I am a Promise
// f1





// function f1() {
//     console.log('f1')
// }

// function f2() {
//     console.log('f2')
// }

// function f3() {
//     console.log('f3')
// }

// function main() {
//    console.log('main')
   
//    setTimeout(f1, 50)
//    setTimeout(f3, 30)

//    new Promise((res,rej)=>{
//      res('I am a Promise, right after f1 f3 really ?')
//  }).then((value)=>  console.log(value))

//   new Promise((res,rej)=>{
//     res('I am promise after promise')
//   }).then((value)=> console.log(value))

//    f2()
// }

// main()


// main
// f2
// I am a Promise, right after f1 f3 really ?
// I am promise after promise
// f3
// f1

// for promise async function only it is not LIFO, what was first promise
//  called'll be executed 








