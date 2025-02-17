const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum=numbers.reduce( (acc,currVal)=> acc+currVal,0);
// console.log(sum);

const sum=numbers.reduce(function(acc,currVal){
    return acc+currVal;
},0)

console.log(sum);

const cart = [
    { name: 'Prooduct 1', price: 130 },
    { name: 'Product 2', price: 150 },
    { name: 'Product 3', price: 175 },
  ];

//   const total=cart.reduce( function(acc,prod){
//     return acc+prod.price;
//   },0)

const total=cart.reduce((acc,prod)=>acc+prod.price,0)

  console.log(total);
  

