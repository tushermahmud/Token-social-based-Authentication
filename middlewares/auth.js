const jwt = require("jsonwebtoken");

const authCheck = async(req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      error: "no token found",
    });
  }
  try {

    jwt.verify(token, "MYSECRETTOKEN", async (err, decode) => {
      if (err) {
        return res.json({
          error: err.message,
        });
      }
      console.log(decode);

      req.userId = decode.id;
    });

    // const decoded = jwt.verify(token, "MYSECRETTOKEN");
    // req.user = decoded.user;
    // console.log(token);
    // console.log(decoded);

    next();
  } catch (e) {
    res.status(401).json({
      error: "the token is not valid",
    });
  }
};

module.exports = authCheck;
