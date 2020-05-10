
const requestListener = function (req, res) {               // Define a function called requestListener that takes 
    // as paramaters, a request object and response object 
    res.writeHead(200);                                     // Send Header 200 (success) response back and
    res.end("Hello, EXTRA CREDIT NEW NODEJS HTTP SERVER!"); // send Content body "Hello, Exercise 1!" response back 
    // to the user making request 
};


// The http.createServer method creates a server that calls requestListener
// whenever a request comes in. // The next line, server.listen(8080),
// calls the listen method, which causes the server to wait for incoming requests on the
// specified port - 8080, in this case.
const server = http.createServer(requestListener);
server.listen(8080);

