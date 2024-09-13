// Find the Greatest of the Two Numbers in typescript Language.

// Method 1: Using if-else Statements.

const counterNum1: number = 50;
const counterNum2: number = 90;

if(counterNum1 > counterNum2){
    console.log(`Greatest Number is: ${counterNum1}`);
}else{
    console.log(`Greatest number is: ${counterNum2}`);
}


// Method 2: Using Ternary Operator

const maxNumber1: number = 30;
const maxNumber2: number = 40;

const result = (maxNumber1 > maxNumber2) ? maxNumber1 : maxNumber2;

console.log(result); // Output: 40


// Method 3: Using the Ternary Operator;

function maxNumber(counter1: number, counter2: number){
    if(counter1 > counter2){
        console.log(`${counter1} is bigger number`)
    }else{
        console.log(`${counter2} is bigger number`)
    } return [counter1, counter2];
}console.log(maxNumber(89, 90));