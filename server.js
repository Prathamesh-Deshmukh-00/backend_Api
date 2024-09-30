const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Webhook endpoint for Instagram
app.post('/webhook/instagram', (req, res) => {
  console.log('Instagram Webhook:', req.body);
  console.log("This is Instagram");
  
  // Send a custom response back to the client
  res.json({
    message: 'Instagram webhook received successfully',
    receivedData: req.body // Echoing back the received data
  });
});

// Webhook endpoint for Facebook
app.post('/webhook/facebook', (req, res) => {
  console.log('Facebook Webhook:', req.body);
  
  // Send a custom response back to the client
  res.json({
    message: 'Facebook webhook received successfully',
    receivedData: req.body // Echoing back the received data
  });
});

// Webhook endpoint for WhatsApp
app.post('/webhook/whatsapp', (req, res) => {
  console.log('WhatsApp Webhook:', req.body);
  
  // Send a custom response back to the client
  res.json({
    message: 'WhatsApp webhook received successfully',
    receivedData: req.body // Echoing back the received data
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
