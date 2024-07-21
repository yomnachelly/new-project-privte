const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); // destination du modèle user
const bcrypt = require('bcrypt');

// Route d'enregistrement
router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        const user = new User(data);

        // Hashage du mot de passe
        const salt = bcrypt.genSaltSync(10);
        const cryptedpass = await bcrypt.hash(data.password, salt);
        user.password = cryptedpass;

        // Sauvegarde de l'utilisateur
        const savedUser = await user.save();
        res.status(200).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});







// Route de connexion
router.post('/login', async (req, res) => {
   
        const data = req.body;
        const user = await User.findOne({ email: data.email });
        if(!user){
            res.status(404).send('email invalide');
        }
        else{
            validPass=bcrypt.compareSync(data.password,user.password)
            if(!validPass){
                res.status(401).send('email or password invalid')
            }
            else{
                payload={
                    _id: user._id,
                    email:user.email,
                    name:user.name
                }
                token =jwt.sign(payload,'123457')
                res.status(200).send({mytoken:token})
            }
        }

});




//User crud;
/*router.post('/add',async(req, res)=>{
    //1ere methode;
    data=req.body;
    usr= new User(data);
    usr.save()
        .then(
            (savedUser)=>{
                res.status(200).send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err)
            }
        )
       //2eme methode;
       try {
        data=req.body;
        usr= new User(data);
        savedUser=await usr.save();
        res.send(savedUser);


       } catch (error) {
        res.send(err);
       }
    
});*/

















router.get('/getall', async(req, res) => {
    //1ere methode;
   /* User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });*/
      //2eme methode;
      try {
        Users=await User.find({age:54});
        res.send(Users);
      } catch (error) {
        res.send(error);
      }
  });
  router.get('/getbyid/:id', async(req, res) => {
    
    /* myid=req.params.id;
     User.findOne({_id:myid})
     .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });*/
      try {
        myid=req.params.id;
        Users=await User.findOne({_id:myid});
        res.send(Users);
      } catch (error) {
        res.send(error);
      }

  });
    

router.put('/update/:id',(req,res)=>{
   id=req.params.id;
   newData=req.body;
   User.findByIdAndUpdate({_id:id},newData)
   .then((updatedUser) => {
    res.send(updatedUser);
  })
  .catch((err) => {
    res.send(err);
  });








});
router.delete('/delete/:id', async(req, res) => {
   /* const id = req.params.id;
    User.findOneAndDelete({ _id: id })
      .then((deletedUser) => {
        res.send(deletedUser);
      })
      .catch((err) => {
        res.send(err);
      });*/
      try {
        const id = req.params.id;
        Users=await User.findOneAndDelete({ _id: id });
        res.send(Users);
      } catch (error) {
        res.send(err);
      }
  });
















module.exports=router;