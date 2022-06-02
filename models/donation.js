var mongoose = require('mongoose');
var schema = mongoose.Schema;

var donation = new schema({
    method: {
        type: String,
        default: "PayPal",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    upvotes: {
        type: Number
    }
})

module.exports = mongoose.model('Donation', donation);
