// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("inner :- ", a);
    function  addnum (){
        
    }
    
   
}

// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// }
 
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "nishant"
    function two() {
        const website =  "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()  
}

// one()               //known as closers


if (true) {
    const username = "Nishant"
    if (username == "Nishant") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


//+++++++++++++++++++++++++++++++++++++ Intersting +++++++++++++++++++++++++++++++++

console.log(addone(5));
 

function addone(num) {                //this is a declaration
    return num + 1 
}



// addtwo(4)   //throws an error because here i declare function but holds in varraibles
  

const addtwo = function (num){
    return num + 2
}
