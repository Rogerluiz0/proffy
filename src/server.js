const express = require('express')
const server = express()

const { join } = require('path')
const nunjucks = require('nunjucks')

nunjucks.configure(join(__dirname, '../public/pages'), {
  express: server,
  noCache: true
})

server.use(express.urlencoded({ extended: true }))
server.use(express.static(join(__dirname, '../public')))

const pageHome = require('./routes/pageHome.js')
const pageStudy = require('./routes/pageStudy.js')
const pageGiveClasses = require('./routes/pageGiveClasses.js')
const saveClasses = require('./routes/saveClasses.js')

server.get('/', pageHome)
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)
server.post('/save-classes', saveClasses)

server.use((req, res) => {
  return res.status(404).render('page-not-found.html')
})

module.exports = server
