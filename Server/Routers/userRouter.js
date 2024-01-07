const router = require("express").Router();
const updateUser = require("../BLL/UsersBLL").updateUser;
const deleteUser = require("../BLL/UsersBLL").deleteUser;
const getUser = require("../BLL/UsersBLL").getUser;

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;
