import React, { useState, useEffect } from 'react'; // Use import instead of require
import axios from 'axios';

const App = () => {
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        chrome.storage.sync.get(['topics'], (result) => {
            if (result.topics) {
                setSelectedTopics(result.topics);
            }
        });
    }, []);

    const handleSelect = (topic) => {
        const newTopics = selectedTopics.includes(topic)
            ? selectedTopics.filter((t) => t !== topic)
            : [...selectedTopics, topic];
        setSelectedTopics(newTopics);
        chrome.storage.sync.set({ topics: newTopics });
    };

    const fetchVideos = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/videos/search', {
                params: { topics: selectedTopics.join(',') },
            });
            console.log(data); // Do something with the video data
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <div>
            <h2>Select topics</h2>
            {['Tech', 'Music', 'Education', 'Productivity'].map((topic) => (
                <div key={topic}>
                    <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic)}
                        onChange={() => handleSelect(topic)}
                    />
                    {topic}
                </div>
            ))}
            <button onClick={fetchVideos}>Fetch Videos</button>
        </div>
    );
};

export default App; // Use export default instead of module.exports
