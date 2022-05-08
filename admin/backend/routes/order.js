const router = require("express").Router();
const { request } = require("express");
let order = require("../models/order")

//add data
router.route("/add").post((req, res)=>{

     const orderNo = req.body.orderNo;
     const supplierNo = req.body.supplierNo;
     const itemCodes = req.body.itemCodes;
     const orderDate = req.body.orderDate;

     const neworder = new order({

        orderNo,
        supplierNo,
        itemCodes,
        orderDate
     })

     neworder.save().then(()=>{
         res.json("Order Added")
     }).catch((err)=>{
         console.log(err);
     })


})

//view all data
router.route("/").get((req, res)=>{

    order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;