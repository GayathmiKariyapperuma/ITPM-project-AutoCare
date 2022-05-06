const router = require("express").Router();
let Employee = require("../models/Employee");

router.route("/addemployee").post((req,res)=>{
    
    
    const name = req.body.name;
    const age = req.body.age;
    const phoneno = req.body.phoneno;
    const address = req.body.address;
    const nic = req.body.nic;
    const email = req.body.email;
    const gender = req.body.gender;
    

    const newEmployee = new Employee({
        
        name,
        age,
        phoneno,
        address,
        nic,
        email,
        gender,
    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
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
    