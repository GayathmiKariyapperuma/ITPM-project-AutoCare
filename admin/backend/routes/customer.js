const router = require("express").Router();
let Customer = require("../models/customer");
let Vehicle = require("../models/vehicle");

//customer
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

//vehicle
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


router.route("/").get((req,res)=>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/profile/:id").get((req,res)=>{
    let id = req.params.id;

    Employee.findById({_id:id}).then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:employeeno").put(async (req,res) => {
    let no = req,params,employeeno;

    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    const updateEmployee = {
        name,
        age,
        email
    }

    const update = await Employee.findByAndemployeenoupdate(employeeno, updateEmployee)
    .then(() => {
    res.status(200).send({status: "Employee updated",no: update})
    }).catch((err)=> {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/proflie/delete/:id").delete(async (req,res) => {
    let id = req.params.id;

    await Employee.findByIdAndDelete({_id:id})
    .then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Employee", error: err.message});
    })
})

router.route("/get/employeeno").get(async (req, res) => {
    let no = req,params,employeeno;

    const employee = await Employee.findByEmployee(employee)
    .then(() => {
        res.status(200).send({status: "Employee Fatched", employee: employee})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Employee", error: err.mesage});

    })
})



module.exports = router;
    