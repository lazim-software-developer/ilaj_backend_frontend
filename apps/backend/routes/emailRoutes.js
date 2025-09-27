const express = require('express');
const { sendEmailController } = require('../controllers/emailController');
const validateEmail = require('../middleware/validateEmail');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/send-email', validateEmail, sendEmailController);

// Test SMTP connection
router.get('/test-smtp', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.verify();
    res.status(200).json({ message: 'SMTP connection successful' });
  } catch (error) {
    console.error('SMTP test failed:', error);
    res.status(500).json({ error: 'SMTP connection failed', details: error.message });
  }
});

module.exports = router;