const express = require('express')
const router = express.Router();
const productForm = require('../controllers/product-controller');

router.route("/addProduct").post(productForm.addProduct);
router.route('/deleteProduct').delete(productForm.deleteProduct);
router.route('/updateProduct').post(productForm.updateProduct);
router.route('/getProduct').get(productForm.getProduct);
router.route('/getProductByCategory').post(productForm.getProductByCategory);
router.route('/sortProductsByPrice').post(productForm.sortProductsByPrice);

module.exports = router;