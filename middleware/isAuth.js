const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not autorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const foundAdmin = await Admin.findOne({ _id: decoded.id });
    if (!foundAdmin) {
      return res.status(401).send({ errors: [{ msg: "not autorized" }] });
    }
    req.admin = foundAdmin;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "not autorized" }] });
  }
};

module.exports = isAuth;
