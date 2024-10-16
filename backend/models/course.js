// models/Course.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseCode: { type: String, required: true },
  courseName: { type: String, required: true },
  section: { type: String, required: true },
  semester: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

module.exports = mongoose.model('Course', CourseSchema);
