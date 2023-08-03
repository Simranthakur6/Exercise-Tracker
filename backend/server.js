// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get('/exercises', (req, res) => {
  const Exercise = require('./models/exercise');

  app.get('/exercises', async (req, res) => {
    try {
      const exercises = await Exercise.find();
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve exercises' });
    }
});
});
app.post('/exercises', (req, res) => {
  app.post('/exercises', async (req, res) => {
    try {
      const { name, duration, calories } = req.body;
      const exercise = new Exercise({ name, duration, calories });
      await exercise.save();
      res.status(201).json({ message: 'Exercise saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save exercise' });
    }
  });
});