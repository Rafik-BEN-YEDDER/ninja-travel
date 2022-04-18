const User = require("../model/User");
const jwt = require("jsonwebtoken");

const isAuthUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not autorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const foundUser = await User.findOne({ _id: decoded.id });
    if (!foundUser) {
      return res.status(401).send({ errors: [{ msg: "not autorized" }] });
    }
    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "not autorized" }] });
  }
};

module.exports = isAuthUser;