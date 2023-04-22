import http from "node:http";

const server = http.createServer((req, res) => {
  // Get the values of the Content-Type header
  const contentTypeHeader = req.getHeader('content-type'); //this method doesnt work
  const contentTypeValues = contentTypeHeader.split(',');

  // Log the individual values to the console
  console.log(contentTypeValues);

  // Send a response back to the client
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
