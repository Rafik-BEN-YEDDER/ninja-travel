const { validationResult, check } = require("express-validator");

exports.registerValidation = () => [
  check("name", "name is required").notEmpty(),
  check("email", "email must be valid").isEmail(),
  check("password", "at least 6 caracters").isLength({ min: 6 }),
];
exports.loginValidation = () => [
  check("email", "email must be valid").isEmail(),
  check("password", "at least 6 caracters").isLength({ min: 6 }),
];

exports.Validation = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    res.status(200).json({ errors: error.array() });
  }
  next();
};
