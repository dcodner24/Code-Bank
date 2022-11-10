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
router.get('/accountdata/:id', async (req, res) => {
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



router.get("/test", (req, res)=>{

  try {
    res.status(200).json({message:"sadsadasda"})

  } catch (error) {
     res.status(500).json(error.message)
  }
   })
   



module.exports = router;
