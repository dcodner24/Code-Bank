const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const loginRoutes= require("./loginRoutes")
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/login", loginRoutes)

module.exports = router;
