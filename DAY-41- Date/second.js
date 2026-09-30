


// STOP Using Date Libraries! The Native JS Intl API is Better 🔥

/**
INTL - INternalization of number formation , pluralization, currency, date, time, 


Before INTL existed, formatting Date and Time to thet international users, it was a nightmare
you have to manually lookup managing tables, 


The same moment in time: March 15, 2026, 2:30 PM UTC
How it gets displayed around the world:

United States (en-US) → 9/6/2026, 2:30 PM
United Kingdom (en-GB) → 06/09/2026, 14:30
Germany (de-DE) → 06.09.2026, 14:30
Japan (ja-JP) → 2026/9/6 14:30
Saudi Arabia (ar-SA) → ٦‏/٩‏/٢٠٢٦، ٢:٣٠ م
India - Hindi (hi-IN) → 6/9/2026, 2:30 pm / locale-dependent Hindi formatting
China (zh-CN) → 2026/9/6 14:30
Korea (ko-KR) → 2026. 9. 6. 오후 2:30
Russia (ru-RU) → 06.09.2026, 14:30
Brazil (pt-BR) → 06/09/2026, 14:30

CLDR - Common Local Data Repository




const fmt = new Intl.DateTimeFormat()

console.log( fmt.format(new Date('2026-03-15'))); // it gives me month, date, year like 3/15/2026

console.log(fmt.format()) //9/6/2026 , when you dont pass anything then it reutrns today date


console.log( fmt.format(Date.now()) ); //9/6/2026

console.log(fmt.format(1788712682783));  //9/6/2026


    const usFmt = new Intl.DateTimeFormat("en-US");
    const ukFmt = new Intl.DateTimeFormat("en-GB");
    const deFmt = new Intl.DateTimeFormat("de-DE");
    const jaFmt = new Intl.DateTimeFormat("ja-JP");

    const date = new Date("2026-03-15T14:30:00Z");

 console.log("usFmt =>", usFmt.format(date)); //usFmt => 3/15/2026
 console.log("ukFmt =>", ukFmt.format(date)); //ukFmt => 15/03/2026
 console.log("deFmt =>", deFmt.format(date)); //deFmt => 15.3.2026
 console.log("jaFmt =>", jaFmt.format(date)); //jaFmt => 2026/3/15
 
 
 
 INTL - Format Date and Time with Options
 it takes 2 values, one in locales (en-US) , 
 another one way of how the date can be '2026-06-09'


 */


// const date = new Date()

// const dtfmt = new Intl.DateTimeFormat('en-US', {
//      // dateStyle : 'full'    //Monday, September 7, 2026
//     //    dateStyle : 'long' // September 7, 2026
//     // dateStyle : 'medium'// Sep 7, 2026
//     // dateStyle : 'short' // 9/7/26

// })


// console.log(dtfmt.format(date)); 

//INdia's TIme zone is UTC + 5:30, 
// const time = new Date()

// const tmfmt = new Intl.DateTimeFormat('en-US',{
//    //  timeStyle :'full'         //6:42:49 AM India Standard Time
//    //  timeStyle : 'long'        //6:43:08 AM GMT+5:30
//     // timeStyle : 'medium'     //6:43:49 AM
//     // timeStyle : 'short'      //6:43 AM
//   timeZone :'America/New_York', //9/6/2026 it is still 6SEp in America
//    timeZoneName : 'long'             //9/7/2026, India Standard Time
 
    // dateStyle : 'long',
    // timeStyle : 'long'
//September 7, 2026 at 6:51:16 AM GMT+5:30


// })

// console.log(tmfmt.format(time));

// const dfmt = new Intl.DateTimeFormat('ja-JP',{
//     dateStyle : 'long',
//     timeStyle : 'long',
//     //2026年9月7日 6:53:43 GMT+5:30
// })

// console.log(dfmt.format(date));



// const time = new Date();

// const formatter = new Intl.DateTimeFormat("en-US", {
//     weekday: "long",
//     year: 'numeric',
//     month: "long",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     timeZoneName: 'long',
//     timeZone: "Asia/Kolkata",
//     hour12:true
// });

// console.log(formatter.format(time)); //Monday, September 07, 2026 at 07:11 AM India Standard Time





// const time = new Date();

// const india = new Intl.DateTimeFormat("en-IN", {
//     timeZone: "Asia/Kolkata",
//     dateStyle: "full",
//     timeStyle: "long"
// });

// const newYork = new Intl.DateTimeFormat("en-US", {
//     timeZone: "America/New_York",
//     dateStyle: "full",
//     timeStyle: "long"
// });

// console.log(india.format(time)); // Monday, 7 September 2026 at 7:21:37 am IST
// console.log(newYork.format(time));  //  Sunday, September 6, 2026 at 9:51:37 PM EDT


//Relative Time formatting

// let time = new Date()

// let rtf = new Intl.RelativeTimeFormat('en-US',{
//         style:  'long',
//         numeric : 'auto'
//     }
// )
//  console.log(rtf.format( -7,'month'  )) //7 months ago
//   console.log(rtf.format( 7,'days'  )) //in 7 days
//  console.log(rtf.format( -7,'week'  )) //7 weeks ago
//  console.log(rtf.format( -7,'year'  )) //  7 years ago
//  console.log(rtf.format( -7,'hours'  )) // 7 hours ago
//  console.log(rtf.format( -7,'minutes'  )) // 7 minutes ago
//  console.log(rtf.format( -7, 'seconds'  )) // 7 seconds ago
//  console.log(rtf.format( 0, 'second'  )) // now

// let time = new Date()

// let rft = new Intl.RelativeTimeFormat('en-US',{
//     style : 'long',
//     numeric :'auto'
// })

// console.log( rft.formatToParts('-3', 'days') );



//Performance
// let time = new Date()

// const fmt = new Intl.DateTimeFormat('en-US',{
//     weekday : 'long'
// }) .format(time)

// console.log(fmt); //Monday

//Best use case using a fn not direct new it creates an object and cinverts to timeZone everytime
// function formatter(time) {
//     return fmt.format(time)
// }

// console.log(formatter(time)); //Monday


// const languages = [
//     "en-US",
//     "ta-IN",
//     "hi-IN",
//     "fr-FR",
//     "de-DE",
//     "ja-JP",
//     "zh-CN",
//     "ar-SA",
//     "ko-KR"
// ];



// const supported = Intl.DateTimeFormat.
// supportedLocalesOf(navigator.languages,{
//     localeMatcher : 'best fit'
// });

// console.log(supported);







