/**
 * Created by student on 6/11/2016.
 */
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var page = url.parse(req.url).pathname;
    res.writeHead(200);
    res.end("HI How R U ?");
});
server.on('close', function (req, res) {
    console.log("Good Bye Srever !");
    
});
server.listen(8080);
server.close();