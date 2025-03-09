const mongoose = require("mongoose")
const Chat = require("./models/chat")

main().then(() => {
    console.log("successfull")
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [{
    from: "abhay",
    to: "arun",
    msg: "I am good",
    create_at: new Date()
},
{
    from: "aman",
    to: "amit",
    msg: "I am bad",
    create_at: new Date()
}]

Chat.insertMany(chats)
