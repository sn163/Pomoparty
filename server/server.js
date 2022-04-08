require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

// Have Node serve the files for the React app

// Handle GET requests to /api route
app.get('/api', (req, res) => {
  res.status(201).json({ message: 'Hello from server!' });
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets

  app.use(express.static('build'));
  // app.use(express.static(path.resolve(__dirname, '/build')))
  // Express will serve up the front-end index.html file if it doesn't recognize the route

  app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
  // app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, '/build', 'index.html'))
  // })

  // app.get("*", (req, res) =>

  //   res.sendFile(path.resolve("build", "index.html"))

  // );
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
