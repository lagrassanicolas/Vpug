
var express = require('express');
const film =  require ('./film.json');
const app = express();
const path = require ("path");


app.set('view engine','pug');
app.use(express.static(__dirname + '/public'));

app.get('/api/movies', function (req, res) {
  res.send(film);
});
  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
