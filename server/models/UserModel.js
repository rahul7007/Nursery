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
    cart: {
        type: Array,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
