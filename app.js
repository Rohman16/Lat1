const http = require("http");

function handleRequest(req, res) {
  if (req.url == "/currentTime") {
    res.statusCode = 200;
    res.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1> Hello World</h1>");
  }
}
const myServer = http.createServer(handleRequest);

myServer.listen(5000);
