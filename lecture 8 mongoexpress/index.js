const express = require("express")
const path = require("path");
const mongoose = require("mongoose")
const Chat = require("./models/chat")
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")
const { console } = require("inspector");
const app = express()
const port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

main().then(() => {
    console.log("successfull")
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs", { chats })
})

// {  to insert new chat
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(501,"page not found")
    res.render("new.ejs")
})

app.post("/chats", asyncWrap(async (req, res) => {
    let { from, msg, to } = req.body
    let newchat = new Chat({
        from: from,
        msg: msg,
        to: to,
        create_at: new Date()
    })
    await newchat.save()
    res.redirect("/chats")
}))
// }
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err))
    }
}
// new show route
app.get("/chats/:id",async(req,res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id)
    if(!chat){
        throw new ExpressError(501,"chat not found")
    }
    res.render("edit.ejs",{chat})
})
// { edit the form
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params
    let chat = await Chat.findById(id)
    res.render("edit.ejs", { chat })
})

app.put("/chats/:id", asyncWrap(async (req, res) => {
    let { id } = req.params
    let { msg: newmsg } = req.body
    let updatedchat = await Chat.findByIdAndUpdate(id, { msg: newmsg }, { runValidators: true, new: true })
    res.redirect("/chats")
}))

app.delete("/chats/:id",asyncWrap (async (req, res) => {
    let { id } = req.params;
    let deletechat =await Chat.findByIdAndDelete(id)
    console.log(deletechat)
    res.redirect("/chats")
}))

const handleValidationError = (err) => {
    console.log("this was a validation error")
    console.dir(err)
    console.dir(err.message)
    return err;
}

app.use((err,req,res,next) => {
    console.log(err.name)
    if(err.name === "ValidationError"){
        err = handleValidationError(err)
    }
    next(err)
})

// error handling middleware
app.use((err,req,res,next) => {
   let {status = 500,message = "some error"} = err;
   res.status(status).send(message)
})

app.listen(port, () => {
    console.log("listing on port 3000");
})