const express = require('express'); // Import the express module
const app = express(); // Create an instance of express
const moongose=require('mongoose');

moongose.connect('mongodb://localhost:27017/queries')





const QuerySchema = new mongoose.Schema({
    location: String,
    problem: String,
    category: String,
    des: String,
  });
  
  // Create a model
  const Problem = mongoose.model('Querry', QuerySchema);
  

  const cors = require('cors');
  const corsOptions = {
      origin: 'http://127.0.0.1:5500',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      optionsSuccessStatus: 204
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions)); // Handle pre-flight requests
  
  // Define a route
  app.get('/', (req, res) => {
      res.send('server is on');
  });
  app.get('/queries', (req, res) => {
      const data = req.body;
      console.log(body);
      res.json({ message: 'Data received successfully!', data });
  });
  
  


  async function run() {
    try {
      // Connect to MongoDB
      await mongoose.connect('mongodb://localhost:27017/queries', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  
      // Create and save a new document
      const problem = new Problem(data);
      const result = await problem.save();
      console.log(`Inserted document with _id: ${result._id}`);

      const rows = await querries.find(); // Fetch all documents from the collection
      return rows;
  
    } catch (err) {
      console.error('Error:', err);
      console.error('Error extracting rows:', err);
    } finally {
      // Disconnect from MongoDB
      await mongoose.disconnect();
    }
  }
  
  run().catch(console.dir);
module.exports=run;


// Start the server
const PORT = 5000;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
