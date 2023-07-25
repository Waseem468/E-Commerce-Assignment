const express = require("express");
const { UploadProducts, GetAllProducts } = require("../Controller/ProductController");

const router = express.Router();

router.post("/", UploadProducts);
router.get('/', GetAllProducts)

module.exports = router;