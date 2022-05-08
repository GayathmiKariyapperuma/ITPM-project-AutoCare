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

//search by item No
router.route("/get/:orderNo").get(async(req, res)=>{
    let itemnum = req.params.orderNo;
    const getAvailability = await availability.find({orderNo:itemnum})
    .then((count)=>{
        res.status(200).send({status: "item fetched",count});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

//delete data
router.route("/delete/:orderNo").delete(async (req,res) => {
    let orderNum = req.params.orderNo;

    await supplier.findOneAndDelete({orderNo:orderNum})
    .then(() => {
        res.status(200).send({status: "Order deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete]ing order", error: err.message});
    })
})

module.exports = router;