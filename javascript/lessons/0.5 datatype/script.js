// datatype: JavaScript utilizes various data types to categorize the different kinds of values variables can hold. 
// two type: primitive and non primitive
// primitive: number string boolean
// non primitive: object array function

// console.log(typeof 10);         // "number"
// console.log(typeof "hi");       // "string"
// console.log(typeof true);       // "boolean"
// console.log(typeof {});         // "object"
// console.log(typeof []);         // "object"
// console.log(typeof function(){}); // "function"


// typeof() -> this function returns the data type of inputed data
//          -> in non primitive it return object
//          -> in primitve it return number boolean string
 
// returns a number
console.log(typeof 35)  

// returns a string
let data = window.prompt("enter something !")

console.log("type of data : " +data + " is "+typeof(data))