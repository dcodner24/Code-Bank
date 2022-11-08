const router = require("express").Router();
const userRoutes = require("./userRoutes");
const accountRoutes = require("./accountRoutes");

router.use("/users", userRoutes);
router.use("/accounts", accountRoutes);

module.exports = router;
