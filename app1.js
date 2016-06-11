/**
 * Created by student on 6/10/2016.
 */
var http= require('http')

var server=http.createServer(function(req,res){
    var name="Niraj K Pandey"
    var dept="MCA"
    var year="Second Year"
    res.writeHead(200,{"ContentType":"text/html"})
    res.write("<h1 style='font-size: x-large ; color: blue; text-decoration: underline'>Introduction</h1>" +"<br>"+"<span>Name :</span>" +name + "<br>" +"<span>Dept :</span>" +dept + "<br>" +"<span>Year :</span>" +year)
    res.end()
})
server.listen(8080)