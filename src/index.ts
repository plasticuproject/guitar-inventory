import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import * as sessionAuth from './middleware/sessionAuth'
import * as routes from './routes'

// Initialize configuration
dotenv.config()

const app = express()

// Configure Express to parse incoming JSON data
app.use(express.json())

// Port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Configure Express to serve static files in the public folder
app.use(express.static(path.join(__dirname, 'public')))

// Configure session auth
sessionAuth.register(app)

// Configure routes
routes.register(app)

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
