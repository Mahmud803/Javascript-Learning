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
first();
