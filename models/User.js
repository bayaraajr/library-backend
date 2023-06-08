const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phone: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Invalid email address",
        },
    },
    hash: String,
    salt: String,
    gender: {
        type: String,
        enum: ["F", "M"],
        required: true,
    },
    registrationNumber: String,
    birthDate: Date,
});

module.exports = model("user", UserSchema);
