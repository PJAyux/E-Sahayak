const express = require('express'); // Import the express module
const app = express(); // Create an Express application
app.use(express.json());
const port = 8000; // Define the port where the server will listen

// const router=express.Router();




const cors = require('cors');
app.use(cors());



const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/hackino')
.then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


const userSchema = new mongoose.Schema({
  problem: { type: String },
  category: { type: String },
  des: { type: String}
});



// Create a model from the schema
const User = mongoose.model('User', userSchema);








// Define a basic route
app.get('/', (req, res) => {
  console.log("blbj");
  res.send('Hello,'); // Send a response when the root URL is accessed
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body); // Send a response when the root URL is accessed
  const newUser= new User(req.body);
  newUser.save()
  .then(() =>console.log('User Saved'))
  .catch(err =>console.error(err));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
