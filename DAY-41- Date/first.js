


// DAY -41 DATE and TIME

/**  Time zone dont just ad or subtract a while hour it might be minuts
India to Bangladesh - 30 mins
Daylight savings - dates can move forward or backward, its noy applicable
Govt can chnage the timezone
Months have diff length, 30 31 27 28 leapyear
need to consider all problem so it doesnt break for our client

Epoch Time - starting time - JAN - 01 - 1970 at exactly 00:00:00
Time is relative, My NOW is not same as your NOW if we odnt need in the same geo location

why Jan 1 1970 ? There is no deeper meaning , may be simplistic thing to do


Why in JS we have milliseconds not in seconds?
Because there are many reasons , one is Performance
Animation frame 


What is Timestamp ?
A timestamp is an absolute point in time which is independent of location
Single point absolute no. srarts measures from Jan 1 1970
represented in ms, no. unit is UTC



What is TimeZone ?
 Its a rule set by us , based on region we keep it on our conveninence
To commubnincate to various regions


UTC - Coordinated Universal Time
It keeps ticking , shifting ot tke us to the future

Using the UTC we calculate date and time etc










*/


let now = new Date() //human readable way
// console.log(now); //Sun Sep 06 2026 15:52:13 GMT+0530 (India Standard Time)


//GEtters
// console.log(now.getDate()); //6 , as in 6th september

// console.log(now.getDay() + 1) //0 as sunday starts as 0 , o based index
// console.log(now.getFullYear()) //2026
// console.log(now.getMonth()) //8 as 0 is index
// console.log(now.getHours())   //15 as in 24Hr. time in railway 0-24
// console.log(now.getMinutes())  // 57 mins 0-59
// console.log(now.getSeconds())  // 45 secs 0-59
// console.log(now.getMilliseconds()); // 952 0-999



// console.log( Date.now() ); // MS from JAN 1970
// console.log(now.getTime()); //MS representation of time

//TO compare 2 times

// console.log(now.getTime);

// let d1 = new Date(1788690654128)
// let d2 = new Date(1788690654128)

// console.log( d1.getTime() === d2.getTime()  ); //true

// const date1 = new Date('2026-10-16') 
// const date2 = new Date('May, 10, 2020') 

// console.log(date1);  //Fri Oct 16 2026 05:30:00 GMT+0530 (India Standard Time)

// console.log(date2);  //Sun May 10 2020 00:00:00 GMT+0530 (India Standard Time)


//the problem with this is , 2026-10-16 , JS treats this as UTC mnidnight, if user time is behind UTC, means - something, lets say maericans
//this will display previous time , wrong time dependingh on your client timezone 
//TO fox it use T00:00:00+00:00
// const date1 = new Date('2026-10-16') 

// const cleanDate = new Date('2025-10-30T00:00:00+00:00')

// console.log(cleanDate); Thu Oct 30 2025 05:30:00 GMT+0530 (India Standard Time)

//All 5 ways to create time

// const date = new Date() //first.js:106 Sun Sep 06 2026 16:25:48 GMT+0530 (India Standard Time)

// const dateStr = new Date('2025-5-19') //Mon May 19 2025 00:00:00 GMT+0530 (India Standard Time)

// const dateTime = new Date('2025-10-30T10:30:00') //Thu Oct 30 2025 10:30:00 GMT+0530 (India Standard Time)

// const dateTSp = new Date(1788690654128) //Sun Sep 06 2026 16:00:54 GMT+0530 (India Standard Time)

// const dateAll = new Date(2025,11,1,10,45,12 ) //Mon Dec 01 2025 10:45:12 GMT+0530 (India Standard Time)
// //this only takes 0 index of months

// console.log(date);
// console.log(dateStr);
// console.log(dateTime);
// console.log(dateTSp);
// console.log(dateAll);

//this wont be 2024's Dec, as in o index 12 goes to next year
// const overflow = new Date(2024,12,1)   //Wed Jan 01 2025 00:00:00 GMT+0530 (India Standard Time)
// console.log(overflow);

//Getter methods

// const date = new Date('2024-01-15T03:00:00Z')
// console.log( date.toISOString().split('T')[0] );




//Setters, it mutates the date object

