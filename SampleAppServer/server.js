var express = require('express')
, cors = require('cors')
, app = express();

app.use(cors());

app.get('/getName', function(req, res){
	console.log("Received request");
	var repsonseJson = {
		"key1":{"name":"First Name"},
		"key2":{"name":"Second Name"},
		"key3":{"name":"Third Name"}
	};
	res.json(repsonseJson);
});

app.get('/getData', function(req, res){
	console.log("Received request");
	var repsonseJson = {
		"Description":"Legend explaining the graph",
		"First value":1000,
		"Second value":2000,
		"Third value":3000,
		"Forth value":4000,
		"Fifth value":5000
	};
	res.json(repsonseJson);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});