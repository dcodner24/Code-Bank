const { Account } = require("../models");
const ifLoggedIn = require("../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {

  // if they are already logged redirect to account
  if (req.session.logged_in) {
    res.redirect('/account');
    return;
  }
  res.render("login", {title:"homepage"});
});

// use this route to get account information
router.get('/account/:id', async (req, res) => {
  try {
    const accountData = await Account.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const account = accountData.get({ plain: true });

    res.render('account', {
      ...account,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/profile', ifLoggedIn, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] }
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });






module.exports = router;
