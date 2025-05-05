const express = require('express');
const multer = require('multer');

const router = express.Router();

// Setup Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

router.post('/upload', upload.single('kycFile'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'File not uploaded' });

  res.status(200).json({ message: 'KYC file uploaded successfully', file: req.file });
});

module.exports = router;
