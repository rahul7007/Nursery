var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true,
    },
    // catagory: {
    //     type: ObjectId,
    //     ref: "Catagory",
    //     required: true
    // },
    // stock: {
    //     type: Number
    // },
    // sold: {
    //     type: Number,
    //     default: 0
    // },
    photo: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);