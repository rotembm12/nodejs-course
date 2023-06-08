const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end({ test: 123 });
  })
  .listen(9999, () => {
    console.log("Server running at port 9999");
  });
