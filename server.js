var express = require('express')
var app = express()
var bodyParser = require('body-parser')


// app.use(require('./controllers/index.js'))

app.use(express.static('client'))

// -----------------
// Execute unix command

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
	console.log(stdout) 
}

exec("echo \"hello\"", puts);

// ----------------

app.listen(3000, function () {
  console.log('listening on port 3000')
})