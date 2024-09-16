// singleton
// object.create



// objects literals

let mysym = Symbol("key1")

const jsUser ={
    name: "nishant",
    "full name": "chambyal",
    age: 18,
    [mysym]: "mykey1",
    location: "Shimla",
    email: "nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); // this is  not a good way to access the value of an key
// console.log(jsUser["email"]); 
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "NishantChatGPT.com"

// Object.freeze(jsUser) // freez the changes in obj

jsUser.email = "lalal@gmail.com"

// console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hello Js user");
    
}

jsUser.greetings2 = function(){
    console.log(`Hello js users , ${this.name}`);
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());

console.log(jsUser);


