const { sendEmail } = require('../services/emailService');

const sendEmailController = async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const result = await sendEmail({ to, subject, text });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendEmailController };