var mongoose = require("mongoose");
const Buyer = require("../model/buyer");

// get all buyers  ---> /api/buyers
exports.getBuyers = async(req, res) => {
    try {
        const buyers = await Buyer.find();
        if (!buyers && buyers.length === 0)
            return res
                .status(404)
                .send({ success: false, message: "No buyers found" });

        // return all buyers
        res.status(200).send({ success: true, buyers });
    } catch (error) {
        // if error return 500
        res.status(500).send({ success: false, message: error.message });
    }
};

exports.addBuyers = async(req, res) => {
    const { name, price, packageType } = req.body.data;

    if (!name || !price || !packageType)
        return res
            .status(400)
            .send({ success: false, message: "Please provide all the fields" });

    try {
        const buyer = await Buyer.create({
            _id: new mongoose.mongo.ObjectId(),
            name,
            price,
            packageType,
        });

        res.status(201).send({ success: true, buyer });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

exports.deleteBuyerItem = async(req, res) => {
    try {
        const buyer = await Buyer.findOneAndDelete({
            _id: req.body._id,
        });
        res.status(200).send({ success: true, buyer });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

exports.updateBuyers = async(req, res) => {
    const { _id, name, price, packageType } = req.body.data;

    if (!name || !price || !packageType)
        return res
            .status(400)
            .send({ success: false, message: "Please provide all the fields" });

    try {
        const buyer = await Buyer.findOneAndUpdate({ name: name }, {
            $set: { price: price, packageType: packageType, name: name },
        }, {
            upsert: true,
            new: true,
        });

        res.status(201).send({ success: true, buyer });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};