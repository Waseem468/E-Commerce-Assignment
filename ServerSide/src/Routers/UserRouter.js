const express = require("express");
const {UserRegisterMethod,UserLoginMethod} = require("../Controller/UserController");

const router = express.Router();

router.post("/register", UserRegisterMethod);

//login
router.post("/login", UserLoginMethod);

module.exports = router;