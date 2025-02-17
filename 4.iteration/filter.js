const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const value= numbers.forEach( (item)=>{
   // console.log(item);
    
})
console.log(value);
//foreach does not return anything


const mynum=numbers.filter( (n)=>
{
   return n>3;
})
//console.log(mynum);

 const user=[
    {name:'Ali',age:22},
    {name:'imran',age:23},
    {name:'sojib',age:34}
 ];

 const adult=user.filter(user => user.age>22);
//  console.log(adult);
 
const newNum=[];

numbers.forEach( (x)=>{
    if(x>3)
    {
        newNum.push(x);
    }
});
// console.log(newNum);

const companies=[
    {name:'c1', category:'finance',start:1921,end:2023},
    {name:'c2', category:'auto',start:1990,end:2040},
    {name:'c3', category:'tech',start:1925,end:2023},
    {name:'c4', category:'retail',start:1971,end:2030},
    {name:'c5', category:'tech',start:1991,end:2023},
    {name:'c6', category:'retail',start:1924,end:2024},
]

const cmp=companies.filter( (bk)=>bk.end-bk.start >=100);
console.log(cmp);
