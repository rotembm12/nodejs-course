const auth = (req, res, next) => {
  // if(req.body?.user)
  if (req.body && req.body.user) {
    req.isAuth = true;
    next();
  } else {
    res.status(400).json({ error: "u are not authenticated" });
  }
};

// make middleware in a seperate file
// the middleware should check if user is available on req.body
// if true -> modify the request and add the user to the req ( req.user = req.body.user ) and next
// if false -> abort request: res.status(500).json({error: "error"});

exports.auth = auth; // const {auth} = require(path)

// module.exports = auth; // const nameYouChoose = require(path)
