const router = require("express").Router();
const { request } = require("express");
let stock = require("../models/stock")

//add data
router.route("/add").post((req, res)=>{

     const itemNo = req.body.itemNo;
     const stockNo = req.body.stockNo;
     const category = req.body.category;
     const name = req.body.name;
     const brand = req.body.brand;
     const quantity = Number(req.body.quantity);
     const agentName = req.body.agentName;
     const unitPrice = Number(req.body.unitPrice);
     const date = req.body.date;

     const newstock = new stock({

        itemNo,
        stockNo,
        category,
        name,
        brand,
        quantity,
        agentName,
        unitPrice,
        date
     })

     newstock.save().then(()=>{
         res.json("Stock Added")
     }).catch((err)=>{
         console.log(err);
     })


})

//view all data
router.route("/").get((req, res)=>{

    stock.find().then((stocks)=>{
        res.json(stocks)
    }).catch((err)=>{
        console.log(err)
    })
})

//search by item No
router.route("/get/:itemNo").get(async(req, res)=>{
    let itemnum = req.params.itemNo;
    const getAvailability = await availability.find({itemNo:itemnum})
    .then((count)=>{
        res.status(200).send({status: "item fetched",count});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

//report
router.route("/report/:date").get(async(req, res)=>{
    let month = req.params.date;
    const stockreport = await stock.find({date:month})
    .then((report)=>{
        res.status(200).send({status: "Month fetched",report});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get Month", error: err.message});
    })
})

module.exports = router;