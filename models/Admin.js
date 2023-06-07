const { Schema, model } = require("mongoose");
const AdminSchema = new Schema({
    required: [
        "firstname",
        "lastname",
        "phone",
        "email",
        "gender",
        "birthDate",
    ],
    firstname: String,
    lastname: String,
    hash: String,
    salt: String,
    registrationNumber: String,

    gender: {
        type: String,
        enum: ["F", "M"],
    },
    phone: {
        type: Number,
        validate: {
            validator: function (value) {
                const phoneRagex = /^\d{8}$/;
                return phoneRagex.test(value);
            },
            message: "Invalid phone number, Must be 8 digits",
        },
        unique: true,
    },
    email: {
        type: String,
        validate: {
            validator: function (value) {
                const emailRagex = /^[^|s@]+0[^\s@]+\. [^\s@]+$/;
                return emailRagex.test(value);
            },
            message: "Invalid email address",
        },
        unique: true,
    },

    birthDate: {
        type: Date,
        validate: {
            validator: function (value) {
                const currentDate = new Date();
                return value <= currentDate;
            },
            message: "Must be under current day",
        },
    },
});

module.exports = model("admin", AdminSchema);
