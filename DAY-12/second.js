

//Object Destructure



// const student = {
//   name: "John Williamson",
//   age: 9,
//   std: 3,
//   classmates: 50,
//   subjects: ["Maths", "English", "EVS"],

//   parents: {
//     father: "Brown Williamson",
//     mother: "Sophia",
//     email: "john-parents@abcde.com"
//   },

//   address: {
//     street: "65/2, brooklyn road",
//     city: "Carterton",
//     country: "New Zealand",
//     zip: 5791
//   }
// };

// const { name, age , interval = 'lunch' } = student

// console.log(name, age, interval) //John Williamson 9 lunch

// if we wanna add new property in obj we often do like, 
// student.interval = 'lunch' we can do in destructuring itself, 
// and wont be added in original obj student just in ownwe can console and use the value in react to show

// const { subjects, numOfSubs = subjects.length }  = student
// console.log(subjects, numOfSubs); //['Maths', 'English', 'EVS'] 3

// this is we do destructure for nested objects
// const{  parents : { father } }  = student

// console.log(father); 

// we can do this for, Also known as, lets say I wanna change this classmates as friends

// const { classmates : friends  } = student
// console.log(friends); // we get 50 , amazing right....we cna change key's name if duplicates conflict

// we can also change a key name of nested object's key, come on lets see

// const {  parents : { mother : mom } } = student
 
// console.log(mom); // Sophia , see we changes mother as mom which is inside parents


// const { subjects   }  = getStudent()
// const { subjects :[ one, two,three ] }  = getStudent()
// console.log(subjects); //[ 'Maths', 'English', 'EVS' ]

// console.log(one, two, three);  //Maths English EVS


// function sendEmail(student) {

//   const {parents : {email} } = student
//   console.log(`sent an email to ${email}`);
 
// }
// sendEmail(student)

// we can destructure in params level
// function sendEmail({parents:{email}}) {
 
//   console.log(`sent an email to ${email}`);
  
// }

// sendEmail(student)


// const getStudent = () => {
//     return {
//        'name': 'John Williamson',
//         'age': 9,
//         'std': 3,
//         'subjects': ['Maths', 'English', 'EVS'],
//         'parents': {
//           'father': 'Brown Williamson',
//           'mother': 'Sophia',
//           'email': 'john-parents@abcde.com'
//         },
//         'address': {
//           'street': '65/2, brooklyn road',
//           'city': 'Carterton',
//           'country': 'New Zealand',
//           'zip': 5791
//         }
//     }
//    }

// if the returns an object we can destructure in function as well
// const { name : anotherName, subjects: subs, address:{zip}  } = getStudent()

// console.log(anotherName, subs,zip); //John Williamson (3) ['Maths', 'English', 'EVS'] 5791

// optional chaning as we dont know API data we do ?.?.?.?.?.?.

// console.log(student?.address?.country); //New Zealand
// console.log(student?.address?.doorno) // undefined 
// console.log(student?.address?.doorno ?? '800'); // 800



// we can do destructure in array of objects using simple for of loop
//    const students = [
//     {
//         'name': 'William',
//         'grade': 'A'
//     },
//     {
//         'name': 'Tom',
//         'grade': 'A+'
//     },
//     {
//         'name': 'Bob',
//         'grade': 'B'
//     }
// ];


// for(let {name, grade} of students){
//  console.log(name,grade);
// }
// William A
// Tom A+
// Bob B






const names = [
  "Arun",
  "Priya",
  "Karthik",
  "Divya",
  "Arun",
  "Rahul",
  "Priya",
  "Sneha",
  "Karthik",
  "Vijay",
  "Divya",
  "Arun"
];

let res = names.filter(
    (name, id) => names.indexOf(name) !== id
)

console.log(res);


// const duplicates = names.filter(
//   (name, index) => names.indexOf(name) !== index
// );

// console.log(duplicates);




