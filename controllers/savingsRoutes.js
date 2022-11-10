const router = require("express").Router();
const { Account, User, Transaction } = require("../models");
const ifLoggedIn= require("../utils/auth")



router.get("/",ifLoggedIn, async (req, res) => {

    //if they are already logged redirect to account
    try {
      const transactionData= await Transaction.findAll({ where: { account_id: req.session.user_id } })
  
      const transactions = transactionData.map((project) => project.get({ plain: true }));
      console.log(transactions)


      console.log(transactions)
      const accounting= await Account.findAll({ where: { user_id: req.session.user_id } },{
        include: [{ model: Account }],
      })
      const accounts = accounting.map((project) => project.get({ plain: true }));

      res.render("savings",{
        // layout: 'account',
        transactions,accounts
        // Pass the logged in flag to the template
      }
    
      );
  } catch (error) {
       res.status(500).json(error);
  }   

  });

  module.exports = router;
