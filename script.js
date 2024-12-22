//your JS code here. If required.
function fizzBuzz() {
    let result = '';  // Initialize an empty string to store the result
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';  // For multiples of both 3 and 5
        } else if (i % 3 === 0) {
            result += 'Fizz';  // For multiples of 3
        } else if (i % 5 === 0) {
            result += 'Buzz';  // For multiples of 5
        } else {
            result += i;  // For all other numbers
        }
        result += '\n';  // Add a newline after each output
    }
    alert(result);  // Display the result in an alert box
}

fizzBuzz();  // Call the function to run FizzBuzz
