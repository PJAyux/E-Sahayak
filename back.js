const express = require('express'); // Import the express module
const app = express(); // Create an Express application

const port = 3000; // Define the port where the server will listen

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello,'); // Send a response when the root URL is accessed
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
