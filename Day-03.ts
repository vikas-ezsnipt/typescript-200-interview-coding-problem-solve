// Find the Sum of The First N Natural Numbers in ts.
// Method 1 : Using for Loop

let natural_number = 15;
let counter = 0;

for (let i = 1; i <= natural_number; i++) {  // Start from 1, go up to and including 15
    counter += i;  // Add current number to counter
}

console.log(`Sum of the first ${natural_number} natural numbers is: ${counter}`);


//Method 2 : Using Formula for the Sum of Nth Term

const num: number = 15;
console.log(((num*(num+1)/2)));


//Method 3: write a programme to print sum of nth term ;


function myNumber(count_num: number) {
    let new_sum = 0;
    for (let x = 1; x <= count_num; x++) {
        new_sum += x;
    }
    return new_sum;  // Return the sum, not the original count_num
}

console.log(myNumber(5));  // Output should be 15 (1 + 2 + 3 + 4 + 5)
