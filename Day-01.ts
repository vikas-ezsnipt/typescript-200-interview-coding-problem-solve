// Write a program to check number is positive or negative 
// Method 1: Using Brute Force

const checkNumber = -12;

if(checkNumber > 0){
    console.log('positive number')
}else if(checkNumber < 0){
    console.log('Negative number');
}else{
    console.log('natural number:')
}


// Write a function to check given number positive or negative

function positiveNegative(evalNum: number){
    if(evalNum >0){
        console.log(`${evalNum} number is positive`);
    }else if( evalNum < 0){
        console.log(`${evalNum} number  is negative`);
    }else{
        console.log(`${evalNum} number is natural`);
    }
    return evalNum;

}positiveNegative(0); // to check number what you want change like in call function
positiveNegative(-2);
positiveNegative(56);