const express = require("express");
const router = express.Router();
const { register, login } = require("./auth.Controllers");
const {registerValidator,loginValidator} = require("./validators/auth.Validators")

router.post("/register",registerValidator, register);

router.post("/login", loginValidator,login);

module.exports = router;
