/********* LOG TO CONSOLE **********/
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');
/*
  multi
  line
  comments
*/


/********* VARIABLES **********/

// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// We can change value inside const variable but cannot reassign directly
const person = {
    name: 'John',
    age: 30
  }
  
  person.name = 'Sara';
  person.age = 32;
  
  // console.log(person);
  
  const numbers = [1,2,3,4,5];
  numbers.push(6);

// like we cannot reassign that new numbers array in const, it would give an error
//   numbers = [1,2,3,4,5,6];
  
  console.log(numbers);

