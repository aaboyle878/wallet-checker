import env from 'dotenv';
dotenv.config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Route to handle wallet lookup
app.get('/api/wallet/:address', async (req, res) => {
    const walletAddress = req.params.address;
    const url = `https://public.chainalysis.com/api/v1/address/${walletAddress}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'X-API-Key': ProcessingInstruction.env.API_KEY,
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wallet data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
