import net from "node:net";

const server = net.createServer((socket) => {
  // This callback function is executed whenever a new client connects to the server
  console.log('Client connected');

  // Handle incoming data from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });

  // Handle socket errors
  socket.on('error', (error) => {
    console.log(`Socket error: ${error.message}`);
  });

  // Handle client disconnections
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
