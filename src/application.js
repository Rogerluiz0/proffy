require('dotenv').config()

const server = require('./server.js')
const config = require('./config/config.js')

const port = config.app.port

server.listen(port, error => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on http://localhost:${port}`
  
  return console.log(message)
})
