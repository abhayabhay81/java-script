const express = require("express")
const app = express();
const port = 3000
const path = require("path")
const instdata = require("./data.json")

app.set("view engine","ejs")
app.set("views", path.join(__dirname ,"/views"))

// app.use(express.static("/public"))  
app.use(express.static(path.join(__dirname,"/public/css"))) 

app.use(express.static(path.join(__dirname,"/public/js")))

app.get("/",(req,res) => {
    res.render("index.ejs")
})

app.get("/rolldice",(req,res) => {
    const val = Math.floor(Math.random()* 6 ) + 1
    res.render("rolldice.ejs",{val})
})

app.get("/:id/:username",(req,res) => {
    let { username } = req.params;
    let data = instdata[username]
    if(data){
    res.render("insta.ejs",{data})
    }else{
        res.render("error.ejs")
    }
})

app.listen(port, () => {
    console.log(`listing on port ${port}`)
})