const router = require("express").Router();

const loginRoutes= require("./loginRoutes")
const apiRoutes = require("./api");
const accountRoutes= require("./accountRoutes")
router.use("/api", apiRoutes);
router.use("/", loginRoutes);
router.use("/account", accountRoutes)

module.exports = router;
