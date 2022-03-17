const router = require("express").Router();
let Service = require("../models/addServicemodel");
let details = require("../models/addv");


//Database data insert
router.route("/addservice").post((req,res)=>{

    const name = req.body.fname;
    const nic = req.body.nic;
    const vnumber = req.body.vnumber;
    const cemail = req.body.cemail;
    const stype = req.body.stype;
    const cnumber =Number(req.body.cnumber);
    const addinfo = req.body.addinfo;
    
    const newservice = new Service({
        name,
        nic,
        vnumber,
        cemail,
        stype,
        cnumber,
        addinfo,
    })
        newservice.save().then(()=>{
        res.json("service Added!!");
    }).catch((err)=>{
        console.log(err);
    })
    
})

//Database data view all
router.route("/").get((req,res)=>{

    details.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

//Database data view nic data
router.route("/addservice/:nic/:name").get((req,res)=>{
    let ni=req.params.nic
    let na=req.params.name

    details.findOne({nic:ni}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

//Database data update
router.route("/update/:email").put(async (req,res)=>{
    
    let em = req.params.email;
    
    const fname = req.body.fname;
    const sname = req.body.sname;
    //const school = req.body.school;
    
    //const {name,age,school} = req.body;

    const updatedetails ={
        fname,
        sname,
    }
    const update = await Staff.findOneAndUpdate({email:em},updatedetails).then(()=>{
        res.status(200).send({status: "User updated!!"})
    }).catch((err)=>{
        res.status(500).send({status: "user not found!!"});
    })
})


//update the staff details
router.route("/update/proflie/updatestaff/:nic").put(async (req,res)=>{
    
    let ni = req.params.nic;
    
    const fname = req.body.fname;
    const sname = req.body.sname;
    const email = req.body.email;
    const nic = req.body.NIC;
    const position = req.body.position;
    const Pnumber =Number(req.body.Pnumber);
    const type = req.body.type;
    const gender = req.body.gender;
    //const school = req.body.school;
    
    //const {name,age,school} = req.body;

    const updatedetails ={
        fname,
        sname,
        email,
        nic,
        position,
        Pnumber,
        type,
        gender
    }
    const update = await Staff.findOneAndUpdate({nic:ni},updatedetails).then(()=>{
        res.status(200).send({status: "User updated!!"})
    }).catch((err)=>{
        res.status(500).send({status: "user not found!!"});
    })
})


//Database staff data delete
router.route("/proflie/delete/:nic").delete(async (req,res)=>{
    let ni = req.params.nic;
     
    // console.log(pn);

    await Staff.findOneAndDelete({nic:ni}).then(()=>{
        res.status(200).send({status: "User delete!!"})
        
    }).catch((err)=>{
        res.status(500).send({status: "User not found!!"});
    })
})

module.exports = router;