

// DAY -20 DOM Tasks

/**1.
 * Traverse and Toggle Classes
Build a navigation menu. On click of a list item:

Traverse up to parent <ul>
Remove .active class from all <li>
Add .active only to the clicked <li>
2. Highlight Text Using Range
Use the Range API to highlight a portion of a paragraph by wrapping it with a <mark> tag.

3. Use DocumentFragment for Performance
Insert 100 list items into the DOM using:

Plain DOM methods (one by one)
DocumentFragment (all at once)

4. Build a “Smart Cloner”
Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.

5. MutationObserver Watcher
Create a div and use MutationObserver to log whenever:

A new child is added
The class attribute changes
Text is modified
 */


// 1. Traverse and Toggle Classes
// Build a navigation menu. On click of a list item:
//     Traverse up to parent <ul>
// Remove .active class from all <li>
// Add .active only to the clicked <li>
    const menu = document.querySelector(".menu");

    menu.addEventListener("click", function (event) {

        if (event.target.tagName === "LI") {

            const clickedLi = event.target;

            const parentUl = clickedLi.parentElement;

            const allLi = parentUl.querySelectorAll("li");

            allLi.forEach(function (li) {
                li.classList.remove("active");
            });
            clickedLi.classList.add("active");
        }
    });



// 2. Highlight Text Using Range
// Use the Range API to highlight a portion of a paragraph 
// by wrapping it with a <mark> tag.


 const paragraph = document.querySelector("#text");
    const button = document.querySelector("#highlightBtn");

    button.addEventListener("click", function () {

        const textNode = paragraph.firstChild;
        const range = document.createRange();
      
        range.setStart(textNode, 15);
        range.setEnd(textNode, 23);

        const mark = document.createElement("mark");
        range.surroundContents(mark);
    });




// 3. Use DocumentFragment for Performance
// Insert 100 list items into the DOM using:

// Plain DOM methods (one by one)
// DocumentFragment (all at once)
    const normal = document.querySelector("#normal");

    console.time("Plain DOM");

    for (let i = 1; i <= 100; i++) {

        const li = document.createElement("li");

        li.textContent = "Item " + i;

        normal.appendChild(li);
    }

    console.timeEnd("Plain DOM");



    const fragmentList = document.querySelector("#fragment");

    console.time("DocumentFragment");

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 100; i++) {

        const li = document.createElement("li");

        li.textContent = "Item " + i;

        fragment.appendChild(li);
    }


    fragmentList.appendChild(fragment);

    console.timeEnd("DocumentFragment");




// 4. Build a “Smart Cloner”
// Create a UI with an element and a “Clone” button. Use cloneNode(true) and 
// cloneNode(false) and show the difference visually.




    const original = document.querySelector("#original");
    const output = document.querySelector("#output");

    // Deep clone
    document.querySelector("#deepClone")
        .addEventListener("click", function () {

            const clone = original.cloneNode(true);

            clone.removeAttribute("id");
            clone.classList.add("clone");

            output.appendChild(clone);
        });


    // Shallow clone
    document.querySelector("#shallowClone")
        .addEventListener("click", function () {

            const clone = original.cloneNode(false);

            clone.removeAttribute("id");
            clone.classList.add("clone");

            output.appendChild(clone);
        });



// 5. MutationObserver Watcher
// Create a div and use MutationObserver to log whenever:

// A new child is added
// The class attribute changes
// Text is modified


const watcher = document.querySelector("#watcher");

    // Create MutationObserver
    const observer = new MutationObserver(function (mutations) {

        mutations.forEach(function (mutation) {

            console.log("Mutation type:", mutation.type);

            if (mutation.type === "childList") {
                console.log("A child was added or removed");
            }

            if (mutation.type === "attributes") {
                console.log(
                    "Attribute changed:",
                    mutation.attributeName
                );
            }

            if (mutation.type === "characterData") {
                console.log("Text was modified");
            }
        });
    });


    // Start observing
    observer.observe(watcher, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    });


    // Add child
    document.querySelector("#addChild")
        .addEventListener("click", function () {

            const p = document.createElement("p");

            p.textContent = "New child added!";

            watcher.appendChild(p);
        });


    // Change class
    document.querySelector("#changeClass")
        .addEventListener("click", function () {

            watcher.classList.toggle("active");
        });


    // Change text
    document.querySelector("#changeText")
        .addEventListener("click", function () {

            watcher.firstChild.textContent = "Text changed!";
        });












        