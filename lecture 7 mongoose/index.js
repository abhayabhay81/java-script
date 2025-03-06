const mongoose = require("mongoose")

main().then((res) => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userschema = new mongoose.Schema({
    name : String,
    email : String,  // case sensitive
    age : Number
})

const User = mongoose.model("User",userschema)

//  to innsert data

// const user2 = new User({
//     name : "abhay",
//     email : "abhay@gmial.com",
//     age : 56
// })

// user2.save().then((res) => {
//     console.log(res)  //is return promise
// })  
// .catch((err) => {
//     console.log(err)
// })

// to insert many data

// User.insertMany([
//     {name : "pank",email :"pank@gmail.com",age :54},
//     {name : "jonny",email :"jonny@gmail.com",age :53},
//     {name : "bruce",email :"bruce@gmail.com",age :59}
// ]).then((res) => {
//     console.log(res)
// })

// User.find({})    // to show data
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// User.find({age : { $gt : 55 }})  //gt = greaterthan
// .then((res) => {
//     console.log(res)     // findOne,find , findById 
// })
// .catch((err) => {
//     console.log(err)
// })
              //    condition       update
// User.updateOne({name :"bruce"},{age: 67})  // updateMany
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// User.findByIdAndUpdate({_id : "67c514c2a0972a1cc09ef36d"},{age : 54},{new : true})
// .then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

User.deleteOne({name : "bruce"})
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

