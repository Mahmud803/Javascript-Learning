// function getCelsius(farenhite)
// {
//     return ((farenhite-32)*5)/9;
// }
// console.log(getCelsius(32))

// const getCelsius=(farenhite)=>((farenhite-32)*5)/9;
// console.log(`the temperature is ${getCelsius(32)} \xB0C`);


//+++++++++++++challenge 2+++++++++

// function minMax(ar){
//     const min=Math.min(...ar);
//     const max=Math.max(...ar);

//     return {
//         min,
//         max,
//     };
// }
// console.log(minMax([4,3,56,2,6,2,1]));

//arrow function
const minMax=(ar)=>{
    const x=Math.min(...ar)
     const y=Math.max(...ar)
     return{
        x,
        y,
     };
}
ar=[43,2,5,6,2,86,43,32];
// console.log(minMax(ar))

//++++++++IIFE challenge+++++++

// ((a,b)=>{
//     const len=a*b;
//     console.log(`The area of a rectangle with a length of ${a} and a width of ${b} is ${len}`)
//    console.log(len)
// })(10,5);

(function(a,b){
    const area=a*b;
    console.log(area);
})(10,5)