// ANCHOR EXERCISE 4 INSTRUCTIONS
// Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).

// SECTION EXERCISE 1: DISPLAY HELLO

console.log("Hello, Exercise 1!"); // send Content body "Hello, Exercise 1!" to terminal

// TODO CONVERT TO ES5

// SECTION EXERCISE 2: WRITE CONTENT TO A FILE, DISPLAY MESSAGE ONCE DONE
/// Use the require() method to include the Node.js file system ("fs") module allowing you
// to work with the file system on your computer.
const fs = require("fs");

// Initially, we will use the fs.writeFile() method to write a new file, if it does not
// exist, containing the specified content desired and if it already exists (e.g. after program
// ran twice), replaces the specified file and content:
console.log("Exercise 2 starts");
fs.writeFile("test.html", "Hello, Exercise 2", function (err) {
  if (err) throw err;
  console.log("Test.html saved exercise 2 and text contents added!");
});

fs.readFile("test.html", "utf8", function (err, data) {
  if (err) throw err;
  console.log("exercise 2: " + data);
});
// TODO CONVERT TO ES5

// SECTION EXERCISE 3: READ FILE, DISPLAY CONTENT IN CONSOLE
/* -------------------------------------------------------------------------- */
// Use the require() method to include the Node.js file system ("fs") module allowing you
// to work with the file system on your computer.


// EXTRA CREDIT: Append data to the test.html file related to Exercise 3
console.log("Exercise 3 starts");
fs.appendFile("test.html", "   More text for Exercise 3", function (err) {
  if (err) throw err;
  console.log("Updated with exercise 3 data!");
});

/* -------------------------------------------------------------------------- */
// We will use the fs.readFile() method to read the specified file content at text.html
// So we do not get <unreadable by most humans> raw buffer object data, we indicate u5f8.
// We pass on two arguments, an error which has error condition and action if error occurs, and
// The data argument, which relates to the ASYNCHRONOUS callback of full contents,
// here represented as a string in utf8 format.
// Asynchronous callback methods are better to use when possible to avoid blocking the main execution
// fs.readFile("test.html", "utf8", function (err, data) { if (err) throw err; console.log(data) });

fs.readFile("test.html", "utf8", function (err, data) {
  if (err) throw err;
  console.log("Exercise 3 data" + data);
});

// TODO CONVERT TO ES5
