const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecomerce')//creation du data-base!!
   .then(
        ()=>{
            console.log('connected');

        }
   )
  .catch(
        (err)=>{
            console.log(err);
        }
   )
   module.exports=mongoose;


