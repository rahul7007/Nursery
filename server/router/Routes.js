const express = require('express')

const nurseryCtrl = require('../controllers/nurseryController')

const router = express.Router()

// router.post('/insert', nurseryCtrl.insertData)
// router.get('/display', nurseryCtrl.getData)
// router.put('/update/:id', nurseryCtrl.updateData)
// router.delete('/delete/:id', nurseryCtrl.deleteData)

// login/register
router.post('/signup', nurseryCtrl.signup)
router.post('/signin', nurseryCtrl.signin)

router.post('/product/create', nurseryCtrl.createProduct)
router.get('/products', nurseryCtrl.getProducts)
router.get('/product/:productId', nurseryCtrl.getProductById)

// aad to cart
router.put('/add-to-cart/:userId', nurseryCtrl.addToCart) //update user model with cart array

//access my cart
router.get('/my-cart/:userId', nurseryCtrl.viewMyCart) //get cart items

//modify cart items
router.post('/update-cart/:userId/:productId', nurseryCtrl.updateCart)

//remove cart items
router.delete('/remove-cart-item/:userId/:productId', nurseryCtrl.removeCartItem)

module.exports = router