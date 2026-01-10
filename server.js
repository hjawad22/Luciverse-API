require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await knex('quotes').select('*');
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));