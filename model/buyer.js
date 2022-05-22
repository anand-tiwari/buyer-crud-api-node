const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is require"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    packageType: {
        type: String,
        required: [true, "PackageType Id is required add a buyer"],
    },
}, { timestamps: true });

module.exports = mongoose.model("Buyer", buyerSchema);