const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

// =======================
// MIDDLEWARES
// =======================

// Enable CORS for all requests (so frontend apps on other domains can access this API)
app.use(cors()); 

// Parse incoming JSON requests
app.use(express.json())

// Parse URL-encoded data (e.g., form submissions)
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
//     res.status(200).json({message: 'Product deleted successfully!'})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })
