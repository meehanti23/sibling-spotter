import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json());

// Create ownTracksRouter as a new Router instance
const ownTracksRouter = express.Router();

// Handle POST requests to /location endpoint
ownTracksRouter.post('/location', (req, res) => {
  const payload = req.body;
  
  if (payload._type === 'location') {
    // Process and store the location data
    const { tid, lat, lon } = payload;
    
    // Example code to store data in a database
    // Replace with your own implementation
    // const db = require('your-database-library');
    // db.storeLocation(tid, lat, lon);
    
    res.sendStatus(200); // Respond with success status
  } else {
    res.sendStatus(400); // Invalid payload type
  }
});

// Mount ownTracksRouter as a middleware on the '/api/v1' path
app.use('/api/v1', ownTracksRouter);

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

export default ownTracksRouter;
