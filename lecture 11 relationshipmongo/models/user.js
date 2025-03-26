const mongoose = require("mongoose")

main()
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo")
}

const usershema = mongoose.Schema({
    username : String,
    addresses : [
        {
            location : String,
            city : String,
        }
    ]
})

const User = mongoose.model("User",usershema)

const adduser = async() => {
    let user1 = new User({
        username : "abhay kumar",
        addresses : [{
            location :"sirathu",
            city : "Kaushambi"
        }]
    })
    user1.addresses.push({location : "khaga",city : "Phatepur"})
    let result = await user1.save()
    console.log(result)
}

adduser()