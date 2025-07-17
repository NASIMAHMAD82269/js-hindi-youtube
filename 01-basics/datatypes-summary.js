// Primitive



// 7 types : String, Number, Boolean, null , undefined, Symbol, BigInt

// const score = 10
// const scoreValue = 10.2

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId)

//  const bigNumber = 12334566789998876543210n



// Reference (Non primitive)

// Array, Objects, Function




// ***************************************************

// Stack (Primitive), Heap(Non-Primitive)

let myYutubename = "Nasim_hindi animated"
let anothername = myYutubename
anothername = "unique330"
console.log(myYutubename);
console.log(anothername);

let userOne = {
    email: "nadim@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nasim@google.com"

console.log(userOne.email);
console.log(userTwo.email);