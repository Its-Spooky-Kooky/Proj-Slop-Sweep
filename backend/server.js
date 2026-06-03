const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50kb' }));

// Routes
app.use('/api/analyze', require('./routes/analyze'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SlopSweep API is running.' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SlopSweep API running on http://localhost:${PORT}`);
});
