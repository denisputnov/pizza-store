const Router = require('express').Router
const OrderController = require('../controllers/order-controller')
const ProductsController = require('../controllers/product-controller')
const router = new Router()

router.get('/categories', ProductsController.getCategories)
router.get('/products/:category', ProductsController.getProducts)
router.post('/product', ProductsController.addProduct)
router.post('/category', ProductsController.addCategory)

router.post('/order', OrderController.makeOrder)
router.put('/order', OrderController.closeOrder)

router.get('/orders', OrderController.getAllOrders)

module.exports = router