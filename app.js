const express = require('express');
const mysql = require('mysql');
const app = express();

// menspesifikasiakan letak file css dan gambar diletakan yaitu di public
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// deskripsi koneksi ke mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adanrootsql123',
  database: 'list_app'
});

// membuat statement apabila error/sukses
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

// mengprint database di terminal
/* app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(results);
    }
  );
}); */

// membuat route ke top.ejs
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// membuat route ke database untuk mengeprint table items di index.ejs
app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

// route ke new.ejs
app.get('/new', (req, res) => {
  res.render('new.ejs');
});

// route untuk memasukan item ke table items
app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.listen(3000);