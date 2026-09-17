


// DAY -29 JS OOPS explained  codes Notes

/*
 * IF somwthing can be describe as thing with characteristics and behaviour it can be turned into an object
 * Obj will have characteristics and the behaviour
 * The characteristics are also known as properites, attributes or state
 * behaviour knwon as methods or actions
 * 
 * Person 
 * characteristics - he has name, gender, height, age
 * behaviours - he can eat sleep code repeat
 * 
 * Class is a blue print to create an object
 * ES6 started class 
 * we can apply plan and create diff diff objects
 * Car should have a name, color, seats, in diff cars, all values can change 
 * that doesnt mean there'll no name with a car
 * function is an action or the utility , car - stop, start, gear
 * 
 * 
 * Think through obj
 * Break it down with properties and further break down with behaviors
 * like To design a City
 * city
 * - houses
 *    --2 story, cars, window
 * - People
 *      - can walk, talk, eat
 * - Hospitals
 *      - Beds, ambulance
 * - Theatre
 *     -FDFS
 * - Park 
 *     - Water fall, zoo
 * Also create a relationship aroud objs
 * who lives in house, People, 
 * who visits hospital, Theatre, Park - Prople,
 * 
 * 
 * Abstraction is the process of hiding the internal complexities of how somwthing works
 * and only exposes whas necessary for the user for interact with.
 * 
 * We dont need to know rhat is inside it, we only need to know how to use it
 * Coffee Machine
 * 
 * Properties
 * Watertank : number
 * HeaterOn : true, false
 * StartBoiling() : void
 * brew() : string
 * dispense () : void
 * Car also good ex - Key started, engine, tire
 * 
 * Encapsulation
 * It is a bundling of data and methods
 *  that operate on that data into a single unit, usually a class -
 * and restricting direct access to some of obj's components
 * 
 * in ATM - we can check balance, Withdraw, Deposit, 
 * but we cant acccess and change the balance, that is the  
 * 
 * 
 *  Abstraction, In Car, just because it doesnt make you do all, and gives you only one operation, it means , it doesnt want you to get bothered
 * it is more about hiding complexity not about restricting
 * and Encapsulation - In Bank , It is all about restricting the direct access of internal state or internal value
 *  action 
 * 
 * 
 * Inheritance
 * In a family, Kids inherit a parent's traits , habits, hair color, eyes,
 * while we inherit some from parents we also have our own 
 * 
 * Inheritance allows class(child) to reuse the properties and methods of another clss (parent)
 * reducing the duplication and promotes reusability
 * Avoiding duplicating rewrting any kind of shared logic
 * 
 *Ex - Bus and Car can inherit some traits from car, they both can have their own functionality
 * 
 * 
 * Polymorphism
 * RUN , Based on the context it changes
 * People run - physical run,
 * Busineses run - Building a startup , 
 * Code runs in my laptop- It is Executing the code
 * 
 * Same method same command same action but behaves diff based on the action
 * 
 * Polymorphism means many forms - it allows object of diff classes to be treated
 * as if they are of the same type, but behave diff
 * based on their class-specific implementations.
 * 
 * Employee work()
 *   
 * Developer work in code  
 * Finance work in payroll they actually work on balance sheet 
 * 
 * Calling a work method on employee differ based 
 * on their context they work
 * 
 * 
 * 
 * Composition
 * Building a Car
 * 
 * what are the raw matewrials you bring together to build car
 * Engine, Wheel, Mirror, Seats , lights
 * Each can be used in many objects like, they work independently also
 * like wheel can be used in cycle, bike
 *  lights and  mirror in home mirror , music system 
 * 
 * Composition is a design principle where one class contains or is composed of one or 
 * more objects of other classes to reuse their functionality, instead of inherting from time
 * 
 * When you can bring diff part which can independently play their role
 * on their own existence and you can bring them together to build  something big
 * you can replace a part wihtout hanging the whole system , music system can be taken out wihtout chaning the entire sysytem
 * 
 * has a
 * Juice blendor has a motor
 *Car has a engine wheels 
 * 
 * 
 * Abstraction - Hide Complexity, Expose interfaces, ex - TV Remote control
 * Encapsulation - Bundles the data, it protects the state, and intentianlly keep it private, bank
 * Inheritance - Share logic across classes
 * Polymorphism - Same method diff behaviours, developers, finance guys, 
 * they both work has ID , but thier output is diff, tools they have diff 
 * Composition - Build by combining the parts , units
 * 

 
 * 
 */















