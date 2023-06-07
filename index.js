//call the local module
const add = require("./add");

//IIFE or immediately invoked function expression 
require("./batman");
require("./superman")

console.log("Hello! from index.js");
const sum = add(1, 2);
const sum2 = add(2, 3);
console.log(sum);
console.log(sum2);
