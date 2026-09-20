

// DAY -32 JS  OOPS Tasks

/*
1. Split a Utility Library
Create a small utility library (e.g., math functions like add, subtract, multiply, divide) in separate module files and import them into a main index.js file to perform operations.


import { sum , sub, mult, dvd} from './math.js'

console.log(mult( 5 , 4 )) 



2. Create a Feature-Based Module Structure
Create a small blog app where:

post.js handles posts
user.js handles user info
main.js brings it together via import


import * as join  from './combine.js'


console.log( join.post.post() )
console.log(join.user.user('Rohith', 22))





3. Use Named vs Default Exports
Create modules with both named and default exports, and demonstrate:
How to import them correctly
How to rename named exports during import

Named export needed curly braces
import {sum,sub,mult  } from './math.js'
Default export doesnt require {} also we can choose the name , doesnt have to be the exact function name
import divide from './math.js'


4. Mock an API Module
Create api.js that exports functions like fetchUsers, createUser, etc.

Simulate network delays using setTimeout
Use these in a frontend to display mock data




*/
