const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json()); // Middleware

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  res.status(200).send;
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000
