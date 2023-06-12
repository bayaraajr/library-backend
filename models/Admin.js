const { Schema, model } = require("mongoose");
const AdminSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        validate: {
            validator: function (value) {
                const phoneRagex = /^\d{8}$/;
                return phoneRagex.test(value);
            },
            message: "Invalid phone number, Must be 8 digits",
        },
        unique: true,
        required: true,
    },
    email: {
        type: String,
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: "Invalid email address",
        },
        unique: true,
        required: true,
    },
    hash: String,
    salt: String,
    gender: {
        type: String,
        enum: ["F", "M"],
        required: true,
    },
    registrationNumber: String,
    birthDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value <= Date.now();
            },
            message: "BirthDate can not be in the future.",
        },
    },
});

module.exports = model("admin", AdminSchema);
