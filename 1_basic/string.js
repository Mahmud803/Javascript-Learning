const name="mahmud"
const repoCount=50

console.log(name+repoCount+" value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('imranmahmud')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('m'));

const newString= gameName.substring(0,2);
console.log(newString);

const anotherString=gameName.slice(-10,4)

console.log(anotherString);

const newStringOne="   sojib    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https//imran.com/imran%20mahmud"
console.log(url.replace('%20','-'))

console.log(url.includes('imran'))
console.log(url.includes('sojib'))





