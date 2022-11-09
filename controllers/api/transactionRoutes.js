const { Transaction, User, Account } = require("../../models");
const ifLoggedIn = require("../../utils/auth");


const router = require("express").Router();

//post route

router.route("/")

.post(ifLoggedIn, async (req, res) => {
  try {
    const newTransaction= await Transaction.create({
      ...req.body,
      user_id: req.session.user_id
    })

    res.status(200).json(newTransaction)
    
  } catch (error) {
    res.status(400).json(error)
  }
})

///get route 
.get(async (req, res) => {
  try {
      const transData= await Transaction.findAll({

      })

      res.status(200).json(transData);

  } catch (error) {
       res.status(500).json(error);
  }   

})


  module.exports = router;

  
