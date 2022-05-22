const mongoose = require("mongoose");

const packageTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: [40, "Name should be under 40 character"],
    },
}, { timestamps: true });

module.exports = mongoose.model("PackageType", packageTypeSchema);