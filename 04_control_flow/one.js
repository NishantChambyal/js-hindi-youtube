// if statement

const isUserLoggedIn = true;
const temperature = 41;

// if (temperature === 41) {
//     console.log("less then 50");

// }
// else{
//     console.log("temperature is greater then 50");
// }

// console.log("100% execution");
// < , > , <= , >=, == , != , === , !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user Power: ${power}`);

// }

// console.log(`user Power: ${power}`);  // cannot acess the power outside its scope

// const balance = 1000

// if (balance > 500) console.log("test") , console.log("test2"); // do not write code like this

// if (balance < 500) {
//     console.log("less than 500");

// }
// else if (balance < 750) {
//     console.log("less then 750");

// }
// else if (balance < 900 ) {
//     console.log("less then 900");

// }
// else{
//     console.log("less then 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy cources");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}


// && and (both condition will true)
// || or (only one condition will true)






// nullish coalescing operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 50 ?? 10

// console.log(val1);



// Terniary operator

// condition ? true : false

const iceTeaPrice  = 100 

iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More Than 80");

