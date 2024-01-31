const express = require('express');
const {mongoose} = require('mongoose');
const cors = require("cors");
const userRoute = require("./Routes/user.route.js");
const donorRoute = require("./Routes/donor.route.js");
const contactRoute = require("./Routes/contact.route.js");
const paymentScreenshot = require('./Routes/payment.route.js');
const noticeRoute = require("./Routes/notice.route.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1/api",userRoute);
app.use("/v1/api",donorRoute);
app.use("/v1/api",contactRoute);
app.use("/v1/api",paymentScreenshot);
app.use("/v1/api",noticeRoute);
    
const MONGO_URI = "mongodb+srv://rahulgoon23:rahulgoon123@cluster0.goc2aew.mongodb.net/BloodBank";
const connect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to Database");//to check my database is going on
    } catch (error) {
        console.log(error.message);
    }
}

app.listen(8001,()=>{
    connect()
    console.log("http://127.0.0.1:8001")
});