// const date = new Date()

// console.log(date.setDate(20));
// console.log(date.setFullYear(2020));
// console.log(date.setMonth(3));
// console.log(date.setHours(8));
// console.log(date.setMinutes(28));
// console.log(date.setSeconds(5));
// console.log(date.setMilliseconds(2000));
// console.log(date.setTime(1587351487000));


// Yes — all the set...() methods of JavaScript's Date object return a timestamp in milliseconds.
// The important thing is that they do two things:
// They modify the Date object
// They return the new time as milliseconds since January 1, 1970 UTC

//How to avoid mutation, Always clone our object

// function addDays(date, days) {
  
//   date.setDate( date.getDate() + days  )

//   return date
// }


// const  original = new Date()
// const future = addDays(original , 4)
 

// console.log(original); //Thu Sep 10 2026 16:57:56 GMT+0530 (India Standard Time)
// console.log(future); //Thu Sep 10 2026 16:57:56 GMT+0530 (India Standard Time)

//Not mutated way


// function addDays(date, days) {
  
// const result = new Date(date)

// result.setDate( result.getDate() + days )

// return result
// }


// const  original = new Date('2024-11-27')
// const future = addDays(original , 4)
 

// console.log(original); //Wed Nov 27 2024 05:30:00 GMT+0530 (India Standard Time)
// console.log(future); //Sun Dec 01 2024 05:30:00 GMT+0530 (India Standard Time)


// const  date = new Date('2024-12-27')

// console.log( date.getMonth() ); // 11
// console.log( date.getMonth() +1 ); //12 getMonth reutrns 0 index monehts , jus add + 1 to normal readable 


// const months = [
//   'January','February','March','April','May','June',
//   'July','August','September','October','November','December'
// ];
//Array way also useful to get human readable months
// console.log( months[date.getMonth()] ); // December


// function getTodayComp() {
//   const now = new Date()
  
//   return{
// year : now.getFullYear(),
// month : now.getMonth()+1,
// day : now.getDay()
// }}

// console.log(getTodayComp());

//the problem with above fn is it shows based on your local machine time and date, if i save it in DB ,
//  and someone from NewYork opens it shows my local machine saved time and date not his, so we know that 
// get has 2 things, one normal one UTC , so use UTC that is common and will handle all timezones based on their regions
//because in DB we 're supposed to stotre in Uniform UTC format not in IST or GMT 


// For a timestamp representing an exact moment:

// 1. Store → UTC
// For example, your backend/database stores:

// 2026-09-06T14:30:00.000Z

// The Z means UTC.

// 2. Display → convert UTC to the user's timezone
// If you do:

// const date = new Date("2026-09-06T14:30:00.000Z");

// console.log(date.getDate());

// getDate() uses the environment's local timezone, so in a browser it will generally use the user's local timezone.

// You can also explicitly format it:

// console.log(date.toLocaleString());

// Or specify a timezone:

// console.log(
//   date.toLocaleString("en-US", {
//     timeZone: "America/New_York"
//   })
// );

// The important distinction
// Don't think:

// DB → UTC
// Display → getDate()

// as an absolute rule.

// Think:

//              EXACT MOMENT
//                   ↓
//           Store as UTC
//                   ↓
//               Database
//                   ↓
//           Read UTC timestamp
//                   ↓
//       Convert to desired timezone
//                   ↓
//              Display

// For example:

// Database:
// 2026-09-06T14:30:00Z
//           ↓
//      ┌────┴─────┐
//      ↓          ↓
//    India     New York
//   8:00 PM    10:30 AM

// So yes, getDate(), getHours(), etc. are useful when you intentionally want the local timezone of the environment.


//Validation of date, how to check is it an valid date


// function checkDate(date) {
// return date instanceof Date &&  !isNaN(date.getTime())
// }
// // console.log( checkDate(new Date() )); //true

// function safeParse(dateStr) {
//   if(!dateStr) return null
//   const date = new Date(dateStr) 
//   return checkDate(date) ? date : null

// }

// console.log(safeParse(new Date())); //Sun Sep 06 2026 17:43:13 GMT+0530 (India Standard Time)


//Date Math

