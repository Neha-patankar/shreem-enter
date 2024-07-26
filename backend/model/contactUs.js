const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ContactUs', contactUsSchema);
