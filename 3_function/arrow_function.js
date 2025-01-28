const user={
    userName:'imran',
    price:99,

    welcomeMessege:function(){
        console.log(`${this.userName} ,welcome to website`)
        console.log(this)
    }
}

//this is used to refer the current context

// user.welcomeMessege()
// user.userName='sojib'
// user.welcomeMessege()
// console.log(this)

function chai(){
    let username="sojib"
    console.log(this.username);   
}
// chai()

// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(1,2));

const add=(a,b)=>{
    return a+b;
}
console.log(add(3,2));

const adds=(a,b)=>a+b
console.log(adds(4,3));

//object literal
const addtwo=(num1,num2)=>({usernames:'sojibs'})
console.log(addtwo(4,3))

//single argument shorthand

const add10=(a)=>a+10
console.log(add10(2))

const numbers=[1,2,3,4,5];

/* numbers.forEach(function(number)
{
    console.log(number)
});
 */

// numbers.forEach((number)=>console.log(number));


numbers.forEach((element)=>
    {
        console.log(element)
    });

    