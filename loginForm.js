/**
 * Created by student on 6/10/2016.
 */
var http= require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{"ContentType":"text/html"})
    res.write(
             "<!Doctype html>"  +
             "<html lang='en'>" +
             "<head>" +
                 "<meta charset='UTF-8'> " +
             "<title>Login Form</title>" +
             "</head>"+
              "<body>" +
             "<h2 style='color: blue; text-decoration: underline'>Login Details</h2>"+"<br>"+
        "User Id :<input type='text' name='uid'  >" +"<br>" +"<br>"+
       "Password :<input type='password' name='pwd'>" +"<br>" +"<br>"+
            "<button name='btnSubmit'>Submit</button>" +"<br>"+
        "</body>" +"<br>"+
    "</html>"
    )
    res.end()
})
server.listen(8080)