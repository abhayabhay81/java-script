const mongoose = require("mongoose")

const chatschema = mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String,
        max : 50
    },
    create_at : {
        type : Date,
        required : true
    }
})

const chat = new mongoose.model("Chat",chatschema)

module.exports = chat