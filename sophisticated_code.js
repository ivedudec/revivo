/* 
 * Filename: sophisticated_code.js
 * Description: A sophisticated JavaScript code showcasing multiple advanced concepts.
 */

// Define a class for creating custom objects
class CustomObject {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }

  static staticMethod() {
    console.log("This is a static method.");
  }
}

// Create instances of CustomObject
const obj1 = new CustomObject("Object 1");
const obj2 = new CustomObject("Object 2");

// Call a method on the instances
obj1.sayHello();
obj2.sayHello();

// Create an asynchronous function
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the asynchronous function
fetchData();

// Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Implement a generator function
function* counter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

// Create an instance of the generator
const counterInstance = counter();

// Use the generator to get a sequence of numbers
console.log(counterInstance.next().value);
console.log(counterInstance.next().value);
console.log(counterInstance.next().value);

// Perform complex mathematical operations
const x = 10;
const y = Math.pow(x, 2) + Math.sqrt(x) + Math.random() * 10;
console.log("Result:", y);

// Create a closure to encapsulate data
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    console.log("Count:", count);
  };
}

// Create a counter using the closure
const counterFunc = createCounter();
counterFunc();
counterFunc();
counterFunc();

// Use ES6 modules to import and export functionality
import { multiply, divide } from "./mathUtils.js";
console.log("Result of multiplication:", multiply(5, 6));
console.log("Result of division:", divide(10, 2));

// Implement an event listener with error handling
window.addEventListener("load", (event) => {
  try {
    // Code that may throw an error
    console.log("Page loaded successfully.");
  } catch (error) {
    console.error("Error during page load:", error);
  }
});