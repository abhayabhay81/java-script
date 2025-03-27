const mongoose = require("mongoose")
const { Schema } = mongoose

main()
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo")
}

const orderSchema = mongoose.Schema({
    item : String,
    price : Number
})

const customerSchema = mongoose.Schema({
    name : String,
    orders : [{
        type :  Schema.Types.ObjectId, 
        ref : "Order"
    }]
})

// customerSchema.pre("findOneAndDelete",async () => {
//     console.log("PRE MIDDLEWARE")
// })

customerSchema.post("findOneAndDelete",async (customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({ _id : { $in : customer.orders }})
        console.log(res)
    }
})

const Order = mongoose.model("Order",orderSchema)
const Customer = mongoose.model("Customer",customerSchema)

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item : "Samosha",price : 276},
//         {item : "chips",price : 776},
//         {item : "choco",price : 986},
//     ])
//     console.log(res)
// }

// addOrders()

// const addCustomer = async () => {
//     let cust1 = new Customer ({
//         name : "abhay kumar",
//     })

//     let order1 = await Order.findOne({item : "chips"})
//     let order2 = await Order.findOne({item : "choco"})

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save()
//     console.log(result)
// }
// addCustomer()

const findcustomer = async () => {
    // let result = await Customer.findOne({}).populate("orders")
    let result = await Customer.find({}).populate("orders")
    console.log(result)
}
// findcustomer()

// const addcust =  async () => {
//     let newcust = new Customer ({
//         name : "Karan Kumar"
//     })

//     let neworder = new Order ({
//         item : "Pizza",
//         price : 755
//     })

//     newcust.orders.push(neworder)

//     await neworder.save();
//     await newcust.save();

//     console.log("added new customer")
// }

// addcust()

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("67e4e2bebcdf8693b9eded10")
    console.log(data)
}
delCust()




