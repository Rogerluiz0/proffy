const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química'
]

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

function getSubject (subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function convertHoursToMinutes (time) {
  const [hour, minutes] = time.split(':')
  return Number((hour * 60) + minutes)
}

function formatCurrency (value) {
  value = String(value).replace(/\D/g, '')
  value = Number(value) / 100
  value = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  return value
}

function formatAmount (value) {
  value = Number(value) * 100
  return Math.round(value)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
  formatCurrency,
  formatAmount
}
