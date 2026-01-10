require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const app = express();
app.use(cors());
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.send('Luciverse API is live! Use /api/quotes for data.');
});

// GET all quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await knex('quotes').select('*');
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

// POST a quote
app.post('/api/quotes', async (req, res) => {
  const { quote, character } = req.body;
  if (!quote || !character) {
    return res.status(400).json({ error: 'Quote and character are required' });
  }

  try {
    const [newQuote] = await knex('quotes').insert(
      { quote, character },
      ['id', 'quote', 'character', 'created_at', 'updated_at']
    );
    res.status(201).json(newQuote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add quote' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
