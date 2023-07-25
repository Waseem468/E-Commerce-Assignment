const ProductModel = require("../Model/productSchema");

const UploadProducts = async (req, res) => {
    const newProduct = new ProductModel(req.body)
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
}

const GetAllProducts = async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(200).json({ status: "Success", products });
    } catch (err) {
        res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = { UploadProducts,GetAllProducts };