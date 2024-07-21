const express = require("express");
const router = express.Router();

const Product = require('../models/product.js');
const multer = require("multer");

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      let data = Date.now();
      let fl = data + '.' + file.mimetype.split('/')[1];
      cb(null, fl);
    }
  });
  

const upload = multer({ storage: mystorage });

router.post('/createProduct', upload.any('image'), async (req, res) => {
  try {
    const data = req.body;
    const product = new Product(data);
    product.image = req.files[0].filename;
    const savedProduct = await product.save();
    res.status(201).send(savedProduct)
  } catch (error) {
    res.status(400).send(error);
  }
});
  router.get('/getProduct', async(req, res) => {
    
      try {
        products=await Product.find();
        res.status(200).send(products);
        } catch (error) {
            res.status(400).send(error);
        }
  });

  router.delete('/deleteProduct/:id', async(req, res) => {
   
       try {
         const id = req.params.id;
         Products=await Product.findOneAndDelete({ _id: id });
         res.status(200).send(Products);
       } catch (error) {
         res.status(400).send(err);
       }
   });

   router.put('/updateProduct/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const newData = req.body;
      const updatedProduct = await Product.findByIdAndUpdate({ _id: id }, newData, { new: true });
      res.status(200).send(updatedProduct);
    } catch (err) {
      console.error(err);
      res.status(400).send({ message: 'Error updating product' });
    }
  });










module.exports=router;