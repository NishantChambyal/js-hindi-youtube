const accountId = 144553    

let accountEmail = "Nishant@google.com"

var accountPassword = "12345"

accountCity = "Shimla"

let accountState;

// accountId = 2   //not allowed

accountEmail = "hc@gmail.com";

accountPassword = "231212121"
accountCity = "bangluru"

console.log(accountId);

 /* 
 prefered not to use var 
 because of issue in block scope and function scope
*/


console.table([accountEmail, accountId , accountPassword , accountCity, accountState])