const express = require("express");
const router = express.Router({mergeParams : true})
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const { reviewSchema } = require("../schema")
const Review = require("../models/review")
const Listing = require("../models/listing")

const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body)
    if(error){
      let errmsg = error.details.map((e) => e.message).join(",")
      throw new ExpressError(400, errmsg)
    }else{
      next()
    }
  }
  
router.post("/", validateReview ,wrapAsync (async (req,res) => {
    let listing = await Listing.findById(req.params.id)
    let newreviews = new Review(req.body.review)

    req.flash("success","New Review Created")
    listing.reviews.push(newreviews)

    await newreviews.save()
    await listing.save()

    res.redirect(`/listings/${listing._id}`)
}))

// delete reviews
router.delete("/:reviewId",wrapAsync(async (req,res) => {

   let { id ,reviewId } = req.params;

   await Listing.findByIdAndUpdate(id,{$pull : { reviews : reviewId }})
   await Review.findByIdAndDelete(reviewId)
   req.flash("success","Review Is Deleted")

   res.redirect(`/listings/${id}`)
}))

module.exports = router;
