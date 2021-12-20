/* server.js - Express server*/
'use strict';

const express = require('express')
const app = express();

const path = require('path');

// Setting up a static directory for the files in /pub
// using Express middleware.
// Don't put anything in /pub that you don't want the public to have access to!
app.use(express.static(path.join(__dirname, '/pub')))

// Let's make a route for an HTTP GET request to the 
// 'root' of our app (i.e. top level domain '/')
app.get('/',  (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/landing_page.html'))
})

app.get('/example', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/example.html'))
})

app.get('/document', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/documentation.html'))
})


// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})