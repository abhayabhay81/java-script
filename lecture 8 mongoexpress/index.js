const express = require("express")
const path = require("path");
const mongoose = require("mongoose")
const Chat = require("./models/chat")
const methodOverride = require("method-override");
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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs", { chats })
})

// {  to insert new chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body
    let newchat = new Chat({
        from: from,
        msg: msg,
        to: to,
        create_at: new Date()
    })
    newchat.save()
    res.redirect("/chats")
})
// }

// { edit the form
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params
    let chat = await Chat.findById(id)
    res.render("edit.ejs", { chat })
})

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params
    let { msg: newmsg } = req.body
    let updatedchat = await Chat.findByIdAndUpdate(id, { msg: newmsg }, { runValidators: true, new: true })
    res.redirect("/chats")
})

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletechat =await Chat.findByIdAndDelete(id)
    console.log(deletechat)
    res.redirect("/chats")
})

app.listen(port, () => {
    console.log("listing on port 3000");
})