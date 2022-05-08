const router = require("express").Router();
let Customer = require("../models/customer");
let Vehicle = require("../models/vehicle");

//customer add
router.route("/addcustomer").post((req,res)=>{
    
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;
    const NIC = req.body.NIC;
    const Address = req.body.Address;
    const Email = req.body.Email;
    const Gender = req.body.Gender;
    const Phonenumber = req.body.Phonenumber;
    const VehicleNo = req.body.VehicleNo;
    

    const newcustomer = new Customer({
        
        Firstname,
        Lastname,
        NIC,
        Address,
        Email,
        Gender,
        Phonenumber,
        VehicleNo,
    })

    newcustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//vehicle add
router.route("/addvehicle").post((req,res)=>{
    const NIC = req.body.NIC;
    const VehicleNo = req.body.VehicleNo;
    const Colour = req.body.Colour;
    const Model = req.body.Model;
    const Brand = req.body.Brand;
    const EngineOil = req.body.EngineOil;
    const LastServiceDate = req.body.LastServiceDate;
    
    const newvehicle = new Vehicle({
        
        NIC,
        VehicleNo,
        Colour,
        Model,
        Brand,
        EngineOil,
        LastServiceDate,
    })

    newvehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//see all customer
router.route("/").get((req,res)=>{

    Customer.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })
})

//see all customer
router.route("/vehicle/").get((req,res)=>{

    Vehicle.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })
})




//see specific customer
router.route("/customer/:id").get((req,res)=>{
    let id = req.params.id;

    Employee.findById({_id:id}).then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})


//update
router.route("/update/:customerno").put(async (req,res) => {
    let no = req,params,NIC;

    const Phonenumber = req.body.Phonenumber;
    const Address = req.body.Address;
    const Email = req.body.Email;

    const updateEmployee = {
        Phonenumber,
        Address,
        Email
    }

    const update = await Customer.findByAndemployeenoupdate(employeeno, updateEmployee)
    .then(() => {
    res.status(200).send({status: "Customer updated",no: update})
    }).catch((err)=> {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//delete
router.route("/customer/delete/:id").delete(async (req,res) => {
    let id = req.params.id;

    await Customer.findByIdAndDelete({_id:id})
    .then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Employee", error: err.message});
    })
})




module.exports = router;
    