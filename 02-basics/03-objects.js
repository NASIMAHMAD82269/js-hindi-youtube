// singleton

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "NASIM",
    AGE: 18,
    [mySym]: "myKey1",
    location: "Ramnagar",
    email: "nasim@google.com", 
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser);
// console.log(JsUser[mySym]);

// JsUser.email = "nasim@apple.com"
//  Object.freeze(JsUser)
// JsUser.email = "nasim@baot.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user"); 
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


