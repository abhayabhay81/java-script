const mongoose = require("mongoose")
const { Schema } = mongoose

main()
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo")
}

const userSchema = mongoose.Schema({
    username : String,
    email : String
})

const postSchema = new Schema({
    content : String,
    Likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
}) 

const User = mongoose.model("User",userSchema)
const Post = mongoose.model("Post",postSchema)

const addData = async () => {
    // let user1 = new User ({
    //     username : "abhay kumar",
    //     email : "abhaykumar@gmail.com"
    // })

    // let post1 = new Post({
    //     content : "hello world",
    //     Likes : 76
    // })

    // post1.user = user1

    // await user1.save()
    // await post1.save()

    // let user2 = await User.findOne({username : "pankaj kumar"})

    // let post2 = new Post({
    //     content : "Bye Bye",
    //     Likes : 87
    // })

    // post2.user2 = user2
    // await post2.save()
}

// addData()

const getdata = async () => {
    let result = await Post.findOne({}).populate("user","username")
    console.log(result)
}
getdata()