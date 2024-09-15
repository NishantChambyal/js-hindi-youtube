const marvelHeros  = ["thor" , "ironman" , "hulk" , "spiderman" ]
const dc_heros = ["superman", "flash" , "batman"]
 
// marvelHeros.push(dc_heros)   // push method can push in existing array and update the array

// console.log(marvelHeros);
// console.log(marvelHeros[4][1]); // not a good sytax

const allHeros = marvelHeros.concat(dc_heros)  // concat is the method which concat the array but not changing the existing array it returns a new  array
// console.log(allHeros);

// console.log(marvelHeros);    
// console.log(dc_heros);

const all_new_heros = [...marvelHeros , ...dc_heros]  // same as concat but this is known as (spread Operator) which concat the array but not changing the existing array it returns a new  array
// console.log(all_new_heros);

// console.log(marvelHeros);    
// console.log(dc_heros);


const another_array = [1 , 2 , 3 , [4,5,6] , 7 ,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

// console.log(Array.from({
//     name: "nishant"            // interesting
// }));
 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 ,score3));


// let a = 'nishant'
// let b = Array.from(a)
// console.log(b);

// console.log(a);



