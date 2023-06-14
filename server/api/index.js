const express = require("express");
const bodyParser = require("body-parser");

const { auth } = require("./auth.mw");

const app = express();

const idle = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

const promiseSomething = () => {
  return new Promise((resolve, reject) => {
    idle().then(() => {
      const value = Math.random() > 0.5 ? "success" : null;

      if (value) {
        resolve(value);
      } else {
        reject("couldnt calc");
      }
    });
  });
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return promiseSomething()
    .then((value) => {
      console.log(value);
      res.json({ hello: "world" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

app.post("/", (req, res) => {
  res.json({ isAuth: req.isAuth });
});

app.post("/update", (req, res) => {
  console.log(req);
  console.log("updating");
  res.json({ ok: true });
});

app.get("/my-posts", (req, res) => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      return res.json(posts);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ error: error });
    });
});

module.exports = app;
