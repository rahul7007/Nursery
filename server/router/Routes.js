const express = require('express')

const nurseryCtrl = require('../controllers/nurseryController')

const router = express.Router()

// router.post('/insert', nurseryCtrl.insertData)
// router.get('/display', nurseryCtrl.getData)
// router.put('/update/:id', nurseryCtrl.updateData)
// router.delete('/delete/:id', nurseryCtrl.deleteData)
router.post('/product/create', nurseryCtrl.createProduct)
router.get('/products', nurseryCtrl.getProducts)

module.exports = router