const {subjects, weekdays} = require('./../utils/format.js')

function pageGiveClasses(req, res) {
  return res.render('give-classes.html', {subjects, weekdays}) 
}

module.exports = pageGiveClasses