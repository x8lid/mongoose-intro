const mongoose = require('mongoose');


const studentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   age: Number,
});

const Student = mongoose.model('student', studentsSchema);

module.exports = Student;