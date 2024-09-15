const name = "nishant"

const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nishant021-hc-jj')


console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(2,6)

console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newString1 = "  Nishant  "

console.log(newString1);
console.log(newString1.trim());   // The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.


const url = "https://nishant.com/hitesh%20Choudhary"


// console.log(url);

console.log(url.replace('%20', '-'));

console.log(url.includes('nishant'));
console.log(url.includes('sundar'));
console.log(url.startsWith('https'));
console.log(url.endsWith('ni'));

console.log(gameName.split('-'));








