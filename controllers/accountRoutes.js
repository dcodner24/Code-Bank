const router = require("express").Router();
router.get("/", (req, res) => {

    //if they are already logged redirect to account
  
    res.render("account",{title:"Account"});
  });

module.exports=router