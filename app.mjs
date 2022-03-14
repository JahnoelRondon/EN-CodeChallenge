import express from 'express';

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('We are home')
})

app.listen(3001)