const product = require('../models/product-model');
const catchAsyncErrors = require('../middlewares/catchAsyncError');

//-------------------------- Add Product ----------------------------//
const addProduct = catchAsyncErrors(async (req,res) => {

    
        const { name, description, price, images, category} = req.body;

        const productExist = await product.findOne({name});
        console.log(productExist);

        if(productExist){
            return res.status(400).json({msg: "product already exist"});
        }

        await product.create({name, description, price, category,images});

        res.status(200).json({msg: "product created successfully"});

  
});

//-------------------------- Delete Product ----------------------------//

const deleteProduct = catchAsyncErrors (async (req, res) =>{

    const deleteProduct = await product.findOneAndDelete(
        { name: req.body.name}
    );
    res.status(200).json({msg: "product deleted successfully"});
});

//-------------------------- Update Product ----------------------------//

const updateProduct = catchAsyncErrors (async (req, res) => {
    
        const updateResult = await product.findOneAndUpdate(
            {name: req.body.name},
            {
                description: req.body.description,
                price: req.body.price,
                seller: req.body.seller,
                category: req.body.category
            },
            {new:true}
        )
        res.json(updateResult);
        res.status(200).json({msg:"Product Updated"})
        
   
});

//-------------------------- Get Product ----------------------------//

const getProduct = catchAsyncErrors (async (req, res) =>{
    
        const products = await product.find();
        console.log("Products from get products : ",products);

        if(!products || products.length===0){
            res.status(404).json({msg:"No products found"});
        }

         res.status(200).json(products)
    
});

//-------------------------- Get Product By Categories ----------------------------//

const getProductByCategory = catchAsyncErrors (async (req, res) =>{
        const { categories } = req.body;

        //-------------------------Category Exits ---------------------//
        const categoryExists = await product.findOne({ category: { $in: categories } });
        if (!categoryExists) {
        return res.status(404).json({ message: 'Category not found.' });
        }

        //-------------------------Product Exits ---------------------//
        const products = await product.find({ category: { $in: categories } }, 'url name price description');
    
        if (products.length === 0) {
          return res.status(404).json({ message: 'No items available in the provided categories.' });
        }
    
        res.json(products);
});

//-------------------------- Get Product By Name----------------------------//

const getProductByName = catchAsyncErrors (async (req, res) =>{
  const { name } = req.body;
        //-------------------------Product Exists ---------------------//
        const productExists = await product.findOne({ name:name});
        
        if (!productExists) {
        return res.status(404).json({ message: 'Product not found.' });
        }

        //-------------------------Send the product Exists ---------------------//
        
        const products = await product.find({name:name }, 'url name price description');
    
        if (products.length === 0) {
          return res.status(404).json({ message: 'No items available in the provided categories.' });
        }
    
        res.json(products);

})

//-------------------------- sort product by price ----------------------------//

const sortProductsByPrice = catchAsyncErrors (async (req, res) => {
      const { sortBy } = req.body;
      let sortCriteria = {};
  
      // Check the sortBy parameter
      if (sortBy === 'highToLow') {
        sortCriteria = { price: -1 }; 
        console.log(sortCriteria)// Sort high to low
      } else if (sortBy === 'lowToHigh') {
        sortCriteria = { price: 1 }; // Sort low to high
        console.log(sortCriteria)
      } else {
        return res.status(400).json({ message: 'Invalid sorting criteria.' });
      }
  
      const products = await product.find().sort(sortCriteria).select('url name price description');
  
      if (products.length === 0) {
        return res.status(404).json({ message: 'No items available to sort.' });
      }
  
      res.json(products);
});

module.exports = {
  addProduct, 
  deleteProduct, 
  updateProduct, 
  getProduct, 
  getProductByCategory,
  sortProductsByPrice,
  getProductByName
}