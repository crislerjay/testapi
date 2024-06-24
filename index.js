const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute)

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  })
  .catch(() => {
    console.log('connection failed!');
  })


// //add a product
// router.post('/api/products', async (req, res) => {
//   try {
//     const product = await Product.create(req.body)
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// //get all product
// router.get('/api/products', async (req, res) => {
    // try {
    //   const products = await Product.find({})
    //   res.status(200).json(products)
    // } catch (error) {
    //   res.status(500).json({message: error.message})
    // }
// })

// //get single product
// router.get('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const product = await Product.findById(id)
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// //update a product
// router.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const product = await Product.findByIdAndUpdate(id, req.body)

//     if (!product) {
//       return res.status(404).json({message: 'Product not found!'})
//     }

//     const updatedProduct = await Product.findById(id)
//     res.status(200).json(updatedProduct)

//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// //delete a product
// router.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const product = await Product.findByIdAndDelete(id)

//     if (!product) {
//       return res.status(404).json({message: 'Product not found!'})
//     }

//     res.status(200).json({message: 'Product deleted successfully!'})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })