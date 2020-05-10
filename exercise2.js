// ANCHOR EXERCISE 2 INSTRUCTIONS //
// Using the `writeFile` function, write `hello` in a file called `test.html`

// SECTION WRITE CONTENT TO A FILE, DISPLAY MESSAGE ONCE DONE
/// Use the require() method to include the Node.js file system ("fs") module allowing you
// to work with the file system on your computer.
var fs = require("fs");

// Initially, we will use the fs.writeFile() method to write a new file, if it does not
// exist, containing the specified content desired and if it already exists (e.g. after program
// ran twice), replaces the specified file and content:

fs.writeFile("test.html", "Hello, Exercise 2", function (err) {
  if (err) throw err;
  console.log("Test.html saved and text contents added!");
});
