const name = "nasim"
const repoCount = 30

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

const gameName = new String(`nasim`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-5, 5)
console.log(anotherString);

const newStringOne = "  nasim  "
console.log(newStringOne);
console.log(newStringOne.trim());