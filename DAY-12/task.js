

// DAY - 12 Tasks for Object

/**
 
1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

output will be  Not provided only
?? operator checks whether the left side is null or undefined.



2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

we can't modify it , its gonna return its previously set value




3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};


const {
name, company:{ name : company,
    location :{
        city
    }
 }

} = person

console.log(name);
console.log(company);
console.log(city);

Tapas
tapaScript
Bangalore



4. Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.
const student = {
    name: "Alex",
    age: 20,
    grades: [85, 90, 78, 92, 88],

    calculateAverage: function () {
        let total = 0;

        for (let grade of student.grades) {
            total += grade;
        }

        return total / student.grades.length;
    }
};

console.log(student.grades);
console.log("Average:", student.calculateAverage());


5. Book Store Inventory System
Store books in an object.
Add functionality to check availability and restock books.

const bookStore = {
    book: {
        title: "JavaScript Basics",
        author: "Tapas Adhikary",
        quantity: 5
    },

    checkAvailability: function () {
        if (bookStore.book.quantity > 0) {
            console.log("Book is available");
        } else {
            console.log("Book is out of stock");
        }
    },

    restock: function (amount) {
        bookStore.book.quantity += amount;
        console.log("Current quantity:", bookStore.book.quantity);
    }
};

bookStore.checkAvailability();
bookStore.restock(10);




6. What is the difference between Object.keys() and Object.entries()? Explain with examples

Object.keys give us only key of the properties where as Object.entries gives us both key and value
const person = {
    name : 'Rohith',
    city: 'Tokyo',
    country : 'Japan'
}

console.log(Object.keys(person));
console.log(Object.entries(person));
[ 'name', 'city', 'country' ]
[ [ 'name', 'Rohith' ], [ 'city', 'Tokyo' ], [ 'country', 'Japan' ] ]


7. How do you check if an object has a certain property?
console.log("name" in person); // true
console.log("city" in person); // false
 
8. What will be the output and why?
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

Doe as the both person , newPerson points same reference to the object's value 

9. What’s the best way to deeply copy a nested object? Expalin with examples


10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
for(let {name, address, age} of  users ){
console.log(name, address, age);
}
Alex 15th Park Avenue 43
Bob Canada 53
Carl Bangalore 26
*/










