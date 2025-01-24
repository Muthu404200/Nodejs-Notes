import http from "http";

const server = http.createServer((req,res)=> {
    // console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200,"ok",{ "Content-Type":"text/html" });
        res.end("<h1>Home</h1>")
    } else if(req.url ==="/about") {
        res.writeHead(200,"ok",{ "Content-Type":"text/html" });
        res.end("<h2>About Section </h2>");
    } else if(req.url ==="/contact") {
        res.writeHead(200,"ok",{ "Content-Type":"text/html" });
        res.end("<h3> Contact </h3>");
    }else {
        res.writeHead(404,"Bad",{ "Content-Type":"text/html" });
          res.end("<h1>  page not found : ( </hl>")
    }
});

server.listen(8000, () => {console.log("Server Start");
})