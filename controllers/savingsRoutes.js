const router = require("express").Router();
const { Account, User, Transaction } = require("../models");
const ifLoggedIn= require("../utils/auth")
const Finance = require('financejs');
const finance = new Finance();
const helper = require('../utils/helpers')



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
    
      
      
      
      let savings_accs = accounts.filter(account => account.is_savings == true);
      console.log(savings_accs);

      let tenYearBalance = finance.CI(4, 1, savings_accs[0].acc_balance, 10 );
      tenYearBalance = helper.format_amount(tenYearBalance);
      console.log(tenYearBalance);

      res.render("savings",{
        // layout: 'account',
        transactions,accounts,tenYearBalance
        // Pass the logged in flag to the template
      }
    
      );
  } catch (error) {
       res.status(500).json(error);
  }   

  });

  module.exports = router;
