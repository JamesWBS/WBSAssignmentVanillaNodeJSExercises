# WBSAssignmentVanillaNodeJSExercises

WBS Assignment Vanilla Node JS Exercises

# Vanilla NodeJS

Create a folder `exercises_vanilla` then go to this folder in your terminal and execute:

```
npm init -y
```

## Exercise 0 ([Help - NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))

- What file did you create with the previous command?
- What is the role of this file?

## Exercise 1 ([Help - console](https://nodejs.org/api/console.html))

In a file `exercise1.js`:

Create a code that displays `hello` in the console.

To launch this file, type in your terminal `node exercise1.js`.

## Exercise 2 ([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise2.js`:

Using the `writeFile` function, write `hello` in a file called `test.html`.

## Exercise 3 ([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise3.js`:

Using the `readFile` function, read the file `test.html` and display the content in the console.

## Exercise 4 ([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise4.js`:

Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).

## Exercise 5 ([Help - http](https://nodejs.org/api/http.html))

In a file `exercise5.js`:

Copy this code and run it in the console. What's going on?

```
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(8080);
console.log("Server running at http://127.0.0.1:80/");
```

## Exercise 6

In a file `exercise6.js`:

Install the module [axios](https://github.com/axios/axios) and retrieve the html code from `google.com`.
