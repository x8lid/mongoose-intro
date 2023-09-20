const { Router } = require('express');

const { studentsController } = require('../controllers/students.controller');
const Student = require('../models/Student.model');

const router = Router();

router.get('/students', studentsController.getStudents);
router.post('/students', studentsController.addStudents);
router.delete('/student/:id', studentsController.deleteStudents);
router.patch('/student/:id', studentsController.updateStudents);

module.exports = router;