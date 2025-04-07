const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate")
const session = require("express-session")
const flash = require("connect-flash")

const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")))
app.engine("ejs", ejsmate)

const sessionOptions = {
  secret : "mysecret",
  resave : false,
  saveUninitialized : true,
  cookie : {
    expires : Date.now() + 7 * 24 * 60 * 60 * 100,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly : true
  }
}
app.get("/", (req, res) => {
  res.send("Hi, I am Home");
});

app.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

app.use(session(sessionOptions))
app.use(flash())

app.use((req,res,next) => {
  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error")
  next()
})

// app.get("/demouser",async (req,res) => {
//   let fakeuser = new User({
//     email : "abhaykumar@gmail.com",
//     username : "abhaykumar"
//   })
//   let reguser = await User.register(fakeuser,"helloworld")
//   res.send(reguser)
// })

app.use("/listings",listingRouter)    // listing file
app.use("/listings/:id/reviews",reviewRouter)  // reviews file

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"))
})

app.use((err, req, res, next) => {
  let { status = 500, message = "SomeThing Went Wrong " } = err
  // res.status(status).send(message)
  res.render("listings/error.ejs", { message, status })
})

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
