const express = require('express');
const cors = require('cors');
const emailRoutes = require('../routes/emailRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// app.get('/api/test-smtp', (req, res) => {
//   res.status(200).json({ message: 'Test route working' });
// });


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));