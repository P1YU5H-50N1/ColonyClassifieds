const asyncHandler = require("express-async-handler");

const acceptBid = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "Accept Bid for a classified and move to archive"
    })
})
const allBids = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "All Bids for a classified"
    })
}) 
const postBid = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "post Bid"
    })
}) 

module.exports = {
    acceptBid,allBids,postBid
}