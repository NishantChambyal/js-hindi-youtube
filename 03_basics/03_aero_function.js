const user = {
  userName: "nishant",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();

// user.userName = "sam";

// user.welcomeMessage();

// console.log(this);

// function chai (){
//    let userName = "nishant"
//    console.log(this.userName);

// }

// chai()

// const chai  = function (){
//    let userName = "nishant"
//    console.log(this.userName);
// }

// chai()

// const chai  =  () => {
//    let userName = "nishant"
//    console.log(this);
// }

// chai()

// const addTwo = (num1 , num2) => {
//    return num1 + num2
// }

// console.log(addTwo(22 , 4));

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2); 

const addTwo = (num1, num2) => ({userName: "nishant"}); 
console.log(addTwo(22, 4));



// const myArr = [2,5,6,4,9]

// myArr.forEach()