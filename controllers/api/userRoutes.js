const { User, Account, Transaction } = require("../../models");

const router = require("express").Router();

router.get("/", async(req, res) => {
 try {
  const userLoginInfo= await User.findAll({
      attributes: { exclude: ['password'] },
    })
   res.status(200).json(userLoginInfo);


 } catch (error) {
  res.status(500).json(error);

 }
  
});
router.get("/:id", (req, res) => {
  res.send("hello ");
});

//create new data to send to database
//api/users/signup
router.post("/signup", async(req, res)=>{
try {
  const userLoginInfo= await User.create(req.body)

  req.session.save(() => {
    req.session.user_id = userLoginInfo.user_id;
    req.session.email = userLoginInfo.email;
    req.session.loggedIn = true;
  });
    res.status(200).json(userLoginInfo);

} catch (error) {
  res.status(200).json(error)
  
}

  
})

router.post("/login", async (req, res) => {
try {
  const userLoginInfo= await User.findOne({ where: { email: req.body.email }})
   
  if(!userLoginInfo){
    res.status(400).json({message: 'Incorrect email or password, please try again'})
    return
  }
  const validPassword= await userLoginInfo.checkPassword(req.body.password)
  
  if(!validPassword){
    res.status(400).json({message: 'Incorrect email or password, please try again'})
    return
  }
  
  req.session.save(() => {
    req.session.user_id = userLoginInfo.user_id;
    req.session.email = userLoginInfo.email;
    req.session.loggedIn = true;
   
  });
  
} catch (error) {
  res.status.json(error)
}
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


//export
module.exports = router;
