const router = require("express").Router();

const loginRoutes= require("./loginRoutes")
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/", loginRoutes);

module.exports = router;
