const express = require("express");
const router = express.Router({mergeParams : true})
const wrapAsync = require("../utils/wrapAsync")
const { listingSchema } = require("../schema")
const ExpressError = require("../utils/ExpressError")
const Listing = require("../models/listing")
const flash = require("connect-flash");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        let errmsg = error.details.map((e) => e.message).join(",")
        throw new ExpressError(400, errmsg)
    } else {
        next()
    }
}

//index route
router.get("/",validateListing, wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// new route
router.get("/new",(req, res) => {
    res.render("listings/new.ejs");
});

//Show Route
router.get("/:id",wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews")
    if(!listing){
        req.flash("error","Listing you requested for does not exists")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing });
}));

//Create Route
router.post("/", validateListing,wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing Created")
    res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit",wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update Route
router.put("/:id", validateListing ,wrapAsync(async (req, res) => {
    let { id } = req.params;
    req.flash("success","Listing Is Edit")
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id",wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Is Deleted")
    res.redirect("/listings");
}));

// router.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });


module.exports = router;

