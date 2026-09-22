

// DAY -35 JS Debugging Tasks

/**. Closure Confusion
function makeMultipliers() {
  const result = [];
  for (var i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6



2. Async Bug with setTimeout in Loop
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
Goal: This actually works fine because of let. But refactor it to use var instead, and now fix the broken version with var.

for (var i = 0; i <= 3; i++) {
 (function (i) {
     setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
 })(i)
}
"I used an IIFE. On every iteration, I pass the current value of i into the IIFE 
as an argument. The IIFE creates a new local i for each iteration. 
The setTimeout callback closes over that local i, 
so each callback remembers a different value instead of
 sharing the original var i."


3. Object Mutation Trap
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config = { ...config, ...newConfig };
}

updateConfig({ version: "2.0" });
Error: Assignment to constant variable.
Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config.version = newConfig.version
}
console.log(config)

updateConfig({ version: "2.0" })

console.log(config)

4. Promise Chain Gone Wrong
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  const data = fetchData()
    .then(res => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

  console.log("Data:", await data);
}

start();
Issue: Error isn’t caught properly. Unhandled rejection occurs.
Goal: Catch the error properly using try/catch with await pattern. 

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
try {
    const data = await fetchData()
  console.log("Data:", data);
} catch (error) {
    console.error(error.message)
}
}

start();

*/
