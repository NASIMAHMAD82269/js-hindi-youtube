// Primitive

// 7 types : String, Number, Boolean, null , undefined, Symbol, BigInt

const score = 10
const scoreValue = 10.2

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 12334566789998876543210n



// Reference (Non primitive)

// Array, Objects, Function

const heros = ["krissh", "shaktiman"]
let myObj = {
    name: "Nasim Ahmad",
    age:20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);