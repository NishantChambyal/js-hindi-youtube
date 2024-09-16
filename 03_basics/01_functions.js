

function sayMyName() {
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}


// sayMyName()

// function addTwoNumbers (number1 , number2){
//   console.log(number1 + number2);
 
// }


function addTwoNumbers (number1 , number2){
//   let result  = number1 + number2
//     return result
    return number1 + number2
}

const result = addTwoNumbers(6,6)

// console.log("Result is :- " , result);



function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Plzz enter UserName");
        return
        
    }

    return `${username} just logged in `
}

// console.log(loginUserMessage("nishant"));
// console.log(loginUserMessage());



function calculateCartPrice (val1 , val2 ,...num1){
    return num1
}
 
console.log(calculateCartPrice(200 , 400 , 500,2000));


// const user = {
//     username: "nishant",
//     price: 199
// }

function handelObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handelObject(user)

handelObject({
    username: "sam",
    price: 655
})


// const myNewArray = [200, 400, 100 , 600]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
