const router = require("express").Router();

const loginRoutes= require("./loginRoutes")
const apiRoutes = require("./api");
const checkingRoutes= require("./checkingRoutes")
const accountRoutes= require("./accountRoutes")
const savingsRoutes= require("./savingsRoutes")
const signupRoutes= require("./signupRoutes")

router.use("/api", apiRoutes);
router.use("/", loginRoutes);
router.use("/account", accountRoutes);
router.use("/checking", checkingRoutes);
router.use("/savings", savingsRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
