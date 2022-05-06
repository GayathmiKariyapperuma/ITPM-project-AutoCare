const router = require("express").Router();
let Pending = require("../models/addServicemodel");
let Inprogress = require("../models/inprogressService");
let Finish = require("../models/finishService");
let Done = require("../models/done");

let details = require("../models/addv");


//Pending Service Part Apis
router.route("/addservice").post((req,res)=>{

    const name = req.body.fname;
    const nic = req.body.nic;
    const vnumber = req.body.vnumber;
    const cemail = req.body.cemail;
    const stype = req.body.stype;
    const cnumber =Number(req.body.cnumber);
    const addinfo = req.body.addinfo;
    
    const newservice = new Pending({
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

router.route("/").get((req,res)=>{

    details.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/pending").get((req,res)=>{

    Pending.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/pending/:id").get((req,res)=>{
    let id=req.params.id

    Pending.findById({_id:id}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/pending/edit/:id").put(async (req,res)=>{
    
    let id=req.params.id
    
    const stype = req.body.stype;
    const addinfo = req.body.addinfo;


    const updatedetails ={
        stype,
        addinfo,
    }
    const update = await Pending.findOneAndUpdate({_id:id},updatedetails).then(()=>{
        res.status(200).send({status: "Service updated!!"})
    }).catch((err)=>{
        res.status(500).send({status: "Service not found!!"});
    })
})

router.route("/pending/delete/:id").delete((req,res)=>{
    let id=req.params.id

    Pending.findByIdAndDelete({_id:id}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

//Inprogress Service Part Apis
router.route("/inprogress/:id").get((req,res)=>{
    let id=req.params.id

    Pending.findById({_id:id}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/inprogress/add").post((req,res)=>{

    const name = req.body.cname;
    const nic = req.body.cnic;
    const vnumber = req.body.vnumber;
    const cemail = req.body.cemail;
    const stype = req.body.stype;
    const cnumber =Number(req.body.cnumber);
    const ename = req.body.ename;
    
    const newservice = new Inprogress({
        name,
        nic,
        vnumber,
        cemail,
        stype,
        cnumber,
        ename,
    })
        newservice.save().then(()=>{
        res.json("inprogress service Added!!");
    }).catch((err)=>{
        console.log(err);
    })
    
})

router.route("/inprogress").get((req,res)=>{

    Inprogress.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

//Finish Service Part Apis
router.route("/finish/add").post((req,res)=>{

    const name = req.body.cname;
    const nic = req.body.cnic;
    const vnumber = req.body.vnumber;
    const cemail = req.body.cemail;
    const stype = req.body.stype;
    const cnumber =Number(req.body.cnumber);
    const ename = req.body.ename;
    
    const newservice = new Finish({
        name,
        nic,
        vnumber,
        cemail,
        stype,
        cnumber,
        ename,
    })
        newservice.save().then(()=>{
        res.json("finish service Added!!");
    }).catch((err)=>{
        console.log(err);
    })
    
})

router.route("/finish/:id").get((req,res)=>{
    let id=req.params.id

    Inprogress.findById({_id:id}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/finish/delete/:id").delete((req,res)=>{
    let id=req.params.id

    Inprogress.findByIdAndDelete({_id:id}).then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/finish").get((req,res)=>{

    Finish.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})

// Done part APIs

router.route("/done").get((req,res)=>{
    let id=req.params.id

    Done.find().then((curds)=>{
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