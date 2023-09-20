const Student = require('../models/Student.model');

module.exports.studentsController = {
    getStudents: async (req, res) => {
        try {
            const students = await Student.find()
            res.json(students)
        }
        catch (error) {
            res.json(error)
        }
    },

    addStudents: async (req, res) => {
        const { name, age } = req.body
        try {
            await Student.create({ name, age })
            res.json("Студент добавлен")

        } catch (error) {
            res.json(error)
        }
    },

    deleteStudents: async (req, res) => {
        try {
            await Student.findByIdAndRemove(req.params.id)
            res.json("Студент удален")
        } catch (error) {
            res.json(error)
        }
    },
    updateStudents: async (req, res) => {
        try {
            await Student.findByIdAndUpdate(req.params.id, { name: req.body.name });
            res.json("Имя изменено");
        } catch (error) {
            res.json(error);
        }
    }
}
