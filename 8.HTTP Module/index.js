import http from "http";

//Create our server
const server = http.createServer((req,res) => {
    // console.log(req);
    // res.setHeader("Content-Type","text/html")
    // res.statusCode =404 ;
    // res.statusMessage = "Bad"

    //shorthand for status
    res.writeHead(202 , "Good" , {"content-type":"text/html"});
    res.write("<h1> Welcome to Node Js</h1>");
    
});

// Listening on port 8080

server.listen(8000 ,() => console.log("Server Start"));