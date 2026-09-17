

// DAY -29 JS  OOPS Tasks

// Identify Real-Life Objects with OOP Concepts
// Pick any 3 real-life objects (e.g., smartphone, bicycle, school), and for each:

// List at least 3 properties (attributes).
// List at least 3 behaviors (methods).
// Write which OOP principle each property or behavior best represents and why.

// CAR

// Property /  Behavior	Type	             OOP Principle	         Why?
// color	             Property	          Encapsulation	      The car keeps its color as its own data.
// model	             Property	          Encapsulation	      The model belongs to the particular car.
// speed	             Property	         Encapsulation	      The current speed is maintained by the car.
// start()	             Behavior	          Abstraction	      We start the car without knowing every engine operation.
// accelerate()	        Behavior	        Encapsulation	      The car controls how its speed changes.
// brake()	             Behavior	         Abstraction	      We press the brake and don't need to understand the hydraulic/electronic system.



// # 2. Diagram of an OOP Modeled System

// Let's model a **Library System**.

// ### Relationships

// * **Person → Member: Inheritance
// * **Person → Staff: Inheritance
// * **Member → Book: Association — a member can borrow books.
// * **Staff → Book: Association — staff can add/remove books.
// * `Book` encapsulates its data such as `title`, `author`, and `available`.
// * `Member encapsulates member information and borrowing operations.

// ---

// # 3. OOP Principles with Human Analogies

// MY own notes as an answer is availble in first.js file
//  * Abstraction - Hide Complexity, Expose interfaces, ex - TV Remote control
//  * Encapsulation - Bundles the data, it protects the state, and intentianlly keep it private, bank
//  * Inheritance - Share logic across classes
//  * Polymorphism - Same method diff behaviours, developers, finance guys, 
//  * they both work has ID , but thier output is diff, tools they have diff 
//  * Composition - Build by combining the parts , units

//1. Abstraction — Driving a Car 

// Imagine driving a car.

// You only need to know:

// * Press accelerator → car moves faster.
// * Press brake → car slows down.
// * Turn steering wheel → car changes direction.

// You don't need to know exactly how the engine, fuel injection,
//  transmission, and brakes work internally.

// **Programming connection:**
// Abstraction means showing the user only 
// what they need and hiding complicated implementation details.

// ---

// ### 2. Encapsulation — A Bank Account 

// Imagine your bank account.

// You can:

// * Deposit money.
// * Withdraw money.
// * Check your balance.

// But you cannot simply walk into the bank's database and change your balance to ₹1 crore.

// The bank controls how your account data can be changed.

// **Programming connection:**
// Encapsulation means keeping data and the operations that work on that data together and controlling access to the internal data.

// ---

// ### 3. Inheritance — A Family 

// Imagine a family.

// A child may inherit characteristics from their parents, such as certain physical features.

// In programming, a new class can receive common properties and behaviors from an existing class.

// For example:

// ```text
// Animal
//    │
//    ├── Dog
//    └── Cat
// ```

// Both `Dog` and `Cat` can inherit common behavior such as `eat()` from `Animal`.

// **Programming connection:**
// Inheritance allows a class to reuse characteristics of another class.

// ---

// ### 4. Polymorphism — A Person at Different Jobs 

// Imagine the same person working in different situations.

// At home, they might **cook**.

// At school, they might **teach**.

// At work, they might **manage**.

// The same person behaves differently depending on the situation.

// **Programming connection:**
// Polymorphism means the same operation/interface can produce different behavior depending on the object.

// For example:

// ```text
// Animal
//  ├── Dog → makeSound() → Bark
//  └── Cat → makeSound() → Meow
// ```

// The operation is the same — `makeSound()` — but the behavior is different.

// ---

// ### 5. Composition — A House

// A house is made up of many parts:

// ```text
// House
//  ├── Door
//  ├── Window
//  ├── Kitchen
//  ├── Bedroom
//  └── Bathroom
// ```

// The house is composed of these smaller components.

// Similarly, an OOP class can contain other objects that work together to form a larger object.

// **Programming connection:**
// Composition means building a complex object by combining smaller objects.

// ---

// # 4. OOP vs Functional Thinking

// Let's use a **To-Do App**.

// ## OOP Approach

// In OOP, we think about **objects and what they can do**.

// Possible classes:

// text
// Todo
//  ├── title
//  ├── description
//  ├── completed
//  ├── markComplete()
//  └── edit()

// TodoList
//  ├── todos
//  ├── addTodo()
//  ├── removeTodo()
//  └── showTodos()

// User
//  ├── name
//  ├── email
//  └── createTodo()
// ```

// We create objects such as:

// ```text
// User
//    ↓
// TodoList
//    ↓
// Todo
// Todo
// Todo
// ```

// The objects contain data and behaviors.

// ### OOP thinking:

// > "What objects exist, what data do they have, and what can they do?"

// ---

// ## Functional Programming Approach

// In Functional Programming, we focus more on **functions and data transformations**.

// Instead of asking:

// > "What objects should I create?"

// We ask:

// > "What operations do I need to perform on my data?"

// For example:

// text
// addTodo()
// removeTodo()
// completeTodo()
// editTodo()
// filterCompletedTodos()
// filterPendingTodos()


// The data can be passed through these functions:

//text
// Todo Data
//    ↓
// addTodo()
//    ↓
// completeTodo()
//    ↓
// filterCompletedTodos()
//    ↓
// Updated Todo Data
// 

// ### Functional thinking:

// > "What data do I have, and what functions should transform that data?"

// ### Simple comparison

// | OOP                             | Functional Programming                    |
// | ------------------------------- | ----------------------------------------- |
// | Focuses on objects              | Focuses on functions                      |
// | Objects contain data + behavior | Functions transform data                  |
// | State can belong to objects     | Usually favors immutable data             |
// | Think: "What objects exist?"    | Think: "What transformations are needed?" |


//  5. Object vs Class vs Function — Like a Teacher 

// Imagine you want to make **cookies** 

// ### Class = Cookie Recipe

// A class is like a **recipe**.

// The recipe tells us:

// * What ingredients a cookie has.
// * What shape it should have.
// * How to make it.

// But the recipe itself isn't an actual cookie.

// ```text
// Cookie Class
// ├── color
// ├── flavor
// └── bake()
// ```

// ---

// ### Object = Actual Cookie 

// An object is an **actual thing created from the class**.

// For example:

// ```text
// Cookie 1 → Chocolate
// Cookie 2 → Vanilla
// Cookie 3 → Strawberry
// ```

// All three can be created using the `Cookie` class.

// So:

// > **Class = Blueprint/recipe**
// > **Object = Actual thing made from the blueprint**

// ---

// ### Function = A Task/Action 

// A function is like a **small machine that performs one task**.

// For example:

// ```text
// makeCookie()
// ```

// You give it the ingredients, and it performs the steps needed to make a cookie.

// In programming:

// > **Function = A reusable block of instructions that performs a task.**

// ### Super-simple way to remember

// ```text
// CLASS    → Blueprint 📋
// OBJECT   → Real thing 🏠
// FUNCTION → Action ⚙️
// ```

// For example:

// ```text
// Class    → Car blueprint
// Object   → My red Honda
// Function → startCar()
// ```

// **One-line summary:**
// **A class describes what something should look like, an object is the actual thing, and a function is something that performs an action.**
