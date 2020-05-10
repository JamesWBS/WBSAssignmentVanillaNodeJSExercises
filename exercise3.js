// ANCHOR EXERCISE 3 INSTRUCTIONS //
// Using the `readFile` function, read the file `test.html` and display the content in the console.

// SECTION READ FILE, DISPLAY CONTENT IN CONSOLE
/* -------------------------------------------------------------------------- */
// Use the require() method to include the Node.js file system ("fs") module allowing you
// to work with the file system on your computer.
var fs = require("fs");

/* -------------------------------------------------------------------------- */
// We will use the fs.readFile() method to read the specified file content at text.html
// So we do not get <unreadable by most humans> raw buffer object data, we indicate u5f8.
// We pass on two arguments, an error which has error condition and action if error occurs, and
// The data argument, which relates to the ASYNCHRONOUS callback of full contents,
// here represented as a string in utf8 format.
// Asynchronous callback methods are better to use when possible to avoid blocking the main execution

fs.readFile("test.html", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
