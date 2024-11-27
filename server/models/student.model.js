const { Schema, model } = require(`mongoose`)

const studentSchema = Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [5, 'El nombre debe contener mínimo 5 caracteres']
    },
    lastName: String,
    email: String,
    phone: String,
    linkedinUrl: String,
    languages: Array,
    program: String,
    background: String,
    image: String,
    cohort: {
        type: Schema.Types.ObjectId,
        ref: 'cohort'                       // nombre del modelo a referenciar
    },
    projects: Array
})

const Student = model('student', studentSchema)

module.exports = Student