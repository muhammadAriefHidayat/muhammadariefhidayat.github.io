const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(
express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));


// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// about page
app.get('/education', function (req, res) {
  res.render('pages/education');
});

app.get('/skill', function (req, res) {
  res.render('pages/skill');
});

app.get('/projects', function (req, res) {
  res.render('pages/projects');
});

app.get('/contact', function (req, res) {
  res.render('pages/contact');
});

app.get('/project/coloring', function (req, res) {
  res.render('pages/project/coloring');
});

app.get('/project/flambo', function (req, res) {
  res.render('pages/project/flambo');
});

app.get('/project/badakberjaya', function (req, res) {
  res.render('pages/project/badakberjaya');
});

app.get('/project/barcode', function (req, res) {
  res.render('pages/project/barcode');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})