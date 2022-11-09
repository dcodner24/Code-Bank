const { Account, Transaction, User } = require("../../models");
const ifLoggedIn = require("../../utils/auth");

const router = require("express").Router();

router.post("/", ifLoggedIn, async (req, res) => {
  try {
    const newAccount= await Account.create({
      ...req.body,
      user_id: req.session.user_id
    })

    res.status(200).json(newAccount)
    
  } catch (error) {
    res.status(400).json(error)
  }
});

router.get("/:id", (req, res) => {
  res.send("accountid ");
});

router.delete("/:id",ifLoggedIn, async (req,res)=>{
  
  try {
    
    const accountdata= await Account.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    })
    if (!accountdata) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(accountdata);

  } catch (error) {
    res.status(500).json(error);

  }
} )


router.get("/",async (req, res) => {
  try {
      const accountData= await Account.findAll({
        
      })

      res.status(200).json(accountData);

  } catch (error) {
       res.status(500).json(error);
  }   

})
module.exports = router;
