// Rounding
// There are several built-in functions for rounding:math.floor,math.ceil,math.round,math.trunc

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

let num = 1.23456;
alert( Math.round(num * 100) / 100 );


// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

let a = Math.ceil(0.60);
let b = Math.ceil(0.40);
let c = Math.ceil(5);
let d = Math.ceil(5.1);
let e = Math.ceil(-5.1);
let f = Math.ceil(-5.9);



// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

let a = Math.round(2.60);
let b = Math.round(2.50);
let c = Math.round(2.49);
let d = Math.round(-2.60);
let e = Math.round(-2.50);
let f = Math.round(-2.49);




// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
let x = Math.trunc(8.76);


//parseInt-The function parseInt returns an integer.parseInt() parses a string and returns the first integer:
parseInt("10");
parseInt("10.00");
parseInt("10.33");
parseInt("34 45 66");
parseInt(" 60 ");
parseInt("40 years");
parseInt("He was 40");

//parseFloat - parseFloat will return a floating-point number.parseFloat() parses a string and returns the first number:

parseFloat(10);
parseFloat("10");
parseFloat("10.33");
parseFloat("34 45 66");
parseFloat("He was 40");

//math.random() - Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

// Math.pow(n, power)
// Returns n raised to the given power.

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024
alert( math.pow(2,3)) //8 
