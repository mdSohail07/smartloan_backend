const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const loanRoutes = require('./routes/loan');
const kycRoutes = require('./routes/kyc');
const paymentRoutes = require('./routes/payment');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/payment', paymentRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
