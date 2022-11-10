const router = require("express").Router();



router.get("/", async (req, res) => {

    //if they are already logged redirect to account
    try {
     

      res.render("signup",
    
    
      );
  } catch (error) {
       res.status(500).json(error);
  }   

  });

  module.exports = router;
