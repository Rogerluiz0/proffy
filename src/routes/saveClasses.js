const database = require('./../database/db.js')
const { convertHoursToMinutes } = require('./../utils/format.js')

async function saveClasses (req, res) {
  const createProffy = require('./../database/createProffy.js')

  const proffyValue = {
    name: String(req.body.name),
    avatar: String(req.body.avatar),
    whatsapp: String(req.body.whatsapp),
    bio: String(req.body.bio)
  }

  const classValue = {
    subject: req.body.subject,
    cost: req.body.cost
  }

  const classScheduleValues = req.body.weekday.map((weekday, index) => {
    return {
      weekday,
      time_from: convertHoursToMinutes(req.body.time_from[index]),
      time_to: convertHoursToMinutes(req.body.time_to[index])
    }
  })

  try {
    const db = await database
    await createProffy(db, { proffyValue, classValue, classScheduleValues })

    let queryString = '?subject=' + req.body.subject
    queryString += '&weekday=' + req.body.weekday[0]
    queryString += '&time=' + req.body.time_from[0]

    return res.status(200).redirect('/study' + queryString)
  } catch (error) {
    console.log(error)
  }
}

module.exports = saveClasses
