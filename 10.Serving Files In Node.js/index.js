import http from "http";
import fs from "fs";

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.writeHead(200 , "Ok" , {"Content-Type":"text/html"});
        fs.readFile("./public/home.html",(err , data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    else if(req.url === '/about')
        {
            res.writeHead(200 , "Ok" , {"Content-Type":"text/html"});
            fs.readFile("./public/about.html",(err , data) => {
                if(err) throw err;
                res.end(data);
            });
        }
        else
        {
            res.writeHead(404 , "Bad" , {"Content-Type":"text/html"});
            res.end("<h1> Page Not Found </h1>")
        }

});

server.listen(8000 , () => {console.log("Server Start");
})