const express = require('express');
const Loan = require('../models/Loan');

const router = express.Router();

// Apply for a loan
router.post('/apply', async (req, res) => {
  const { userId, amount, tenure } = req.body;

  try {
    const creditScore = Math.floor(Math.random() * 800) + 300; // Dummy score for now
    const interest = amount * 0.1; // 10% interest
    const emi = (amount + interest) / tenure; // Simple EMI calculation

    const loan = new Loan({
      user: userId,
      amount,
      tenure,
      creditScore,
      emi,
      interest,
    });

    await loan.save();
    res.status(201).json({ message: 'Loan application submitted', loan });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
