const numbers = [1, 2, 3, 4, 5];

const nums=numbers.map( (n)=>n+1)
// console.log(nums);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

  const CompanyNames=companies.map( (company)=> company.name)
// console.log(CompanyNames);

const CompanyInfo=companies.map( (cmp)=>[cmp.category,cmp.name])
console.log(CompanyInfo);

const sqNum=numbers.map( (nm)=>nm*10).map((nm)=>nm+1).filter((num)=>num>20);
console.log(sqNum)
