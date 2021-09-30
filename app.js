const express = require('express');
const mysql = require('mysql');
const app = express();
// EJS = Embedded JavaScript

// menspesifikasikan folder yang menyimpan file CSS dan gambar
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'adan',
  password: 'adanrootsql123',
  database: 'list_app'
});

// menambahkan route ke top.ejs melalui root
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// menambahkan route ke index.ejs di folder index
app.get('/index', (req, res) => {
  // query sql
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      // Teruskan object sebagai argument ke-2 res.render
      res.render('index.ejs', {items: results});
    }
  );
});

app.listen(3000);