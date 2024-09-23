const useEmail = [];

if (useEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false  = 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy value

// true = "0" , 'fasle' , " " , [] , {} , function(){}


// if (useEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObject = {}

if (Object.keys(emptyObject).length ===0) {
    console.log("Object is empty");
     
}


// false == 0
// true

// false == ''
// true

// 0 == ''
// true