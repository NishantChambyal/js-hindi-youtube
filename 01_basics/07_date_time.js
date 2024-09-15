//Dates

let myDate = new Date()
console.log(myDate.toString());   // current U.S time zone
console.log(myDate.toDateString());  // only day/mm/dd/yy
console.log(myDate.toISOString());  // default time zone of U.S
console.log(myDate.toLocaleString());  // mm / dd / yy with detailed time
console.log(myDate.toLocaleTimeString());  //  detailed time 
console.log(myDate.toTimeString());  //  detailed time with cordinates of US Time Zone
console.log(myDate.toJSON());  //  default time zone of U.S
console.log(myDate.toUTCString());  //  only day , mm/dd/yy


console.log(typeof myDate);


// let myCreatedDate = new Date(2024 , 8 , 15 )
// let myCreatedDate = new Date(2024 , 8 , 15 , 5 , 3 )
//                            yy    mm   dd  h   m
// let myCreatedDate = new Date("2024-01-14" )
let myCreatedDate = new Date("01-15-2024" )
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);    // milliseconds from 1 jan 1970

// console.log(myCreatedDate.getTime());
// console.log(Math.floor( Date.now()/1000));


let newDate = new Date()

// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());


//  console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default' , {
    weekday: "long",
    
})
  






