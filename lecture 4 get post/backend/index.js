const express = require("express")
const app = express()
const port = 3000

app.get("/get",(req,res) => {
    let { username ,password } = req.query
    res.send(`your username ${username} and password ${password} and method is GET request`)
})

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post("/post",(req,res) => {
    let { username ,password } = req.body
    res.send(`your username ${username} and password ${password} and method is POST requset`)
})

app.listen(port,() => {
    console.log(`listing on port ${port}`)
})