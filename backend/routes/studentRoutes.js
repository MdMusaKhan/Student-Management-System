// routes/studentRoutes.js
const express = require('express');
const {
  addStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  loginStudent // Import the login function
} = require('../controllers/studentController');

const router = express.Router();

// Create a new student
router.post('/students', addStudent);

// Update a student's information
router.put('/students/:id', updateStudent);

// Delete a student
router.delete('/students/:id', deleteStudent);

// Get all students
router.get('/students', getAllStudents);

// Get a student by ID
router.get('/students/:id', getStudentById);

// Login a student
router.post('/students/login', loginStudent); // Call the login function

module.exports = router;