// const MS = {
//   seconds : 1000,
//   minute : 1000 * 60,
//   hour : 1000 * 60 * 60,
//   day : 1000 * 60 * 60 * 24
// }

// // add 7 days from now 
// let today = new Date()

// let inseven = new Date(today.getTime() + 7 * MS.day )

// console.log( inseven ) //Sun Sep 13 2026 17:53:32 GMT+0530 (India Standard Time)

// let lastday = new Date( today.getTime() - 1 * MS.day )

// console.log(lastday); // Sat Sep 05 2026 17:55:14 GMT+0530 (India Standard Time)


// function addDays(date, days) {
  
//   const result = new Date(date )
//   result.setDate(result.getDate() + days )
// return result
// }


// console.log(addDays(new Date() , 2)); //Tue Sep 08 2026 18:02:21 GMT+0530 (India Standard Time)

//Diff between date

// const start = new Date('2024-10-5')
// const end = new Date('2024-11-15')

// const diffMs = end - start

// const diffDs = Math.floor(diffMs / (1000 *60 *60 * 24)  )

// console.log(`there are ${diffDs} days`); //there are 41 days


// function daysDiff(start, end) {

//   const ms = new Date(end) - new Date(start)
//   const result = Math.floor( ms / (1000 * 60 * 60 * 24 ))
//   return result

// }

// let days = daysDiff('2026-01-01','2026-02-01') 
// console.log( days )

// function monthDiff(start, end) {
  
//   const ms = new Date(end) - new Date(start)
//   const result = Math.floor(ms / (1000 * 60* 60 *24 * 30)  )
//   return result
// }

// const month = monthDiff('2026-01-01','2026-02-01')
// console.log(month)


// function monthDiff(start, end) {
//   const startDate = new Date(start)
//   const endDate = new Date(end)

//   return (
//     (endDate.getFullYear() - startDate.getFullYear()) * 12 +
//     (endDate.getMonth() - startDate.getMonth())
//   )
// }

// console.log(monthDiff('2026-01-01', '2026-02-01')) // 1



/*

function findAge(start, end) {
  
let startDate = new Date(start)
let endDate = new Date(end)

let years = endDate.getFullYear() - startDate.getFullYear()

let birthdayNotReached = endDate.getMonth() < startDate.getMonth() || 

(
endDate.getMonth() === startDate.getMonth() &&
endDate.getDate() < startDate.getDate()
)

if(birthdayNotReached){
  years--
}

return years

}

console.log(findAge('2000-05-11', '2026-05-06' )); //25
console.log(findAge('2000-05-11', '2026-09-06' )); // 26
*/


//enddateMonth is lesser ? we're asking is less than may like Jan, APril, March, FEsame goers too enddate if bday is on 11th is 1-10
//this both means bday has not reached yet



// function leapyear(year) {
  
// const isLeapYear =  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

// if(isLeapYear){
//   return `${year} is a leap year`
// }else{
//   return `${year} is not a leap year`
// }

// }

// console.log( leapyear(2000 ) ); //2000 is a leap year
// console.log( leapyear(2020 ) ); //2020 is a leap year
// console.log( leapyear(2002 ) ); //2002 is not a leap year

// DST

// In the US DST starts on the second Sunday in March at 2AM skipping to 3AM
// It ends in November(first Sunday of November, 2AM, repeating 1am to 1:59am)




// Points to note

// 1. STORE as UTC or timestamps
const stored = date.toISOString();  // '2024-01-15T12:00:00.000Z'
const timestamp = date.getTime();   // 1705320000000

// 2. COMPARE using timestamps
const isSameTime = date1.getTime() === date2.getTime();
const isBefore   = date1 < date2;  // Coerces to number
const isAfter    = date1 > date2;

// 3. PARSE ISO 8601 strings only
const safe = new Date('2024-01-15T12:00:00Z'); // Always specify Z or offset

// 4. NEVER mutate -- always clone
const cloned = new Date(original);
cloned.setDate(cloned.getDate() + 7);

// 5. MONTH is 0-indexed -- always add 1 for display
const month = date.getMonth() + 1; // 1-12

// 6. ADD DAYS with setDate() not raw milliseconds (DST-safe)
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// 7. USE UTC getters on the server
const serverYear = date.getUTCFullYear();











