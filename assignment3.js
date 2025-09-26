//TODO Shallow vs Deep Copy
let obj = { x: 1, y: { z: 2 } };
let copy1 = { ...obj };
let copy2 = structuredClone(obj);

copy1.y.z = 50;
copy2.y.z = 100;

console.log(obj.y.z); 
// Predict the output?


//TODO Array Destructuring
const nums = [5];
const [a=1, b=2, c=3] = nums;
console.log(a, b, c); 
// What will be logged?

//TODO Object Destructuring
const student = { id: 1, name: "Ravi" };
const { id, name, grade="A" } = student;
console.log(id, name, grade);
// What is grade value?

//TODO String Reverse
//!Implement a function that reverses "JavaScript" using the custom .reverse() method.

//TODO String Methods
console.log("  hello world  ".trim().toUpperCase().slice(0,5));
// What will be the output?

//TODO Prototype Inheritance 
 function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function() {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak();
//!What will be logged?
//!Add another method eat() in prototype that logs "Dog is eating" and call it.

//TODO this Keyword
const person = {
  name: "Amit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const greetFn = person.greet;
greetFn(); 
//!Why does this print undefined?
//! Fix it using .bind().
//TODO Class vs Constructor


//!Write a constructor function and a class for Book with properties: title, author.
//!Add a method getDetails() in both which returns "title by author".
//!Create 2 objects and call the method.


//TODO Array Functions

//!Write code using:
//!map() → multiply every element in [1,2,3,4] by 3.
//!filter() → keep only even numbers.
//!reduce() → find sum of all elements.

//TODO Ways to Create Objects
//!Create an object representing a Laptop using all 5 ways (Literal, new Object(), Constructor, Class, Object.create()).
//!Each object should have a property brand = "HP".