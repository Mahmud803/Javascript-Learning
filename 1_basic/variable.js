const accoutTD=21332
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="dhaka"
let accountState;

/*
prefer not to use var
because of issue in block and functional scope
*/

//accountID=2 is not allowed 
console.log(accountCity);


console.table([accountEmail,accountPassword,accountCity,accountState]);
