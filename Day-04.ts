// Find the Sum of the Numbers in a Given Range.

// Method 1: Using Brute Force

/*In this method we’ll use loops like for, while and do while to sum all the numbers that lay in,
 the intervals of the given input integers.
*/

let num1: number = 3;
let num2: number = 6;
let sum: number = 0;

// Loop through numbers from num1 to num2 (inclusive)
for (let i = num1; i <= num2; i++) {
  sum += i;
}

console.log(sum);


//Method 2: Using the function 


function rangeBetween(count1: number, count2: number): number {
    let totalSum: number = 0;

    // Correcting the loop condition and structure
    for (let counter = count1; counter <= count2; counter++) {
        totalSum += counter;
    }

    return totalSum;
}

// Example usage
const result = rangeBetween(3, 6);
console.log(result);  // Output will be 18 (3 + 4 + 5 + 6)
