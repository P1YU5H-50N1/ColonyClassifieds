const express = require("express");
const router = express.Router();
const {getClassifieds,postClassified,editClassified} = require('./classifieds.Controllers')


router.route('/').get(getClassifieds).post(postClassified).put(editClassified)

module.exports = router;