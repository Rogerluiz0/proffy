const database = require('./../database/db.js')
const {subjects, weekdays, getSubject, convertHoursToMinutes} = require('./../utils/format.js')

async function pageStudy (req, res) {
  const filters = req.query

  if (!filters.subject || !filters.weekday || !filters.time) {
    return res.render('study.html', {filters, subjects, weekdays})
  }

  const timeToMinutes = convertHoursToMinutes(filters.time)

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = classes.id
      AND class_schedule.weekday = ${filters.weekday}
      AND class_schedule.time_from <= ${timeToMinutes}
      AND class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}'
  `

  try {
    const db = await database
    const proffys = await db.all(query)

    proffys.map((proffy) => {
      proffy.subject = getSubject(proffy.subject)
    })

    return res.render('study.html', {proffys, subjects, filters, weekdays})

  } catch (error) {
    console.log(error)
  }
}

module.exports = pageStudy