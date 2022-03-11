// function expression

// // Function expression: starts with "const"
// const isTruthy = function(value) {
//     return !!value;
//   };
//   // Function expression: an argument for .filter()
//   const numbers = ([1, false, 5]).filter(function(item) {
//     return typeof item === 'number';
//   });
//   // Function expression (IIFE): starts with "("
//   (function messageFunction(message) {
//     return message + ' World!';
//   })('Hello');

// Function declaration in conditionals

// (function() {
//     'use strict';
//     if (true) {
//       function ok() {
//         return 'true ok';
//       }
//     } else {
//       function ok() {
//         return 'false ok';
//       }
//     }
//     console.log(typeof ok === 'undefined'); // => true
//     console.log(ok()); // Throws "ReferenceError: ok is not defined"
//   })();

// Arrow function
// An arrow function is defined using a pair of parenthesis that contains the list of parameters
//  (param1, param2, ..., paramN), followed by a fat arrow => and a pair of curly braces {...}
//   that delimits the body statements.


// const absValue = (number) => {
//     if (number < 0) {
//       return -number;
//     }
//     return number;
//   }
//   absValue(-10); // => 10
//   absValue(5);   // => 5
