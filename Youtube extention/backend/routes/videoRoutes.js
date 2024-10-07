const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

router.get('/search', async (req, res) => {
    const { topics } = req.query;
    const topicArray = topics.split(',');
    
    try {
        const responses = await Promise.all(
            topicArray.map(topic => axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    q: topic,
                    key: process.env.YOUTUBE_API_KEY,
                },
            }))
        );
        const videos = responses.flatMap(response => response.data.items);
        res.json(videos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
