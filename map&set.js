// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map()           – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key)        – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key)        – returns true if the key exists, false otherwise.
// map.delete(key)     – removes the value by the key.
// map.clear()         – removes everything from the map.
// map.size            – returns the current element count.


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

// Create a Map.set
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("apples", 200);
  document.getElementById("demo").innerHTML = fruits.get("apples");

//Map.get()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  document.getElementById("demo").innerHTML = fruits.get("apples");

// Map.has()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  document.getElementById("demo").innerHTML = fruits.has("apples");

// Map.delete()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Delete an Element
  fruits.delete("apples");
  document.getElementById("demo").innerHTML = fruits.size;

// Map.clear()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Clear the Map
  fruits.clear();
  document.getElementById("demo").innerHTML = fruits.size;
  

// Map.size
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  document.getElementById("demo").innerHTML = fruits.size;


// Set
// new Set() - Creates a new Set
// add()     - Adds a new element to the Set
// delete()  - Removes an element from a Set
// has()	 - Returns true if a value exists
// clear()	 - Removes all elements from a Set
// forEach() - Invokes a callback for each element
// values()	 - Returns an Iterator with all the values in a Set
// keys()	 - Same as values()
// entries() -	Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set



// Create a Set
const letters = new Set(["a","b","c"]);


// Display set.size
document.getElementById("demo").innerHTML = letters.size;


//add()
const letters = new Set(["a","b","c"]);
// Add a new Element
letters.add("d");
letters.add("e");
document.getElementById("demo").innerHTML = letters.size;


//has()
const letters = new Set(["a","b","c"]);
document.getElementById("demo").innerHTML = letters.keys();


//values()
const letters = new Set(["a","b","c"]);
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;


//keys
const letters = new Set(["a","b","c"]);
// Display set.size
document.getElementById("demo").innerHTML = letters.keys();



//entries()
const letters = new Set(["a","b","c"]);
// List all entries
const iterator = letters.entries();
let text = "";
for (const entry of iterator) {
  text += entry + "<br>";
}
document.getElementById("demo").innerHTML = text;
