const express = require('express')
const app = express()
const path = require("path")

const session = require("express-session")
const cookieParser = require("cookie-parser")
const flash = require("connect-flash")
const { name } = require('ejs')

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

app.use((req,res,next) => {
    res.locals.successmsg = req.flash("success")
    res.locals.errormsg = req.flash("error")
    next()
})

app.get("/register",(req,res) => {
    let { name = "anonymous"} = req.query
    req.session.name = name

    if(name == "anonymous"){
        req.flash("error","user not registered")
    }else{
        req.flash("success","user registered successfully")
    }
    res.redirect("/hello")
})
app.get("/hello",(req,res) => {
    res.render("app.ejs",{ name : req.session.name })
})


app.listen(3000,() => {
    console.log("listing on port 3000 ")
})
