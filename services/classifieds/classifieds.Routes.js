const express = require("express");
const router = express.Router();
const {
	getClassifieds,
	postClassified,
	editClassified,
	myClassifieds
} = require("./classifieds.Controllers");
const { ClassifiedValidator } = require("./validators/classifieds.Validators");

router
	.route("/")
	.get(getClassifieds)
	.post(ClassifiedValidator, postClassified)
	.put(ClassifiedValidator, editClassified);

router.get("/myClassifieds",myClassifieds)


module.exports = router;
