const product = require('../models/product-model');

//-------------------------- Add Product ----------------------------//
const addProduct = async (req,res) => {

    try{

        const { name, description, price, images, seller, category, materials, isCustomizable, customizationDetails, processingTime } = req.body;

        const productExist = await product.findOne({name});
        console.log(productExist);
        if(productExist){
            return res.status(400).json({msg: "product already exist"});
        }

        await product.create({name, description, price, seller, category});

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

module.exports = {addProduct, deleteProduct, updateProduct, getProduct}