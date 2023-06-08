const http = require("http");

const fs = require("fs");

const urls = {
  dogs: "/dogs",
  cats: "/cats",
  ducks: "/ducks",
};

const pages = {
  dogs: "./pages/dogs.html",
  cats: "./pages/cats.html",
  ducks: "./pages/ducks.html",
};

const methods = {
  get: "GET",
  post: "POST",
};

const getPageContent = (page) => {
  const pageContent = fs.readFileSync(page);
  return pageContent;
};

const server = http.createServer((req, res) => {
  if (req.method === methods.get) {
    res.setHeader("Content-Type", "text/html");
    let content;
    let htmlString;
    switch (req.url) {
      case urls.dogs: {
        content = getPageContent(pages.dogs);
        break;
      }
      case urls.cats: {
        content = getPageContent(pages.cats);
        break;
      }
      case urls.ducks: {
        content = getPageContent(pages.ducks);

        htmlString = content.toString();

        htmlString.replace("__IMAGE__", ` new image`);

        return res.end(htmlString);
      }
      default:
        "No page available";
    }
    return res.end(content);
  }

  if (req.method === methods.post) {
    res.end("Post method");
  }
});

server.listen(4100, () => {
  console.log("server is running");
});
