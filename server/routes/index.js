const Student = require("../models/student.model")
const Cohort = require("../models/cohort.model")

module.exports = app => {

    // STUDENTS ROUTES

    app.get('/api/students', (req, res) => {

        Student
            .find()
            .sort({ firstName: 1 })
            .select({ image: 1, program: 1, firstName: 1, lastName: 1, email: 1, phone: 1 })
            .then(students => res.json(students))
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.get('/api/students/:studentId', (req, res) => {

        const { studentId } = req.params

        Student
            .findById(studentId)
            .populate('cohort')                         // nombre del campo a popular
            .then(student => res.json(student))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })

    app.post('/api/students', (req, res) => {

        const {
            firstName,
            lastName,
            email,
            phone,
            linkedinUrl,
            languages,
            program,
            background,
            image,
            cohort,
            projects
        } = req.body

        Student
            .create({
                firstName,
                lastName,
                email,
                phone,
                linkedinUrl,
                languages,
                program,
                background,
                image,
                cohort,
                projects
            })
            .then(createdStudent => res.json(createdStudent))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.get('/api/students/:studentId', (req, res) => {

        const { studentId } = req.params

        Student
            .findById(studentId)
            .populate('cohort')
            .then(student => res.json(student))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.delete('/api/students/:studentId', (req, res) => {

        const { studentId } = req.params

        Student
            .findByIdAndDelete(studentId)
            .then(removeStudent => res.json(removeStudent))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.put('/api/students/:studentId', (req, res) => {

        const { studentId } = req.params
        const {
            firstName,
            lastName,
            email,
            phone,
            linkedinUrl,
            languages,
            program,
            background,
            image,
            cohort,
            projects
        } = req.body

        Student
            .findByIdAndUpdate(studentId, {
                firstName,
                lastName,
                email,
                phone,
                linkedinUrl,
                languages,
                program,
                background,
                image,
                cohort,
                projects
            })
            .then(student => res.json(student))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })

    app.get('/api/students/cohort/:cohortId', (req, res) => {

        const { cohortId: cohort } = req.params

        Student
            .find({ cohort })
            .then(students => res.json(students))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })




    // COHORT ROUTES

    app.get('/api/cohorts', (req, res) => {

        Cohort
            .find()
            .then(cohorts => res.json(cohorts))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })

    app.post('/api/cohorts', (req, res) => {

        const {
            inProgress,
            cohortSlug,
            cohortName,
            program,
            campus,
            startDate,
            endDate,
            programManager,
            leadTeacher,
            totalHours,
            format
        } = req.body

        Cohort
            .create({
                inProgress,
                cohortSlug,
                cohortName,
                program,
                campus,
                startDate,
                endDate,
                programManager,
                leadTeacher,
                totalHours,
                format
            })
            .then(createdCohort => res.json(createdCohort))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.get('/api/cohorts/:cohortId', (req, res) => {

        const { cohortId } = req.params

        Cohort
            .findById(cohortId)
            .then(cohort => res.json(cohort))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.delete('/api/cohorts/:cohortId', (req, res) => {

        const { cohortId } = req.params

        Cohort
            .findByIdAndDelete(cohortId)
            .then(removeCohort => res.json(removeCohort))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })


    app.put('/api/cohorts/:cohortId', (req, res) => {

        const {
            inProgress,
            cohortSlug,
            cohortName,
            program,
            campus,
            startDate,
            endDate,
            programManager,
            leadTeacher,
            totalHours,
            format
        } = req.body

        const { cohortId } = req.params

        Cohort
            .findByIdAndUpdate(cohortId, {
                inProgress,
                cohortSlug,
                cohortName,
                program,
                campus,
                startDate,
                endDate,
                programManager,
                leadTeacher,
                totalHours,
                format
            })
            .then(cohort => res.json(cohort))
            .catch(err => {
                console.log('error ->', err)
                res.status(500).json({ message: 'Server error', error: err })
            })
    })

}