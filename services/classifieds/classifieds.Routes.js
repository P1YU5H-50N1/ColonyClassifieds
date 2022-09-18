const express = require("express");
const router = express.Router();
const {
	getClassifieds,
	postClassified,
	editClassified,
} = require("./classifieds.Controllers");
const { ClassifiedValidator } = require("./validators/classifieds.Validators");

router
	.route("/")
	.get(getClassifieds)
	.post(ClassifiedValidator, postClassified)
	.put(ClassifiedValidator, editClassified);

module.exports = router;
