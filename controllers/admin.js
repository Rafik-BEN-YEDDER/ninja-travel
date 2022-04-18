const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
exports.signupAdmin = async (req, res) => {
  try {
    const {email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({ ...req.body, password: hashedPassword });

    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, process.env.SECRETKEY);
    return res
      .status(200)
      .send({ msg: "signup done ", admin: newAdmin, token });
  } catch (error) {
    return res.status(400).send({ msg: "error in signup " });
  }
};
exports.signinAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "login failed" }] });
    }
    const foundPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "login faileddddd" }] });
    }
    const token = jwt.sign({ id: foundAdmin._id }, process.env.SECRETKEY);
    return res.status(200).send({ msg: "signin done ", admin: foundAdmin, token });
  } catch (error) {
    return res.status(400).send({ msg: "error in signup " });
  }
};
