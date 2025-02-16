// for(let i=0;i<Infinity;i++)
// {
//     console.log('number: '+i);
    
// }

let i = 1; // Initialize i before the loop

while (i <= 10) {
    console.log('number: ' + i);
    let j = 1;
    while (j <= 10) {
        console.log(i + ' * ' + j + ' = ' + i * j);
        j++;
    }
    i++; // Increment i to avoid infinite loop
}
