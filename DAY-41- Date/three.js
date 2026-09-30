

//Temporal 

// const date = new Temporal.PlainDate.

// console.log(date);




const date =  Temporal.PlainDate.from('2026-09-07');
const nextweek = date.add({  days : 7 })

// console.log(date.toString())    //2026-09-07
// console.log(nextweek.toString());  //2026-09-14


const birth = Temporal.PlainDate.from("2002-12-01");
const today = Temporal.PlainDate.from("2026-09-07");

const age = birth.until(today, {
    largestUnit: "years"
});

// console.log(age.years);
// console.log(age.months);
// console.log(age.days);

//old way
// const todayOld  = new Date().toISOString().slice(0,10)
// //new way
// const todaynew = Temporal.Now.plainDateISO().toString()
// console.log(todayOld) //2026-09-07
// console.log(todaynew) //2026-09-07

//old way
// const d1 = new Date('2020-10-15')
// const d2 = new Date('2020-10-15')

// console.log(d1 === d2); //false
// console.log(d1.getTime() === d2.getTime()); //true

//new way of comparing

// const d1 = Temporal.PlainDate.from('2020-10-25')
// const d2 = Temporal.PlainDate.from('2020-10-25')
// console.log(d1.equals(d2)) //true
// console.log(Temporal.PlainDate.compare(d1,d2)) //0
// Temporal.PlainDate.compare(A, B)

// Result	Meaning
// -1	A is before B
// 0	A and B are same date
// 1	A is after B

// Temporal isn't available in Safari but available in Chrome, Brave
//So temporal is also availanle in Polyfill to support unsupportes browsers like Safari

