
// DAY -17 DOM

/**
 * DOM is not part of JS
 * JS uses DOM as API to read the web content document and provide dynamic behaviour 
 * 
 * DOM types
 * 1)document
 * 2)Node
 * 3)Element
 * 4)NodeList
 * 5)Attr
 * 6)NameNodeMap
 * 
 * 1)document
 * A root node of DOM Tree
 * 
console.log(document); // my complete HTML is here
console.log(document.body);

 * 2)Node
Any element in the DOM tree it is called Nodes, child node, text node, element node, attribute node

 * 3)Element
Div li p h1 , a type of node, that represents HTML tags/elems
 * 
 * 4)NodeList
 * An Array of nodes
 * 5)Attr , Attributes of node, img has src alt, 
 * 
 * 6)NameNodeMap
 * A collection of attributes map, it is unorder list

 */

// const titleElem = document.getElementById('heading')

// console.log(titleElem.textContent);

// const infos = document.getElementsByClassName('info')

// const res = [...infos].forEach((elem)=>{
    // console.log(elem)
// })
  
//Array like HTML collection
// const pTags = document.getElementsByTagName('p')
// console.log(pTags);


//query Selector'll give me the first matching selector 
{/* <p  class="info" > this is p1 </p> */}
// //
// const info = document.querySelector('.info')
// console.log(info);


// query selctor returns a Node List
// const info = document.querySelectorAll('.info')
// console.log(info);


//What are the methods to Access DOM
/**
 * 1)Get elem by ID
 * 2)Get elem by Tag Names returns a HTML collection
 * 3)Get elem by class Names returns a HTML collection 
 * 4)Get Query Selector returns a first matching ('')
 * 5)Get Query SelectorAll returns a node list ('#id') ('.class')
 * 
 */



// function highlight(){

// const inputElem = document.getElementById('inp')    
// const value = inputElem.value

// const lis = document.querySelectorAll('ul#items li')

// lis.forEach((items)=>{
// items.style.display = value && items.innerText.toLowerCase()
//                              .includes(value.toLowerCase()) ? 'block': 'none'

// })


// }


// const inputElem = document.getElementById('inp')    
// inputElem.addEventListener('input', highlight)



// if you want to get the tag to console, click it in elements, go to console type $0 emter 
//you see it in console



























