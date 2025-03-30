const express = require('express')
const app = express()
const path = require("path")

const session = require("express-session")
const cookieParser = require("cookie-parser")
const flash = require("connect-flash")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(cookieParser("SecretString"))

app.use(session({
    secret : "SecretString",
    resave : true,
    saveUninitialized : true
}))

app.use(flash())

app.get("/" ,(req,res) => {
    const username = req.flash("user")
    res.render("page.ejs",{username})
})

app.post("/",(req,res) => {
    req.flash("user", req.body.username )
    res.redirect("/")
})

// app.get("/reqcount",(req,res) => {
//     if(req.session.count){
//         req.session.count++
//     }else{
//     req.session.count = 1;
//     }
//     res.send(`you are sent request ${req.session.count} times`)
// })


app.listen(3000,() => {
    console.log("listing on port 3000 ")
})
