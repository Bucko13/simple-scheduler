const express = require('express');
const path = require('path');
const morgan = require('morgan'); // for console logging with express 4
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.json());                                     // parse application/json

app.get('/', (req, res) => {
  res.send('index.html');
});


app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port '.concat(port));
});
