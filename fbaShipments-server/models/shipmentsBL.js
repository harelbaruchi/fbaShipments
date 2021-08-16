const Shipment= require('../models/shipmentsModel');

// get all fba shipments




exports.getAllShipments= function (){
    return new Promise((resolve, reject) => {
        Shipment.find({}, function (err, shipmentData){
            if (err){
                reject(err);
            } else{
                resolve(shipmentData);
            }
        })

    })
}

// get shipment by object id
exports.getShipment=function (id){
    return new Promise((resolve, reject) => {
        Shipment.findById(id, function (err,shipmentData){
            if(err){
                reject(err)
            } else{
                resolve(shipmentData)
            }
        })
    })
}

// add new shipment

exports.addShipment=function(newShipment){
    return new Promise((resolve, reject) => {
        let newShip= new Shipment({
            _id: newShipment._id,
            shippingMethod: newShipment.shippingMethod,
            shipmentName: newShipment.shipmentName,
            shipFromAddress: newShipment.shipFromAddress,
            shipTo: newShipment.shipTo,
            created: newShipment.created,
            lastUpdated: newShipment.lastUpdated,
            skus: newShipment.skus,
            unitsExpected: newShipment.unitsExpected,
            unitsReceived: newShipment.unitsReceived,
            status: newShipment.status,
            trackingDetails: newShipment.trackingDetails
        });
        newShip.save(function (err) {
            if(err){
                reject(err)
            }else {
                resolve('created!')
            }

        })

    })
}

// change fba Shipment settings

exports.updateShipment = function (id, newShipment) {
    return new Promise((resolve, reject) => {
        Shipment.findByIdAndUpdate(id, {
            shipmentName: newShipment.shipmentName,
            shippingMethod: newShipment.shippingMethod,
            shipFromAddress: newShipment.shipFromAddress,
            shipTo: newShipment.shipTo,
            created: newShipment.created,
            lastUpdated: newShipment.lastUpdated,
            skus: newShipment.skus,
            unitsExpected: newShipment.unitsExpected,
            unitsReceived: newShipment.unitsReceived,
            status: newShipment.status,
            trackingDetails: newShipment.trackingDetails

        }, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve('updated!')
            }

        })
    })

}

// delete shipment completely from db. wont be for use since its not really work this way
// in seller central

exports.deleteShipment= function (id){
    return new Promise((resolve, reject) => {
        Shipment.findByIdAndDelete(id, function (err){
            if(err){
                reject(err)
            }else{
                resolve('deleted!')
            }
        })
    })
}