import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js"; // import the getProducts function from the controller

const router = express.Router();

router.get("/", getProducts); // get all products

router.post("/", createProduct); // create a new product

router.put("/:id", updateProduct); // update a product

router.delete("/:id", deleteProduct); // delete a product

export default router;