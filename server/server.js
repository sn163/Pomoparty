require('dotenv').config();
const path = require('path');
const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const apiProxy = createProxyMiddleware('/api',{ target: 'http://localhost:3001/'});

const app = express();
// app.use(apiProxy)
// Have Node serve the files for the React app



  // Express will serve up the front-end index.html file if it doesn't recognize the route
  // Express will serve up production assets

  app.use(express.static(path.resolve(__dirname, '../client/build')));
  // app.use(express.static(path.resolve(__dirname, '/build')))


  // Handle GET requests to /api route
  app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
  });


  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/build', 'index.html')));
  // app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, '/build', 'index.html'))
  // })

  // app.get("*", (req, res) =>

  //   res.sendFile(path.resolve("build", "index.html"))

  // );


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
