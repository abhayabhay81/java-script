const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("secretcode"))

app.get("/",(req,res) => {
    console.dir(req.cookies)
    res.send("I am root")
})

app.get("/getcookes",(req,res) => {
    res.cookie("greet","hellow")
    res.send("sent some cookes")
})

app.get("/getsignedcookes",(req,res) => {
    res.cookie("made-in","india",{ signed : true })
    res.send("signed cookies sent")
})

app.get("verify",(req,res) => {
    console.log(req.signedCookies)
    res.send("verifyed")
})
app.get("/greet",(req,res) => {
     //   name      value
    let { greet = "anonymous" } = req.cookies;
    res.send(`Hi ${greet}`)
})

app.get("/getcookes/random",(req,res) => {
    res.send("this is getcookes/random")
})

app.listen(3000,() => {
    console.log("Listing on port 3000")
})