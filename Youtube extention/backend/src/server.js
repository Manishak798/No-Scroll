const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('../routes/videoRoutes');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/youtubeProductivity', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
