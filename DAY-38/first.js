


// DAY -38 JS Memory Management and Garbage Collection

/*


1. JavaScript Memory Management
2. Reachability Theory
3. Garbage Collection(GC)
4. Resources to Go More Depth

Reachability
*

 */

/**
  Stack is primarily used for static memory allocation. 
 it means I know the size of the data that i'll be storing in the stack in  
the compilation time itself, before the run time you know the size of the data


do we need to write our program in such a way that this memory managememnt happen effeciently ? 
who manages this stack heap memory ?

It is handled by the JS engine itself, it utilizes a proces called Garbage collection
as a dev we dont need to write  code for managing memroy directly like C 
the way we write code that might determine how GC might behave  at the end of the day

It is an automatic MM, it also has the capability to free thise memory up when those arent userd 

How GB knows that this pariticular memory  is not in use ?
now Reachability comes into picture

✅ "Is there a path from a GC root to this object?"
Unreachable objects become eligible for garbage collection.
"JavaScript engines primarily use reachability-based tracing garbage collection.
The collector starts from GC roots and follows references. Objects
that cannot be reached from any GC root are considered unreachable and become eligible for garbage collection. 
This is why an object can be collected even if it has references to other unreachable 
objects, such as in a circular reference."






From the root whatever is reachable to its decendants
GC is going to mark them as this is all reachable
and if something is not reachable mark them as not reachable

GC periodically performs a collection cycle. and in somecycle it is gonna free up the 
non reachables so that that memeory location will be used for some other point in time


GC roots → traverse references → mark reachable objects → unreachable objects are garbage → reclaim their
 memory → memory becomes available for reuse.

let employee = { salary : 5000 }

global ---> employee(obj) ---> salary:5000
here GC marks this as reachable so no MC , GC

employee = null

now we broke the reference , 
there is no connection from the root to its particular obj





Cyclic Reference
function createCycle(objA, objB){
    objA.ref = objB
    objB.ref = objA

return {
    'A' : objA,
    'B' : objB
}
}

const cycle = createCycle( {  sal : 100  },  { sal : 200 } )

console.log(cycle);




Memory in GB, more than 1 reference 

let department ={
name : 'finance'
}


let dept = department
console.log(department === dept)  // true

department = null
console.log(department) // null

console.log(dept) // { name : finance}
console.log(department) // null
console.log(department === dept)  //false


even though the department is to set to null, 
 dept shows { name : finance} also for departemnt Garbage wont be collected
 The key concept
Don't think:

department = null → object gets deleted ❌

Think:

department = null → one reference is removed ✅

Then ask:

"Is there still another path from a GC root to this object?"

In your example:

department = null
        ↓
dept still points to object
        ↓
object is reachable
        ↓
object stays alive

Then:

dept = null;

No references from roots
        ↓
Object unreachable
        ↓
Eligible for GC

That's exactly where reachability becomes important.


Only one object in the same memory, pointing to the same ref



Mark and Sweep Algorithm

GB, in every cycle its gonna see whether a particular object is reachable from the root or not
if yes, mark it reachable
if not, free up the memory



A cyclic reference occurs when objects reference each other. In older reference-counting systems, this could cause memory retention because each object still had a non-zero reference count. 
Modern JavaScript engines use tracing/reachability-based garbage collection, so an unreachable cycle can still be garbage collected. 
Setting a.ref = null and b.ref = null explicitly breaks the cycle, removing those internal references, but it generally  isn't necessary for garbage collection when the whole cycle is already unreachable.







Step 5 — Remove button from DOM
btn.remove();

Now the DOM no longer contains the button.

But don't think it's garbage yet, because you still have:

GC Root
   │
   ↓
  btn
   │
   ↓
 Button

So the button is still reachable.

Step 6 — Remove your reference
If you use let:

btn = null;

Now:

GC Root

btn → null


Document
   ↓
 body
   ↓
 ❌ Button is no longer there


Button
  ❌

There is no longer a path from a GC root to the button.

Therefore:

Button
   ↓
unreachable
   ↓
eligible for garbage collection

⭐ This is the exact point
The GC doesn't necessarily run right at:

btn = null;

Instead, at that point the button becomes unreachable.

Later, when the JavaScript engine performs a garbage-collection cycle:

btn = null
     ↓
Button becomes unreachable
     ↓
GC runs sometime later
     ↓
GC discovers Button is unreachable
     ↓
Memory is reclaimed

So in an interview, say:

"After removing the button from the DOM, I also remove the event listener and clear the remaining JavaScript reference. Once there is no path from a GC root to the button, the button becomes unreachable and eligible for garbage collection. The GC may reclaim it during a later collection cycle; it doesn't necessarily happen immediately."

And remember: btn = null doesn't manually garbage-collect the object. It only removes one reference to it.
*/







































