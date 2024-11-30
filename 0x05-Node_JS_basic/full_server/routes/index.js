const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
