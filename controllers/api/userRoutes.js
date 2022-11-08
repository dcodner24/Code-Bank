const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello ");

  console.log(req.session);
});
router.get("/:id", (req, res) => {
  res.send("hello ");
});

router.post("/login", async (req, res) => {
  const dbUserData = {
    person: "chiemeka",
  };
  req.session.save(() => {
    // req.session.user_id = dbUserData.id;
    // req.session.username = dbUserData.username;
    // req.session.loggedIn = true;
    console.log(req.session);

    res.json({
      user: dbUserData,
      message: "You are now logged in!",
    });
  });
});
module.exports = router;

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});
