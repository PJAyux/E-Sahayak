const nodemailer = require('nodemailer');
const run = require('./app');

// Step 1: Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'yahoo', 'hotmail'
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password', // Your email password or app-specific password
  },
});

app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      await run({ name, email, message });
  
      const mailOptions = {
        from:"Eshayak.gmail.com",
        to: email,
        subject: 'reporting an issue',
        text: message,
      };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email' });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Submission saved and email sent successfully' });
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error processing request' });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
