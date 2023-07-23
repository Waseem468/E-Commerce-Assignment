const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemDetails: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    asset: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

const Product= new mongoose.model("product", ProductSchema);
module.exports= Product;