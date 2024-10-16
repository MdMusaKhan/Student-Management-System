const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  phoneNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);  // Ensures phone number is a 10-digit number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  email: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);  // Email format validation
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  program: { 
    type: String, 
    required: true 
  },
  favoriteTopic: { 
    type: String 
  },
  strongestSkill: { 
    type: String 
  },
  courses: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Course'  // Reference to the Course model
  }]  // This field stores the list of courses
}, { timestamps: true });  // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Student', StudentSchema);
