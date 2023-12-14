/* filename: complex_code.js
   content: This code performs a complex calculation of Fibonacci sequence using memoization to improve performance. */

// Function to calculate the nth Fibonacci number using memoization
function fibonacci(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  
  return result;
}

// Prompt user for the input
const n = parseInt(prompt("Enter a number:"));

// Calculate and display the Fibonacci sequence up to the input number
console.log("Fibonacci Sequence:");
for (let i = 1; i <= n; i++) {
  console.log(`${i}. ${fibonacci(i)}`);
}

// Utility function to check if a number is prime
function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}

// Calculate and display all prime numbers up to the input number
console.log("Prime Numbers:");
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  
  // Method to add two complex numbers
  add(other) {
    return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
  }
  
  // Method to multiply two complex numbers
  multiply(other) {
    const realPart = this.real * other.real - this.imaginary * other.imaginary;
    const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
    
    return new ComplexNumber(realPart, imaginaryPart);
  }
  
  // Method to convert the complex number to a string
  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Create two complex numbers and perform operations
const complex1 = new ComplexNumber(3, 2);
const complex2 = new ComplexNumber(1, -4);

console.log("Complex Number Operations:");
console.log(`Complex1: ${complex1}`);
console.log(`Complex2: ${complex2}`);
console.log(`Sum: ${complex1.add(complex2)}`);
console.log(`Product: ${complex1.multiply(complex2)}`);

// ... continue with more complex code ...

// End of code