const express = require("express")
const app = express()

const checktoken = ("/api",(req,res,next) => {
    let {token} = req.query;
    if(token === "givenaccess"){   // http://localhost:3000/api?token=givenaccess
        next()
    }
    res.send("ACCESS DENIDE")
})

app.get("/api",checktoken,(req,res) => {
    res.send("data")
})

// app.use("/api",(req,res,next) => {
//     let {token} = req.query;
//     if(token === "givenaccess"){   // http://localhost:3000/api?token=givenaccess
//         next()
//     }
//     res.send("ACCESS DENIDE")
// })

// app.get("/api",(req,res) => {
//     res.send("data")
// })

app.use((req,res,next) => {
    console.log("1 middleware")
    next()
})

// app.use((req,res,next) => {
//     console.log("2 middleware")
//     next()
// })

app.get("/",(req,res) => {
    res.send(" I am root")
})

app.get("/random",(req,res) => {
    res.send("i am middleware random ")
})
app.listen(3000,() => [
    console.log("Listing on port 3000")
])