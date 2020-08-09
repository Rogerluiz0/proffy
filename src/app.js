const path = require( 'path' )
const nunjucks = require( 'nunjucks' )
const routes = require( './routes/routes.js' )

const express = require( 'express' )
const app = express()

// Configurar nunjucks
nunjucks.configure( path.join( __dirname , '/../public/pages' ) , { 
  express: app,
  noCache: true
} )

// Dados do req.body
app.use( express.urlencoded( { extended: true } ) )
app.use( express.static( path.join( __dirname , '/../public/' ) ) )

app.get( '/' , routes )
app.get( '/study' , routes )
app.get( '/give-classes' , routes )
app.post( '/save-classes' , routes )
app.get( '*', routes )

module.exports = app