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

//Module caching
const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());

//Import Export Pattern
const math = require("./math");

const { subtract, multiply } = math;

console.log((subtract(2, 3)));
console.log((multiply(2, 3)));

//importing json
const data = require("./data.json");

console.log(data.address.street);

//Path Module
const path = require("path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));