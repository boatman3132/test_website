// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Use CORS to allow requests from the frontend
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = 'your-openai-api-key'; // Replace with your OpenAI API key

app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003', // You can use GPT-3.5 or GPT-4 models as well
            prompt: userInput,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const botReply = response.data.choices[0].text.trim();
        res.json({ reply: botReply });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interacting with OpenAI API');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
