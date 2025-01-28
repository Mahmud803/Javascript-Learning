//Immediately Invoked Function Expressions (IIFE)
//fix  global scope pollution.
// const user='irm'
// const user='johd' // Results in error

//To fix this, I could create an IIFE

/* (function ()
{
    const user='john';
    console.log(user);
    
})();

console.log(user) */

//IIFE decleration
const user='sojib';
(function(){
    const user='imran';
    console.log(user);
})();
// console.log(user)

//IIFE decleration with taking parameter

(function(name){
    console.log('hello '+name);
})('john');

//using arrow function
(()=>{
    console.log("hello from the iife")
})();

(function hello(){
    console.log("hello how are you");
    // hello()
})();

// hello(); //give error

(function hello(count){
    if(count<=0) return;
    console.log("hello ",count);
    hello(count-1);
})(3)