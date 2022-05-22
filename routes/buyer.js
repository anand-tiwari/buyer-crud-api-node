const express = require("express");
const {
    addBuyers,
    getBuyers,
    deleteBuyerItem,
    updateBuyers,
} = require("../controller/buyer");

const router = express.Router();

router
    .route("/buyers")
    .post(addBuyers)
    .get(getBuyers)
    .delete(deleteBuyerItem)
    .patch(updateBuyers);

module.exports = router;