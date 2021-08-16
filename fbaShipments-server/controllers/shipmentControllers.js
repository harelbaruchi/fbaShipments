const express= require('express');
const appRouter=express.Router();

const shipmentsBL= require('../models/shipmentsBL');

appRouter.route('/')
    .get(async function (req, res){
    let shipments= await shipmentsBL.getAllShipments();
    return res.json(shipments);
})

appRouter.route('/:id')
    .get(async function (req,res){
    let id= req.params.id;
    let shipment= await shipmentsBL.getShipment(id);
    return res.json(shipment);
})

appRouter.route('/')
    .post( async function (req,res){
    let obj= req.body;
    let result= await shipmentsBL.addShipment(obj);
    return res.json(result);
        console.log(res.data);
})

appRouter.route('/:id')
    .put( async function (req, res){
    let obj=req.body;
    let id=req.params.id;
    let result= await shipmentsBL.updateShipment(id, obj);
    return res.json(result);
})

appRouter.route('/:id')
    .delete( async function (req, res){
     let id=req.params.id;
     let result= await shipmentsBL.deleteShipment(id);
     return res.json(result);
})
module.exports= appRouter;