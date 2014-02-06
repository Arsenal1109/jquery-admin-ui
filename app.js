var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('graceful-fs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, './public')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});	


function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getJson(file){
    var filepath = __dirname + '/json/' + file;
    return readJsonFileSync(filepath);
}

//Routes
app.get('/api/products/:id', function(req, res) {
	id = req.params.id
	console.log(getJson('sample_product_' + id + '.json'))
	res.send();
});
