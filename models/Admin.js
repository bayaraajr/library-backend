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
        type: Number,
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
                const emailRagex = /^[^|s@]+0[^\s@]+\. [^\s@]+$/;
                return emailRagex.test(value);
            },
            message: "Invalid email address",
        },
        unique: true,
        required: true,
    },
    hash: String,
    salt: String,
    gender: {
        String,
    },
    registrationNumber: String,
    birthDate: Date,
});

module.exports = model("admin", AdminSchema);
