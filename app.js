const express = require('express');

const app = express();

// EJS = Embedded JavaScript

// menspesifikasikan folder yang menyimpan file CSS dan gambar
app.use(express.static('public'));


// menambahkan route ke top.ejs melalui root
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// menambahkan route ke index.ejs di folder index
app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);