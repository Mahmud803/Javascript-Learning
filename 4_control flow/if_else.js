const x=10;

// if(x>5){
//     console.log(`${x} is greater than 5`);
    
// }
// if(x===10)
// {
//     console.log(`${x} is equal to 10`)
// }

// if(x>5)
// {
//     console.log(`${x} is greater`);
// }
// else{
//     console.log(`${x} is smaller`)
// }

const d=new Date();
const hour=d.getHours();

if(hour<12)
{
    console.log('good morning');
    
}
else if(hour<18)
{
console.log('good noon');

}
else{
    console.log('good night');
}