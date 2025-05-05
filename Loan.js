const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  tenure: { type: Number, required: true },
  creditScore: { type: Number, required: true },
  status: { type: String, enum: ['applied', 'approved', 'rejected'], default: 'applied' },
  emi: { type: Number },
  interest: { type: Number },
});

module.exports = mongoose.model('Loan', loanSchema);
