const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = 5005

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173']
}))

app.get('/api/students', (req, res) => {
  const students = require('./students.json')
  res.json(students)
})

app.get('/api/cohorts', (req, res) => {
  const cohorts = require('./cohorts.json')
  res.json(cohorts)
})

app.listen(PORT, () => console.log(`Server running on portn ${PORT}`))