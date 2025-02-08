//npm install express cors axios

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static('public'));

// Search Meals from themealdb API
app.get('/search', async (req, res) => {
    const { search } = req.query;
    if (!search) return res.json({ meals: [] });
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    res.json(response.data);
});

app.get('/meal', async (req, res) => {
    const { id } = req.query;
    if (!id) return res.json({ meals: [] });
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    res.json(response.data);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));