require('dotenv').config();
const path = require('path');
const express = require('express');


const app = express();

// Have Node serve the files for the React app
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // Handle GET requests to /api route
  app.get('/api', (req, res) => res.json({ message: 'Welcome to Pomoparty!' }));


  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/build', 'index.html')));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

