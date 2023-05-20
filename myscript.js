
let sum = 0;

for(i = 0; i < 10; i ++){
    let userNumber = parseInt(prompt('Enter a number '));
    
    if(userNumber != isNaN){
        sum += userNumber
    }

}

console.log(sum)