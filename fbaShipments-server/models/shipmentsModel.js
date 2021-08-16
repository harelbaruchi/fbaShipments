const mongoose= require('mongoose');
let shipmentsSchema= mongoose.Schema;

// creating the schema for the fba shipment object

let ShipmentSchema= new shipmentsSchema({
    id: String,
    shipmentName: String,
    shippingMethod: String,
    shipFromAddress: String,
    shipTo: String,
    created: String,
    lastUpdated: String,
    skus: [{asin: String, sku: String, quantity: String}],
    unitsExpected: String,
    unitsReceived: String,
    status: String,
    trackingDetails: {trackingNumber: String,
                       carrier: String,
                           eta: String,
        trackingDetails: String
    }
})

module.exports = mongoose.model('shipments',ShipmentSchema);