function first()
{
    const x=500;

    function sec()
    {
        const y=600;
        console.log(x);
        
    }
    // console.log(y) //error:ReferenceError: y is not defined
    sec();
}
// first();
 
function alldollar(value)
{
    return '$'+value;
}
console.log(alldollar('10'))

//a function assign in variable

const addPlusSign=function(value){
    return '+'+ value;
}
console.log(addPlusSign(21))
