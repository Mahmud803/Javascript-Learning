const ar=[1,2,3,4,5,6]
for(const num of ar)
{
   // console.log(num);
    
}

const greet="hello world";
for(const st of greet)
{
    //console.log(st);
    
}

//iterate over map

const mp=new Map();

mp.set('age',30);
mp.set('name','imran');
mp.set(true,'boolean');

// for(const [k,v] of mp)
// {
//     console.log(k,v);
    
// }

// for(const k of mp.values())
// {
//     console.log('key: ',k);
    
// }
console.log(mp.get('name'));
mp.clear()
mp.forEach((k,v)=>{
    console.log(k,v);
    
})
