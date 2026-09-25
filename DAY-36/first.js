


// DAY -36 JS Debugging Notes

/**
 * Waiting after clicking after a button,
 *  Performance is something is very imp when developing itself
 * Efficiency
 * Developed a feature and how efecienlty it is working on when customer usese
 * Resource Usage
 *  Using your resource too much at the end it'll cost you a lot, 
 * Responsiveness
 * How your app is responfing when diff type of device are used
 * Scalability
 * When more no.of users come to use our app, how is it reacting or behave it
 * 
 * 
 * Performance 
 * Writing function doesnt run when they dont need to run 
 * Need to avoid costly coputation
 * We should make it work, more than our it should be, mobile battery might consume a lot
 * make sure it isnt drained because of our app
 
 

DB - Dont act too fast
TH- Dont act too often
MOM- cache the results so that the repetitive work and skip the work for next iteration
 
Debouncing
Limit the rate at which a funcontion is executed
A fn is executed/called only  after a certain delay has 
passed since the last time it was called
Eg- Input Search, Auto saving while we type in gdocs , we save after few seconds in DB



function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

Throttling
Limit how often a fn can be called over a time
Mouse movement, window resize, very fast, event is happening for every small size
layout calc pretty expensive

WE execute only once at every 400ms


function throttle(func, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  }
}

  function throttle(fn, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          fn.apply(this, args);
        }
      };
    }


function handleScroll(){

const scrollY = window.scrollY
document.getElementById('tracker').textContent `Scroll Y : ${scrollY}`
console.log('Scroll evcent fired at',  new Date().toLocaleTimeString() )
}


window.addEventListener('scroll', handleScroll )



Memoization
The main focus is caching, returnt the cached response when
 same input is given later
keep the cache in a map

 
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit:", key);
      return cache[key];
    } else {
      console.log("Cache miss:", key);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function slowSquare(n) {
  console.log("Computing square of", n);
  return n * n;
}

const memoizedSquare = memoize(slowSquare);

memoizedSquare(5);  
memoizedSquare(5); 
memoizedSquare(6);  
memoizedSquare(5); 


memory leak

keeps the data in memory that’s no longer needed, it means we prevent the garbage to be cleaned up
sluggish perf





Revisting DOM Performances

 1. Minimize DOM Access
 2. Batch DOM Changes Using Fragments
 3. Avoid Layout Thrashing
 4. Debounce or Throttle High-Frequency Events
 5. Use classList Instead of className Overwrites
 6. Use Virtual DOM (React, Vue) or Diffing Libraries
 7. Avoid unnecessary loops and iterations








 * 
 */









/**







 */
