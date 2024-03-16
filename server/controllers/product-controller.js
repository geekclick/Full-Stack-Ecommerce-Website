const product = require('../models/product-model');

//-------------------------- Add Product ----------------------------//
const addProduct = async (req,res) => {

    try{

        const { name, description, price, images, seller, category} = req.body;

        const productExist = await product.findOne({name});
        console.log(productExist);
        if(productExist){
            return res.status(400).json({msg: "product already exist"});
        }

        await product.create({name, description, price, seller, category,images});

        res.status(200).json({msg: "product created successfully"});

    }
    catch(error){
         res.status(500).json({msg:"Internal server error ",error})
    }
};

//-------------------------- Delete Product ----------------------------//

const deleteProduct = async (req, res) =>{

    const deleteProduct = await product.findOneAndDelete(
        { name: req.body.name}
    );
    res.status(200).json({msg: "product deleted successfully"});
};

//-------------------------- Update Product ----------------------------//

const updateProduct = async (req, res) => {
    try {
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
        
    } catch (error) {
        res.status(500).json({msg:"Internal server error ",error});
    }
}

//-------------------------- Get Product ----------------------------//

const getProduct = async (req, res) =>{
    try {
        const products = await product.find();
        console.log("Products from get products : ",products);

        if(!products || products.length===0){
            res.status(404).json({msg:"No products found"});
        }

        return res.status(200).json(products)
    } catch (error) {
        console.error("Error in getProduct:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

//-------------------------- Get Product By Categories ----------------------------//

const getProductByCategory = async (req, res) =>{
    try {
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
      } catch (error) {
        console.error("Error in getProductByCategory:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const sortProductsByPrice = async (req, res) => {
    try {
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
    } catch (error) {
      console.error("Error in sortProductsByPrice:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

module.exports = {addProduct, deleteProduct, updateProduct, getProduct, getProductByCategory,sortProductsByPrice}