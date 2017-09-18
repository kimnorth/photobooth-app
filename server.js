var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// app.use(require('./controllers/index.js'))

app.use(express.static('client'))

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/client/index.html');
// });

app.listen(3000, function () {
  console.log('listening on port 3000')
})