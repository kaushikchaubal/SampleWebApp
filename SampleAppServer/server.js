var express = require('express')
, cors = require('cors')
, app = express();

app.use(cors());

app.get('/hello', function(req, res){
	console.log("Received request");
	var repsonseJson = {
		"key1":{"name":"First Name"},
		"key2":{"name":"Second Name"},
		"key3":{"name":"Third Name"}
	};
	res.json(repsonseJson);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});