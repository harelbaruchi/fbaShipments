const express= require('express');
var cors= require('cors');

let bodyParser= require('body-parser');
let app= express();
app.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json());
require('./configs/database');
app.use(cors());
const shipmentController= require('./controllers/shipmentControllers');
app.use('/api/shipments', shipmentController);
app.listen(3000);