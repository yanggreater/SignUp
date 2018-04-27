var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var fs = require("fs");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/read/1', function (req, res) {
	console.log(req.params.id)
	res.send('1')
	// res.sendfile(`${__dirname}/demo.html`);
});

app.post('/api/add',function(req,res){
	var data = JSON.stringify(req.body);
	data = data+';';
	fs.writeFile('./wfile.json',data,{flag:'a',encoding:'utf-8',mode:'0666'},function(err){
     if(err){
         console.log("文件写入失败");
     }else{
         console.log("文件写入成功");

     }

	}) ;
	res.send('sdasdas');
});


app.get('/api/read',function(req,res){
	
	var bin = fs.readFileSync('./wfile.json');
	
	res.send(bin.toString());
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
