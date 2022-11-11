const { Transaction, User, Account } = require("../../models");
const ifLoggedIn = require("../../utils/auth");


const router = require("express").Router();

//post route

router.route("/")

.post(ifLoggedIn, async (req, res) => {
  try {
    const newTransaction= await Transaction.create({
      ...req.body,
      account_id: req.session.user_id
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

router.put("/send", ifLoggedIn, async(req, res)=>{
  try {
    const newAmount= await Account.update({
      // All the fields you can update and the data attached to the request body.
      // user_id: req.body.user_id,
      acc_balance: req.body.acc_balance,
      // email: req.body.email,
      // dateOfBirth: req.body.dateOfBirth
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.account_id,
      },
    })
    console.log(req.body)
    console.log(req.params)

    res.status(200).json(newAmount)
    
  } catch (error) {
    res.status(400).json(error)
  }
})

  module.exports = router;

  
