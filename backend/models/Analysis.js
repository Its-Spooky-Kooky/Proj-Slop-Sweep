const mongoose = require('mongoose');

const AnalysisSchema = new mongoose.Schema({
  text_preview: {
    type: String,
    required: true,
    maxlength: 500,
  },
  slop_score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  reasoning: {
    type: String,
    required: true,
  },
  flagged_phrases: {
    type: [String],
    default: [],
  },
  verdict: {
    type: String,
    enum: ['authentic', 'suspicious', 'slop'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Analysis', AnalysisSchema);
