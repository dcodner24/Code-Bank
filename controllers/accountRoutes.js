const router = require("express").Router();
const { Account, User } = require("../models");
const ifLoggedIn= require("../utils/auth")



router.get("/",ifLoggedIn, async (req, res) => {

    //if they are already logged redirect to account
    try {
      const accountData= await User.findAll({ where: { user_id: req.session.user_id } })
  
      const users = accountData.map((project) => project.get({ plain: true }));
 console.log(req.session)
      res.render("account",{
        // layout: 'dashboard',
        users,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      }
    
      );
  } catch (error) {
       res.status(500).json(error);
  }   

  });
  router.get("/test",async (req, res)=>{

 console.log(req.session)
    try {
      const accountData= await Account.findAll({ where: { user_id: req.session.user_id } })
  res.status(200).json(accountData)
    } catch (error) {
       res.status(500).json(error.message)
    }
     })
     
  



module.exports=router