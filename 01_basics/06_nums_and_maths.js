const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));     // 100.00  only 2 precision value

// console.log(typeof balance);

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));



/// +++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++


console.log(Math);


console.log(Math.abs(-4));  //change the - to + but not + to -
console.log(Math.round(4.4)); // if 0.4 the value is 4  and 0.5 & > 0.5 the value is 5
console.log(Math.ceil(4.4));  // ceil value which is  5
console.log(Math.floor(4.2)); // floor value which is 4
console.log(Math.min(4,3,6,8,1));  // gives the min value of array which is 1 here
console.log(Math.max(4,3,6,8,1));  // gives the max value of array which is 8 here

console.log(Math.random());  // gives random values between 0 to 1

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10 
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min); //  important formula if we want random number between min and max value
  



