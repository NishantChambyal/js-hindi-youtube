// for of


// ["",""]

// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}


const greetings = "Hello World!"

for (const greet of greetings) {

    if (greet == " ") {
        // break
        continue
    }
    // console.log(`Each char is: ${greet}`);
    
}



//  Maps


const map =  new Map()

map.set('IN', "india")
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('IN', "india")

console.log(map);

for (const [key , value] of map) {
    console.log(key, ":-" ,value);
    
}


const myObject = {
    'game1': 'nfs',
    'game2': 'gta',
    'game3': 'spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key , value);                     //not working
    
// }