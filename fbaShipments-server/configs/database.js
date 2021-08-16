const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/fbaShipments', {
    useNewUrlParser:    true,
    useUnifiedTopology: true
})