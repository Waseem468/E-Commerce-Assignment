const express = require("express");
const { UploadProducts, GetAllProducts,GetSingleProduct } = require("../Controller/ProductController");

const router = express.Router();

router.post("/", UploadProducts);
router.get('/', GetAllProducts)
router.get("/:id", GetSingleProduct);
module.exports = router;