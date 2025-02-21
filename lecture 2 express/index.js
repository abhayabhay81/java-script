const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("get request")
})

app.get("/apple", (req, res) => {
    let { q } = req.query
    if (q) {
        res.send(`get request ${q}`)  // in case of query with out using the { http://localhost:3000/apple?q=apple } you are facing empty object 
    } else {
        res.send("Page not excist")
    }
})

app.listen(port, () => {
    console.log(`listing on port ${port}`)
})