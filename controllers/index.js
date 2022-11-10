const router = require("express").Router();

const loginRoutes= require("./loginRoutes")
const apiRoutes = require("./api");
const accounthbs= require("./accounthbs")

router.use("/api", apiRoutes);
router.use("/", loginRoutes);
router.use("/account", accounthbs);

module.exports = router;
