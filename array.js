// // empty array
// const myList = [ ];

// // array of numbers
// const numberArray = [ 2, 4, 6, 8];

// // array of strings
// const stringArray = [ 'eat', 'work', 'sleep'];

// // array with mixed data types
// const newData = ['work', 'exercise', 1, true];

// You can also store arrays, functions and other objects inside an array. For example,

// const newData = [
//     {'task1': 'exercise'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];


// Access Elements of an Array
// You can access elements of an array using indices (0, 1, 2 …). For example,

// const myArray = ['h', 'e', 'l', 'l', 'o'];

// // first element
// console.log(myArray[0]);  // "h"

// // second element
// console.log(myArray[1]); // "e"

// Add an Element to an Array
// You can use the built-in method push() and unshift() to add elements to an array.

// The push() method adds an element at the end of the array. For example,

// let dailyActivities = ['eat', 'sleep'];

// // add an element at the end
// dailyActivities.push('exercise');

// console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

// Remove an Element from an Array
// You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value. For example,

// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// // remove the last element
// dailyActivities.pop();
// console.log(dailyActivities); // ['work', 'eat', 'sleep']

// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyActivities.pop();

// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyActivities);  // ['work', 'eat']

// Array length
// You can find the length of an element (the number of elements in an array) using the length property. For example,

// const dailyActivities = [ 'eat', 'sleep'];

// // this gives the total number of elements in an array
// console.log(dailyActivities.length); // 2

