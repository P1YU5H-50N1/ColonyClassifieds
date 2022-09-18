const {postBidSchema}  = require("./bidding.ValidatorSchema")

const postBidValidator = (req,res,next) =>{
    const payload = {
        price : req.body.price,
        classified: req.body.classified
    }
    const { error } = postBidSchema.validate(payload);
	if (error) {
		res.status(406);
		throw new Error(error.details[0].message);
	} else {
		next();
	}

}

module.exports = {postBidValidator}