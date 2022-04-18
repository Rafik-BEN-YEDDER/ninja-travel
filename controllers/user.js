const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
exports.signup = async (req, res) => {
  try {
    const {email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ ...req.body, password: hashedPassword });

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.SECRETKEY);
    return res
      .status(200)
      .send({ msg: "signup done ", user: newUser, token });
  } catch (error) {
    return res.status(400).send({ msg: "error in signup " });
  }
};
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "login failed" }] });
    }
    const foundPassword = await bcrypt.compare(password, foundUser.password);
    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "login faileddddd" }] });
    }
    const token = jwt.sign({ id: foundUser._id }, process.env.SECRETKEY);
    return res.status(200).send({ msg: "signin done ", user: foundUser, token });
  } catch (error) {
    return res.status(400).send({ msg: "error in signin " });
  }
};
