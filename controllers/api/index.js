const router = require("express").Router();
const userRoutes = require("./userRoutes");
const accountRoutes = require("./accountRoutes");
const transactionRoutes = require("./transactionRoutes")


router.use("/users", userRoutes);
router.use("/accounts", accountRoutes);
router.use("/transaction", transactionRoutes)

module.exports = router;
