// import {sum as add , sub} from './calc.js'
import sayName1 from './whoami.js';
import * as calcu from './calc.js'



// DAY -32 JS Imprt Export  codes Notes

/**
 * 
 * 
when you do named export const { } we need to import with {curly braces}
when we do default export we can  import sum './.js normally with our own name
Use as to avoid naming conflict in importing file


Namespace is nice, like when we export lot of func from one file  
and try to import in another file, we dont need to exactly do this
import { sum, sub} from './calc.js
 instead we can simply do this
import * as calcu from './calc.js'

and access it like an object
console.log(calcu.sum(4,4 ));
console.log(calcu.sub(5,9) );

Combine export acts as an intermediary and in one file I export all functions  
and in ur using file you can like
import * as combine as './combine.js'
now as usual we can access like object combine. . .. 



Dynamic Imports 
we dont need to import on top file
and we can conditionally import it
if(true){
const { sayHi, sayHola} = await import('./greet.js')
sayHi()
sayHola()
}



console.log(calcu.sum(4,4 ));

console.log(calcu.sub(5,9) );


sayName1()



if(true){
const { sayHi, sayHola} = await import('./greet.js')
sayHi()
sayHola()
}



 */






