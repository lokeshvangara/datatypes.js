//reference type
/** Reference data types, unlike primitive data types, are dynamic in nature. 
That is, they do not have a fixed size.
Most of them are considered as objects, and therefore have methods. 
Examples of such data types include arrays, functions, collections, and all other types of objects.*/


//object
/** JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas.*/

let person = {
    name: 'lokesh',
    age: 22
};
console.log(person)



//array
/** JavaScript arrays are written with square brackets.
Array items are separated by commas.*/

let selectedNames = [ 'lokesh', 'lucky'];
console.log(selectedNames[1]);



//function
/** A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).*/

function name(  firstName, lastName) {
    console.log('hello' +' ' + firstName +' ' + lastName);
}
name('harry');
