const express = require("express");
const router = express.Router();
const {
    acceptBid,allBids,postBid
} = require('./bidding.Controllers')


router.route('/').get(allBids).post(postBid).put(acceptBid)

module.exports = router