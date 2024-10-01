const express = require('express');
const cors = require('cors'); // Import the CORS package
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use CORS middleware to enable CORS for all routes
app.use(cors()); 

// Your verification token
const VERIFY_TOKEN = 'P2LXVVEtXfP8eJxJPATU';

// Webhook verification endpoint
app.get('/webhook/instagram', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Verify the token
    if (mode && token === VERIFY_TOKEN) {
        console.log('Webhook verification successful');
        // Respond with the challenge token
        res.status(200).send(challenge);
    } else {
        console.error('Webhook verification failed');
        // Respond with 403 Forbidden
        res.sendStatus(403);
    }
});

// Webhook endpoint for Instagram
app.post('/webhook/instagram', (req, res) => {
    try {
        console.log('Instagram Webhook:', req.body);
        console.log("This is Instagram");

        // Send a custom response back to the client
        res.status(200).json({
            message: 'Instagram webhook received successfully',
            receivedData: req.body // Echoing back the received data
        });
    } catch (error) {
        console.error('Error handling Instagram webhook:', error);
        res.status(500).json({ message: 'Error processing Instagram webhook' });
    }
});

// Webhook endpoint for Facebook
app.post('/webhook/facebook', (req, res) => {
    try {
        console.log('Facebook Webhook:', req.body);

        // Send a custom response back to the client
        res.status(200).json({
            message: 'Facebook webhook received successfully',
            receivedData: req.body // Echoing back the received data
        });
    } catch (error) {
        console.error('Error handling Facebook webhook:', error);
        res.status(500).json({ message: 'Error processing Facebook webhook' });
    }
});

// Webhook endpoint for WhatsApp
app.post('/webhook/whatsapp', (req, res) => {
    try {
        console.log('WhatsApp Webhook:', req.body);

        // Send a custom response back to the client
        res.status(200).json({
            message: 'WhatsApp webhook received successfully',
            receivedData: req.body // Echoing back the received data
        });
    } catch (error) {
        console.error('Error handling WhatsApp webhook:', error);
        res.status(500).json({ message: 'Error processing WhatsApp webhook' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
