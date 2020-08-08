require( 'dotenv' ).config()

const app = require( './app' )
const config = require( './config/index.js' )

const PORT = config.app.port

app.listen( PORT , () => {
  console.log( `Server running on localhost:${PORT}` )
} )