const express = require("express")
const app = express()
const ExpressError = require("./ExpressError")

const checktoken = (req,res,next) => {
    let { token } = req.query
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"access denied") // custum error execute
}

app.get("/api",checktoken,(req,res) => {
    res.send("data")
})


app.get("/err",(req,res) => {
    abcd = abcd
})

app.get("/admin" ,(req,res) => {
    throw new ExpressError(765,"forbidden")
})

app.use((err,req,res,next) => {
    let { status = "500",messages = "page not found "} = err
    res.status(status).send(messages)  //range error
})

// app.use((err,req,res,next) => {
//     let { status,messages } = err
//     res.status(status).send(messages)
// })

// app.use((err,req,res,next) => {
//     console.log("_____ERROR_____")
//     res.send(err)  // in this next step eqecute
// })

// app.use((err,req,res,next) => {
//     console.log("_____ERROR_____")
//     next(err)  // in this next step eqecute
// })

app.listen(3000,() => {
    console.log("Listing on port 3000")
})