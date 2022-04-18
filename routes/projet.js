//express router
const express = require("express");
const { signinAdmin, signupAdmin } = require("../controllers/admin");
const { signin, signup } = require("../controllers/user");
const isAuthUser = require("../middleware/isAuthUser");
const isAuth = require("../middleware/isAuth");
const {
  registerValidation,
  loginValidation,
  Validation,
} = require("../middleware/validation");

const Voyage = require("../model/Voyage");
const User = require("../model/User");
const router = express.Router();

// auth signin/signup Admin
//
router.post("/signinAdmin", loginValidation(), Validation, signinAdmin);
router.post("/signupAdmin", registerValidation(), Validation, signupAdmin);
router.get("/currentAdmin", isAuth, (req, res) => {
  res.send(req.admin);
});

// auth signin/signup User
router.post("/signin", loginValidation(), Validation, signin);
router.post("/signup", registerValidation(), Validation, signup);
router.get("/current", isAuthUser, (req, res) => {
  res.send(req.user);
});

router.patch("/edituser/:id", async (req, res) => {
  try {
    const foundUser= await User.findById(req.params.id);
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "edit failed" }] });
    }
    Object.assign(foundUser, req.body);
    await foundUser.save();
    return res.status(200).send({ msg: "edit done ", user: foundUser });
  } catch (error) {
    return res.status(400).send({ msg: "error edit " });
  }
});
router.get("/userlist", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({ msg: "liste", users });
  } catch (error) {
    res.status(400).send({ msg: "error", error });
  }
});

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);

    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "delete failed" }] });
    }
    await foundUser.remove();
    return res.status(200).send({ msg: "delete done ", user: true });
  } catch (error) {
    return res.status(400).send({ msg: "error delete " });
  }
});




// voyage

router.post("/addvoyage", async (req, res) => {
  try {
    const newVoyage = new Voyage(req.body);
    await newVoyage.save();
    return res.status(200).send({ msg: "done ", voyage: newVoyage });
  } catch (error) {
    return res.status(400).send({ msg: "error add" });
  }
});

router.get("/voyageliste", async (req, res) => {
  try {
    const voyages = await Voyage.find();
    return res.status(200).send({ msg: "liste", voyages });
  } catch (error) {
    res.status(400).send({ msg: "error", error });
  }
});

router.delete("/deletevoyage/:id", async (req, res) => {
  try {
    const foundVoyage = await Voyage.findById(req.params.id);

    if (!foundVoyage) {
      return res.status(400).send({ errors: [{ msg: "delete failed" }] });
    }
    await foundVoyage.remove();
    return res.status(200).send({ msg: "delete done ", voyage: true });
  } catch (error) {
    return res.status(400).send({ msg: "error delete " });
  }
});


router.patch("/editvoyage/:id", async (req, res) => {
  try {
    const foundVoyage = await Voyage.findById(req.params.id);

    if (!foundVoyage) {
      return res.status(400).send({ errors: [{ msg: "edit failed" }] });
    }
    Object.assign(foundVoyage, req.body);
    await foundVoyage.save();
    return res.status(200).send({ msg: "edit done ", voyage: foundVoyage });
  } catch (error) {
    return res.status(400).send({ msg: "error edit " });
  }
});


module.exports = router;