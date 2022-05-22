const PackageType = require("../model/packageType");

// get all categories  ---> /api/packageType
exports.getPackageType = async(req, res) => {
    try {
        // get all categories from db
        const packageType = await PackageType.find();
        // if no categories found return 404
        if (!packageType && packageType.length === 0)
            return res
                .status(404)
                .send({ success: false, message: "No packageType found" });

        // return all packageType
        res.status(200).send({ success: true, packageType });
    } catch (error) {
        // if error return 500
        res.status(500).send({ success: false, message: error.message });
    }
};