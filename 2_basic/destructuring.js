/* const todo={
    id:1,
    title:'take out trash',
}; */
// const {id,title}=todo;
// console.log(id,title);
// console.log(todo.id,todo.title);

const todo={
    id:1,
    title:'take out trash',
    user:{
        name:'john',
    },
};

const{
    user:{name},
}=todo;

// console.log(name)

// const {id:todoID}=todo;
// console.log(todoID);

const number=[10,20,30,40,50,60];
const [f,s,...rest]=number;
console.log(rest);

//json

const obj={
    name:'imran',
    id:11909052,
    city:'kotbari'
};

//turn object into json string
const str=JSON.stringify(obj);
// console.log(str);

//turn json into object
// const obj2=JSON.parse(str);
// console.log(obj2);

// console.log(str.name);
// console.log(obj2.name);

// console.log(str[0]);

//+++++++++++++++json array++++++++

const post=[
    {
        "name":'imran',
        "id":1,
         "city": "kotbari",
    },
    {
        "name":'sojib',
         "id":2,
         "city":'bandarban',
    },
    {
        "name":'shoikot',
        "id":3,
        "city":'japan',
    }
];

const arr=JSON.stringify(post);
console.log(post);

const ar=JSON.parse(arr)
console.log(ar[0].name);





