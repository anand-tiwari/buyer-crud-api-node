const express = require("express");
const { getPackageType } = require("../controller/packageType");

const router = express.Router();

router.route("/packageType").get(getPackageType);

module.exports = router;