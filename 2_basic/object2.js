// const todo=new Object();
// const todos={}
// todo.id=1;
// todo.title="shopping list";
// todo.completed=false;
// const todo1=new todo();

 
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

//  console.log(regularUser.fullname.userfullname.firstname);

const person={
    details:{
        name:{
            firstname: "mahmud",
            lastname:"imran",
        },
    },
};

// console.log(person.details.name.lastname)

const obj1={a:1,b:2};
const obj2={c:1,d:2};
const obj3={obj1,obj2}
// console.log(obj3);
// output: { obj1: { a: 1, b: 2 }, obj2: { c: 1, d: 2 } }

const obj4=Object.assign({},obj1,obj2);
// console.log(obj4)

const obj5={...obj1,...obj2}
// console.log(obj5);

//+++++++++arrrays of object++++++++++++

const people=[
    {id:1,name:'john'},
    {id:2,name:'sara'},
    {id:3,name:'mike'},
];
// console.log(people[1].name)

const tiger={
    height:43,
    name:'mimi',
    sound:'mew',
    weight:53,
}

const key=Object.keys(tiger)
console.log(key)
let values=Object.values(tiger)
console.log(values);
let len=Object.keys(tiger).length;
console.log(len);
let entry=Object.entries(tiger)
console.log(entry)

//hasOwnProperty()

const x=tiger.hasOwnProperty('weight')
console.log(x);





