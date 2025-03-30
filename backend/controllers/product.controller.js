import mongoose from "mongoose"; // import mongoose to check if the ID is valid
import Product from "../models/product.model.js"; // import the product model

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({}); // find all products in the database
        res.status(200).json({ success: true, data: products}); // send the products as a response)
    } catch(error) {
        console.error("Error in Fetching products:", error.message);
        res.status(500).json({ success: false, message: "Internal server error"}); // send an error response
    }
}

export const createProduct = async (req,res) => {
    const product = req.body; // user will send this data in the body of the request

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: "Please fill all fields!"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Internal server error"});
    }
    
}

export const updateProduct = async (req,res) => {
    const { id } = req.params; // get the id from the URL

    const product = req.body; // user will send this data in the body of the request

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid product ID!"});
    } // check if the ID is valid

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // new:true will return the updated product
        res.status(200).json({ success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error"});
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params; // get the id from the URL

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: "Invalid product ID!"});
    } // check if the ID is valid
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully!"});
    } catch(error) {
        console.error("Error in Delete product:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error!"});
    }
}