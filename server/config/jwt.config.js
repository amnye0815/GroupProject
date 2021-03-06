const jwt = require("jsonwebtoken");
const secret = "codingdojo";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      console.log(payload);
      req.jwtpayload = payload;
      next();
    }
  });
};
