const express = require('express');
const {
  addCourse,
  updateCourse,
  deleteCourse,
  getAllCourses,
  getCourseById
} = require('../controllers/courseController');

const router = express.Router();

// Create a new course
router.post('/courses', addCourse);

// Add a course to a student
router.post('/students/:id/courses', addCourse);

// Update a course by ID
router.put('/courses/:id', updateCourse);

// Delete a course by ID
router.delete('/courses/:id', deleteCourse);

// Get all courses
router.get('/courses', getAllCourses);

// Get a course by ID
router.get('/courses/:id', getCourseById);

module.exports = router;
