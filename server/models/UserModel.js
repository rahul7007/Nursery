var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    cart: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                // type: String, //for edit, make it String, don't know why not working when we use "type: mongoose.Schema.Types.ObjectId"
                ref: 'Product',
                unique: true
            },
            product_name: {
                type: String,
                required: true
            },
            product_price: {
                type: String,
                required: true
            },
            product_qty: {
                type: Number,
                required: true
            },
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
