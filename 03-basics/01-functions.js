function name(params) {
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("M");
    
}

// name()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
//    let result = number1 + number2
//    return result
      return number1 + number2
}

// const result = addTwoNumbers(6, 6)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("NASIM"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 600));

const user ={
    username: "Nasim",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

// handleObject(user)

handleObject({
    username: "Shamim",
    price: 399
})

const myNewArray =[200, 300, 500, 600]

function returnSecondValue(getArray){
     return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 600]));
