const router = require("express").Router();
const createCategory = require("../BLL/CategoryBLL").createCategory;
const getCategory = require("../BLL/CategoryBLL").getCategory;

router.post("/", createCategory);
router.get("/", getCategory);

module.exports = router;
