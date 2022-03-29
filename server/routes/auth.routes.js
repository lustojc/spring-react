const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult, body } = require("express-validator");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/registration",
  [
    check("email", "Uncorrect email")
      .isEmail()
      .exists()
      .isLength({ min: 3, max: 100 })
      .normalizeEmail(),
    check("password", "Password must be longer than 3 and shorter than 12")
      .isLength({ min: 3, max: 100 })
      .custom((value) => {
        if (!value.match("S*(S*([a-zA-Z]S*[0-9])|([0-9]S*[a-zA-Z]))S*")) {
          return false;
        }
        return true;
      })
      .withMessage(
        "Your password should contain at least 1 letter and 1 number"
      ),
    body("repeatPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          return false;
        }
        return true;
      })
      .withMessage("Your passwords are not equal"),
    body("firstName")
      .isLength({ min: 3, max: 100 })
      .withMessage("Your name should be more than 3 letters"),
    body("lastName")
      .isLength({ min: 3, max: 100 })
      .withMessage("Your surname should be more than 3 letters"),
    body("age")
      .custom((value) => {
        if (+value < 1) {
          return false;
        }
        return true;
      })
      .withMessage("Your must be older than 1 year old"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(401).json({ message: errors.array()[0].msg });
      }

      const { email, password, firstName, lastName, age } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exist` });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({
        email,
        password: hashPassword,
        firstName,
        lastName,
        age,
      });
      await user.save();
      return res.json({ message: "User was created" });
    } catch (e) {
      console.log(e);
      res.send({ message: "Ошибка сервера" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);

    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1h",
    });

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
