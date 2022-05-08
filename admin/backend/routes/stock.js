const router = require("express").Router();
const { request } = require("express");
let stock = require("../models/stock")

//add data
router.route("/add").post((req, res)=>{

     const itemNo = req.body.itemNo;
     const stockNo = req.body.stockNo;
     const category = req.body.category;
     const itemName = req.body.itemName;
     const brand = req.body.brand;
     const quantity = Number(req.body.quantity);
     const agentName = req.body.agentName;
     const unitPrice = Number(req.body.unitPrice);
     const date = req.body.date;

     const newstock = new stock({

        itemNo,
        stockNo,
        category,
        itemName,
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

//search by stock No
router.route("/get/:itemNo").get(async(req, res)=>{
    let stocknumber = req.params.stockNo;
    const stocknum = await stock.find({stockNo:stocknumber})
    .then((count)=>{
        res.status(200).send({status: "stock fetched",count});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get stock", error: err.message});
    })
})

module.exports = router;