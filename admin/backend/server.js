//Variable decleration
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//Assign into localhost ports
const PORT = process.env.PORT || 8070;

//Json Methods
app.use(cors());
app.use(bodyParser.json());

//Database Connection
const URL = process.env.MONGODB_URL;

//MongoDB configurations
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//Mongoose Connection
const connection = mongoose.connection;
connection.once("open",() => { 
    console.log("MongoDB Connection Successful!");
})

//Routers Connection
const serviceRouter=require("./routes/addservice");
const staffallowance=require("./routes/addallowance");
// const staffpaysalary=require("./routes/paysalary");

//Routers
app.use("/service",serviceRouter)
app.use("/staffallowance",staffallowance)
// app.use("/staffpaysalary",staffpaysalary)

//Run on port
app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`)
})
