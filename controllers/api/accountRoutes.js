const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("account ");
});
router.get("/:id", (req, res) => {
  res.send("accountid ");
});

module.exports = router;
