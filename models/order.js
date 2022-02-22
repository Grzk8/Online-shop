const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const orderShema = new Shema ({
    products: [{
        productData: {type: Object, required: true},
        quantity: {type:Number, required: true}
    }],
    user: {
        name: {type: String, required: true},
    },
    userId: {type: Shema.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Order', orderShema);