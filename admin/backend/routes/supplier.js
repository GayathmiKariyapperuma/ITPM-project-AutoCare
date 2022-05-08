const router = require("express").Router();
let supplier = require("../models/supplier");

//add data
router.route("/add").post((req,res)=>{

    const supplierNo = req.body.supplierNo;
    const compName = req.body.compName;
    const compAddress = req.body.compAddress;
    const compEmail = req.body.compEmail;
    const compPhone = Number(req.body.compPhone);
    const agentName = req.body.agentName;
    const agentEmail = req.body.agentEmail;
    const agentPhone = Number(req.body.agentPhone);
    const agreementDate = req.body.agreementDate;
    const validTime = req.body.validTime;

    const newSupplier = new supplier({

        supplierNo,
        compName,
        compAddress,
        compEmail,
        compPhone,
        agentName,
        agentEmail,
        agentPhone,
        agreementDate,
        validTime
    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//view all data
router.route("/").get((req,res)=>{

    supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update data
router.route("/update/:supplierNo").put(async(req,res) => {
    let supplierCode = req.params.supplierNo;
    const {supplierNo, compName, compAddress, compEmail, compPhone, agentName, agentEmail, agentPhone} =req.body;

    const updateSupplier = {
        compAddress,
        compEmail,
        compPhone,
        agentName,
        agentEmail,
        agentPhone
    }

    const update = await supplier.findOneAndUpdate({supplierNo : supplierCode}, updateSupplier)
    .then(() => {
    res.status(200).send({status: "Supplier Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//delete data
router.route("/delete/:supplierNo").delete(async (req,res) => {
    let userid = req.params.supplierNo;

    await supplier.findOneAndDelete({supplierNo:userid})
    .then(() => {
        res.status(200).send({status: "Supplier delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete supplier", error: err.message});
    })
})

//search by supplier No
router.route("/get/:supplierNo").get(async (req, res) =>{
    let supplierCode = req.params.supplierNo;
    const user = await supplier.findOne({supplierNo:supplierCode}) 
    .then((user) => {
        res.status(200).send({status: "User fetched", user});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get supplier", error: err.message});
    })

})

module.exports = router;


//supplier