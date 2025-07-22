const user = {
    username: "Nasim",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  Welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = "ahmad"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     console.log(this)
// }

// one()

const one = ()  => {
    let username = "Nasim"
    console.log(this);
}

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => ( num1 + num2)


const addTwo = (num1, num2) => ({username: "Nasim"})


console.log(addTwo(5, 5))

// const myArray = [1, 2, 3, 5, 6]

// myArray.forEach()