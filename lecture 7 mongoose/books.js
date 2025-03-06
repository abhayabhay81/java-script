const mongoose = require("mongoose")

main().then((res) => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookschema = new mongoose.Schema({
    title : {
        type : String,
        required : true   // validation
    },
    auther : {
        type : String,
    },
    price : {
        type : Number,
        // min : 100
        min : [100,"value too small"]
    },
    category : {
        type : String,
        enum : ["fiction","non-fiction"]
    },
    genre : [String]
})

const Book = mongoose.model("Book",bookschema)

// let book1 = new Book({
//     title : "science",
//     auther : "RD sharma",
//     price : 354,
//     category : "fiction",
//     genre : ["abhya","arun","amit"]
// })

// book1.save()
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//
Book.findByIdAndUpdate({_id : "67c910486a0ad5fe66184fb4"},{price : 50},{runValidators : true})
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
