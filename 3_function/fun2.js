

// console.log(registerUser('imran'))

// function calculateCartPrice(num1)
// {
//     return num1;
// }

// console.log(calculateCartPrice(4,3,2,1,6))
// output: 4


// function calculateCartPrice(...num1)
// {
//     return num1;
// }

// console.log(calculateCartPrice(4,3,2,1,6))

//output: [ 4, 3, 2, 1, 6 ]

function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}

// console.log(calculateCartPrice(4,3,2,1,6))
//output: [ 2, 1, 6 ]


const user={
    username:'imran',
    price:199
};

function handleObject(anyObject)
{
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

handleObject(
    {
        username:'sojib',
        price:100
    }
)

function returnSecondValue(myArray){
    return myArray[1];
}

const arr=[1,2,3,4,5,6]
// console.log(returnSecondValue(arr))

// function registerUser(user){
//   if(!user)
//   {
//     user='Bot';
//   }
//   return user + ' is registered';
// }

// console.log(registerUser(''))
//output: Bot is registered

function registerUser(user='bot'){
   
    return user + ' is registered';
  }
  
//   console.log(registerUser('imran'))


//rest operator
function sum(...num)
{
let total=0;

for(const n of num)
{
    total+=n;
}
return total;
}
console.log(sum(1,2,3,4));

//passing object as argument

const users={
    id: 1,
    name:'imran',
}

// function register(user){
// console.log(`${user.name} has registered
//     and ${user.id} is  his id number`);
// }
// register(users);

function getRandom(ar)
{
console.log(ar.length)
const randomIndex=Math.floor(Math.random()*ar.length)
console.log(randomIndex);

const item=ar[randomIndex];
return item;
}

const arrr=[1,2,3,4,5,6,7];
console.log(getRandom(arrr));


