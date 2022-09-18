const asyncHandler = require("express-async-handler");

const getClassifieds = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "get Classifieds"
    })
})

const editClassified = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "edit Classified"
    })
})

const postClassified = asyncHandler((req,res)=>{
    res.status(200).json({
        message: "post Classified"
    })
})

module.exports = {
    getClassifieds,postClassified,editClassified
}