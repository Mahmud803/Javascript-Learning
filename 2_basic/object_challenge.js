const library=[
{
    title:'the book',
    author:'imran',
    status:{
        own:'true',
        reading:"false",
        read:"false"
    }
},
{
    title:'the khata',
    author:'shuvo',
    status:{
        own:'true',
        reading:"false",
        read:"false"
    }
},
{
    title:'the pencil',
    author:'suhel',
    status:{
        own:'true',
        reading:"false",
        read:"false"
    },
},

];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const {title:firstbook}=library[0];
// console.log(firstbook);

const library_json=JSON.stringify(library);
console.log(library_json);
