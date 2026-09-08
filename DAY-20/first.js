
// DAY -20 DOM
/**
 Efficient DOM traversal
 
const parent = document.querySelector('.cards')

const firstelem = parent.firstElementChild
const nextelem = firstelem.nextElementSibling
const lastChild = parent.lastElementChild

const parentOfelem = firstelem.parentElement

console.log(firstelem);
console.log(nextelem);
console.log(lastChild);
console.log(parentOfelem);

 * 


<template id="card-template" >
  <div class="card" >
    <h2 class="title" >    </h2>
     <p class="disc" > </p>
  </div>
</template>

When we use template tag it wont be visible in the web page
It gets added as  a fragment, wont be added in the DOM directly
But it is there as a elem for you to access 

why, where it is useful ?
 If I want to create card and attach each those card dynamically in DOM, I can make use if this cloning feature


console.log(clone.firstElementChild.firstElementChild);
<h2 class=​"title" > ​ ​</h2>​

we're able to clone it 


const template = document.getElementById('card-template')

const clone = template.content.cloneNode(true)

console.log(template);

console.log(clone);
console.log(clone.firstElementChild.firstElementChild);

clone.querySelector('.title').textContent = 'Today is Friday'

clone.querySelector('.disc').textContent = 'It is a good feature'

document.body.appendChild(clone)


Document Fragment and Range

Not a part of the main dom until you insert it
Acts like a template container
Great for building chunks of DOM before adding time


DF is a lightwieght container which you can see on your weboage, its an invisible container
that used to group a bunch of DOM nodes before you attech to the main DOM 
why we wanna do that ? Jus now we learned template


It helps you improve the performance by  reducing the repainting of your Web UI
becaue everytime you change a Tiny bit of DOM, you are actually repinting your UI
less repainting more are the performances


const fragment = document.createDocumentFragment() 

for(let i = 1; i <= 3; i++){
const li = document.createElement('li')
li.textContent = `Item of ${i}`
fragment.appendChild(li)
}

document.getElementById('list').appendChild(fragment)

Range
 Range represents a fragment of a document that is between 2 boundary points

It is used to highlightening certain content, replacing certain content
Useful for rich text editor 

When you wanna select a fraction of a elems or texgt content
<p id="para" >Hello<strong>world</strong>and universal  </p>
const p  = document.getElementById('para')

const range = document.createRange()

range.setStart(p.firstChild , 5)

console.log(range);
console.log(range.setStart(p.firstChild,0));


console.log(range.setEnd(p.childNodes[0], 1));

const content = range.cloneContents
console.log(content);


Shadow DOM
DOM is a representation of entrie web page structure
The DOM  is a tree-like representation of the HTML 
document that the browser creates in memory.
Web Components commonly use Shadow DOM to create
 reusable, self-contained UI components.

SD lives in Isolation , Useful for creating web components
Isolated logic, styling can be encapsulated 
DOM tree which can be attached to any of the regular HTML elems
there is a term called Shadow host
with this we can custom elems

Browser dom scope will be the global and shared 
Shadow dom scope is always local to the shaow root host or encapsulated



const shadowHost = document.querySelector('#box')

const shadow = shadowHost.attachShadow({ mode : 'open' })

shadow.innerHTML = `<style> p {color : red;} </style>
<p> Hello Shadow!</p>
`


Advanced Class Manipulation

Suppose your HTML is:
<button class="btn error">Submit</button>
Before:
class="btn error"  When this runs:
btn.classList.replace('error', 'success');

JavaScript does essentially: 
remove "error"  add "success"

So after: <button class="btn success">Submit</button>
So you can think of: replace("oldClass", "newClass")  as: oldClass  →  newClass
const btn = document.querySelector('.btn')

btn.classList.add('active')
btn.classList.remove('disabled')

btn.classList.toggle('visible')

btn.classList.replace('error', 'success')



Large Scale DOM updates

function addItems(count) {
    
const frag = document.createDocumentFragment()
for(let i=0; i<=count; i++){
    const div = document.createElement('div')
    div.textContent = `Item ${i}`
    frag.appendChild(div)
}

document.body.appendChild(frag)

}

addItems(100)


Mutataion Observser is a JS API 
Use it when you watch a changes in a DOM
and help[ you tu react to it with a callback function


 */

const btn = document.querySelector('.btn')
const target = document.getElementById('watchme')

const observer = new MutationObserver((mutationlist, observer)=>{

    for(let mutation of mutationlist){
        console.log(`Type of mutation : ${mutation.type}`);
        
    }

})





