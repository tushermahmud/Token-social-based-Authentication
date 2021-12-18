const router = require("express").Router();
var { check } = require("express-validator");

const {
  LoginController,
  RegisterController,
  activationController,
} = require("../../controllers/AuthController");

router.post("/login", LoginController);
router.post(
  "/register",
  [
    check("email", "Email is empty!!").notEmpty(),
    check("email", "Invalid email!!").isEmail(),
    check("name", "name is empty!!").notEmpty(),
    check("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    check("password", "Password field is empty!").notEmpty(),
    check("mobile", "Mobile field is empty!").notEmpty(),
    check("mobile", "mobile must be at least 11 characters").isLength({
      min: 11,
    }),
  ],
  RegisterController
);

router.post("/activation", activationController);

router.post(
  "/login",
  [
    check("email", "Email is empty!!").notEmpty(),
    check("email", "Invalid email!!").isEmail(),
    check("password", "Password field is empty!").notEmpty(),
  ],
  LoginController
);
module.exports = router;
