const requestListener = function (req, res) {
  // Define a function called requestListener that takes
  // as paramaters, a request object and response object
  res.writeHead(200); // Send Header 200 (success) response back and
  res.end("Hello, Exercise 1!"); // send Content body "Hello, Exercise 1!" response back
  // to the user making request
};
