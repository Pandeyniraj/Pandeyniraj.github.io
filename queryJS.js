/**
 * Created by student on 6/11/2016.
 */
var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
    var page = url.parse(req.url).pathname;
    res.writeHead(200,{"Content-Type":"text/plain"})
    if(page=="/login")
    {
        res.write('Request page is login' +page);
    }
    else if(page=="/signup")
    {
        res.write('The request page is sign up' +page);
    }
    else
    {
        res.write('welcome tp home' +page);
    }
    console.log(page);
    //res.writeHead(200,{"Content-Type":"text/plain"});
    //res.write('welcome' +page);
    res.end();
});
server.listen(8080);