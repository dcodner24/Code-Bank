const router = require("express").Router();
const ifLoggedIn= require("../utils/auth")
router.get("/",ifLoggedIn, (req, res) => {

    //if they are already logged redirect to account
  
    res.render("account",{title:"Account"});
  });

module.exports=router