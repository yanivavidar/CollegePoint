const router = require("express").Router();
const register = require("../BLL/AuthBLL").register;
const login = require("../BLL/AuthBLL").login;

router.post("/register", register);
router.post("/login", login);

module.exports = router;
