const mysym=Symbol('key1')
const person={
    name:'mahmud imran',
    age:26,
    [mysym]:'key1',
    department:'ICT',
    "last_name":'sojib',
    goal:['developer','enginer'],
    hobby:['reading books','jikir'],
};
// console.log(person)
// Object.freeze(person)//freeze the key that unchangeable

// person.age=43
// delete person.hobby;
// console.log(typeof person[mysym])
// console.log(person.age);

person.greet=function(){
    console.log(`hello how are you  ${this.name}`)
};
console.log(person.greet())

const person2={
    'full name': 'Mahmud irman',
    'last name':'sojib'
};
console.log(person2['full name'])
