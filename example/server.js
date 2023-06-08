const http = require("http");

const server = http.createServer(function (req, res) {
  res.setHeader("X-My-Header", "My app");
  try {
    switch (req.url) {
      case "/dogs": {
        res.end("You got dogs");
        break;
      }
      case "/cats": {
        res.end("You got Cats");
        break;
      }
      default:
        throw new Error("Path not defined");
    }
  } catch (error) {
    res.end(error.message);
  }

  //   if (req.method === "GET") {
  //     return res.end("Hello from server");
  //   }
  //   if (req.method === "POST") {
  //     return res.end("You are trying to post");
  //   }
});

const port = 3000;

server.listen(port);
