const router = require("express").Router();
const { request } = require("express");
let stock = require("../models/stock")

//add data
router.route("/add").post((req, res)=>{
    
     const stockNo = req.body.stockNo; 
     const itemNo = req.body.itemNo;
     const category = req.body.category;
     const itemName = req.body.itemName;
     const brand = req.body.brand;
     const quantity = Number(req.body.quantity);
     const agentName = req.body.agentName;
     const unitPrice = Number(req.body.unitPrice);
     const date = req.body.date;

     const newstock = new stock({

        stockNo,
        itemNo,
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
router.route("/get/:stockNo").get(async(req, res)=>{
    let stocknumber = req.params.stockNo;
    const stocknum = await stock.find({stockNo:stocknumber})
    .then((data)=>{
        res.status(200).send({status: "stock fetched",data});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get stock", error: err.message});
    })
})

//delete data
router.route("/delete/:stockNo").delete(async (req,res) => {
    let userid = req.params.stockNo;

    await stock.findOneAndDelete({stockNo:userid})
    .then(() => {
        res.status(200).send({status: "Stock delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting stock", error: err.message});
    })
})

module.exports = router;