// Write a program to check a given number, even or odd. 
// ** Method 1 : Using Brute Force ** 


const evenNum: number = 8;
if(evenNum %2 ===0){
    console.log(`number is ${evenNum} even:`)
}else{
    console.log(`number is ${evenNum} odd:`)
}



// Method 2: Using the function

function checkEven(counter: number) {
    if (isNaN(counter)) {
        console.log(`${counter} is not a valid number.`);
    } else if (counter % 2 === 0) {
        console.log(`${counter} is an even number.`);
    } else {
        console.log(`${counter} is an odd number.`);
    }
    return counter;
}

checkEven(3); // 3 is an odd number
checkEven(6); // 6 is an even number
checkEven(0); // 0 is an even number
