
Notes from Day - 1 of 40 days of JS 

JS is a programming lang that runs on browser and server side
It allows you to have user interactivity on my app for ex – button clicks, animation, image mouse movement
Mother of all application is JS
1995 – Brenden Eich creates JS in 10 days at Netscape
1996 – Microsoft releases JS for Internet explorer
1997 – ECMA Script (ES1) is standardized
1999 – ES3 introduced Regex & Exception handling
2005 – AJAX Asynchronous Javascript  revolutionized web interactivy  
2006 – Jquery simplified JS
2009 – ES5 brings JSON support map filter reduce
2010 – Angular JS fend frameworks
2013 – React JS changes UI widely
2014 – ECMA Script updates become a standard  to have an update every year
2015 – ES6  introduces let const
2016 – Vue.ja 
2017 – Async/Await replaced promises
2019 – ES10 introduces optional catch
2020 – Deno by Ryan Dahl challenges Nodejs with better security
2022 – ES13 in at() for arrays and top level await
2021 – ED12 adds logical operator && = || ??=
2023 - ES14 in arrays grouping  groupBy()
2024 - React  Server Components RSC revolutionize web app performance
2025 – JS continues evolving, integrating more AI driven features, WebAssembly advancements.


Anything we write inside body tag we can see in webpage
Whatever we wanna render, show in webpage we write in Body, that’s why script tag also comes at the end of body

HTML's job is bring structure to our page where as CSS can add styling to our page and with JS we can bring dynamic behaviour for the page

Always have SOC – Separation of concern
Why we add css,title in head in html

When you put script in htlm's head when you run that html page onm browser, browser is gonna download the html, then it is gonna build DOM, a tree like structure, each of the HTML elems tags resides inside the tree as a node in the tree.
Executing the script if there is an script is linked or imported with src
Download HTML
Parse the HTML create DOM according to html elems
Download script if any
Execute the script file

Download the HTML loading….. sees a script download script too…execute it and rest of the html is downloaded


The browser downloads the HTML and starts parsing it. As it parses the HTML, it discovers external resources such as JavaScript files and starts downloading them. Depending on how the script is loaded (normal, defer, or async), the browser may pause HTML parsing to execute the script, or continue parsing while the script downloads. Once the JavaScript executes, it can create or modify the DOM and start the application.



What happens once you load your HTML file in the browser ??
<html>
  <body>
    <h1>Hello</h1>
    <script src="app.js"></script>
    <p>World</p>
  </body>
</html>
It can do:
HTML download
     │
     ├── receive <html>
     ├── parse → DOM
     ├── receive <h1>
     ├── parse → add h1 to DOM
     ├── receive <script>
     │
     ├── download app.js
     ├── execute app.js
     │
     ├── receive <p>
     ├── parse → add p to DOM
     │
     └── finish
So the best statement is:
The browser downloads HTML and, as HTML arrives, parses it and incrementally builds the DOM.


<script src="./first.js" ></script>
</body>
The problem with adding script at end of body is , what if the HTML is large and our JS has big files long lines of codes?...
In that time, HTML downloading HTML parse it build dom. And then it sees script , then app.js downloading loading…. Then it executes
It takes lot of time to make our website alive
So this isn't optimal way

What if we can download HTML parse it build dom, and while parsing HTML we can download JS file and keep it ready in parallelly so we save that time
We can do it in 2 ways
1)link with async in head tag
<script  async src="./first.js" ></script>
</head>
If we link our js file using async and put it at end of head tag, what happens is , HTML Downloading, DOM parsing as it sees script tag linking 
It started to download the js file and starts executing it, then only it downloads the remaining html and parse it to build dom
As it executes it and the dependency is from remaining html , since body not parsed, then it'll be big problem, throw error as null
So we can use this async when we don’t have any dependency from HTML tags, forex- chat bots that doesn’t depend on html
So this is also not an optimal way
 
2) script tag with defer
<script defer src="./first.js" ></script>
</body>

As the HTML downloads parses it for DOM building, parallelly my JS file also gets downloaded and the good part is it never starts executing before HTML is fully parsed
As the HTML is downloading, the browser parses the HTML and builds the DOM.
When it discovers the defer script, it downloads first.js in parallel with HTML parsing.
The important part is that first.js does not execute immediately.
It waits until the browser has finished parsing the HTML and built the DOM.

So the key idea is:
defer = download JavaScript in parallel with HTML parsing, but execute it only after HTML parsing is complete.
If it is an external script files relies on HTML tags elems then defer and link the script file
If the script file has no dependency of html we can use async at end of Head tag

The JS can run in client side as we see browser console
The JS can run in server side as we can see in our terminal

 
document.write('Check the browser for the message')
If I  put it in a deferred script: <script defer src="./first.js"></script>
and first.js contains: document.write('Check the browser for the message');
that's not something I should use. 
document.write() is intended for use while the document is being parsed. 
Calling it after parsing has completed can replace/clear the document 
rather than simply inserting text where you expect.








