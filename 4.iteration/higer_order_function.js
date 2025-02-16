const coding=["js","ruby","java","python"];
coding.forEach(function(val) {
  //  console.log(val);
});
coding.forEach((element) => {
   // console.log(element);
    
});

function printme(item)
{
    console.log(item);
}
//coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
    //console.log(item,index,arr);
    
})

const mycoding=[
    {
        languageName: 'javascript',
        languageNameFile: 'js'
    },
    {
        languageName: 'java',
        languageNameFile: 'jv'
    },
    {
        languageName: 'python',
        languageNameFile: 'py'
    },
];
mycoding.forEach( (item)=>{
    console.log(item.languageName)
})