import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

// Initialize configuration
dotenv.config()

const app = express()

// Port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index')
})

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
