//date

let myDate=new Date();
console.log(typeof myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let myCreateDate=new Date(2023,1,23,5,3)
// let myCreateDate=new Date("2023-01-23")
let myCreateDate=new Date("01-12-2025")

let myTimeStamp = Date.now();

// console.log(myCreateDate.toLocaleString());
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




