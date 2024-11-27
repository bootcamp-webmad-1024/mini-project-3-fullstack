const express = require('express')
const app = express()
const PORT = 5005

// Database
require('./db')

// Configs
require('./config')(app)

// Routes
require('./routes')(app)


app.listen(PORT, () => console.log(`Server running on portn ${PORT}`))