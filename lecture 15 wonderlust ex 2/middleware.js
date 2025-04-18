module.exports.islogin = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You Must Be Logged In To Listings")
        return res.redirect("/login")
    }
    next()
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next()
}