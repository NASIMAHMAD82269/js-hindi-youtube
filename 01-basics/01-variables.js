const accountId = 15552
let accountEmail ="nasim@google.com"
var accountPassword ="1203"
accountCity ="Ramnagar"

// accountId = 3  // not allowed

accountEmail = "nasim.com"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/


console.table([accountEmail,accountPassword,accountId,accountCity])