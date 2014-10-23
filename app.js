var express = require('express')
var app = express()
var yo = require('./yoAPI.js')

var apiToken = ''; // Yo API Token here (from dev.justyo.co)

app.set('port', (process.env.PORT || 5000))
app.get('/callback', function(req, res){
	var username = req.query.username
	if (!username){
		console.log('no username')
		res.status(400).end()
	}
	else{
		console.log("Initiated: "+username)
		yo(username, apiToken, 1, function(error){
			if (error) {
				console.log('Error: ' + error)
				res.status(502).send({result: 'error', error: error})
			}
			else{
				res.status(200).send({result: 'success', username: username})
			}
		})
	}
})

app.get('/', function(req, res){
	res.send('hello world')
})

app.use('*', function(req, res){
	res.status(404).end()
})

app.listen(app.get('port'), function(){
	console.log("ECHYO: " + app.get('port'))
})
