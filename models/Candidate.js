var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CandidateSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name Required'
  },

  position: {
    type: String,
    default: '',
    trim: true,
    required: 'Position Required'
  },
  date: {
    type: String,
    default: '',
    trim: true,
    // required: 'Date Required'
  },
  location: {
    type: String,
    default: '',
    trim: true,
    // required: 'Position Required'
  },
  interviewer1: {
    type: String,
    default: '',
    trim: true,
    required: 'Position Required'
  },
  interviewer2: {
    type: String,
    default: '',
    trim: true,
    // required: 'Position Required'
  },
  interviewer3: {
    type: String,
    default: '',
    trim: true,
    // required: 'Position Required'
  },
  interviewer4: {
    type: String,
    default: '',
    trim: true,
    // required: 'Position Required'
  },
 
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Candidate = mongoose.model('Candidate', CandidateSchema, 'candidates');
module.exports = Candidate;
