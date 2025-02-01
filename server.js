const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

let db = new sqlite3.Database('./financial.db');

app.use(express.json());

app.get('/api/stocks', (req, res) => {
  db.all('SELECT * FROM stocks', (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching stocks' });
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
