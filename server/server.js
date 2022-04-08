require('dotenv').config();
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for the React app
app.use(express.static(path.resolve(__dirname, '../build')))

// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({message: 'Hello from server!'})
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})


app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`)
})