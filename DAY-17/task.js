

// DAY -17 DOM Tasks
/**
 * 1. Find the Most Frequent Word in a Paragraph
Consider the follwoing HTML:

<div id="text">This is a test. This test is only a test.</div>
Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

Hints:

Use document.querySelector() or getElementById() to select the paragraph.
Convert the text into an array of words.
Use querySelector() to display the most frequent word along with the count inside another <div>.


const text = document.getElementById('text')

const words = text.innerText.toLowerCase()
              .replace('.',' ').split(' ')
               
const count = {}

words.forEach((item)=>{
  count[item] = (count[item] || 0 ) + 1
})


let freqWord = ''
let highCount = 0

for(let num in count){
    if(count[num] > highCount ){
        highCount = count[num]
        freqWord = num
    }
}

const result = document.getElementById('result')

result.innerText = `count is ${highCount}  : ${freqWord}`




2. Create a zebra pattern
Consider the following HTML:

<ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
</ul>
Now put alternate colors and background colors to each of the list tags. for example,

If tne BMW is in white color text, the background should be in black color.
Then for the next car it will be reversed, the color is black and the background is white.
Then again the next one is white color and background black
So on.

const lis = document.querySelectorAll('#cars li')


lis.forEach((lis, idx)=>{

    lis.style.color = idx % 2 === 0 ? 'black' : 'white',
    lis.style.backgroundColor = idx % 2 === 0 ?  'white' : 'black'

})


3. Write different ways we can access DOM and what they returns

 * 1)Get elem by ID
 * 2)Get elem by Tag Names returns a HTML collection
 * 3)Get elem by class Names returns a HTML collection 
 * 4)Get Query Selector returns a first matching ('')
 * 5)Get Query SelectorAll returns a node list ('#id') ('.class')
 * 
 * 
4. Find and Replace Text Inside a Page
Write a script that finds all occurrences of a word inside a <p> tag 
and replaces them with another word dynamically.

const ptags = document.querySelectorAll('p')

ptags.forEach((word,idx)=>{
  word.innerText = word.innerText.replaceAll('text','sentence' )

 console.log(word);
 

})
5. Extract and Count Unique Links from a Page
Count all the unique hyperlinks (<a>) in a page and display their count.

const atags = document.querySelectorAll('a')
let number = atags.length
const count = document.getElementById('anum').innerText = `there are ${number} a  tags`



 */



