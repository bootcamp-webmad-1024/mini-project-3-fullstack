const { Schema, model } = require(`mongoose`)

const cohortSchema = Schema({
    inProgress: {
        type: Boolean
    },
    cohortSlug: String,
    cohortName: String,
    program: String,
    campus: String,
    startDate: Date,
    endDate: Date,
    programManager: String,
    leadTeacher: String,
    totalHours: Number,
    format: String
})

const Model = model('cohort', cohortSchema)

module.exports = Model