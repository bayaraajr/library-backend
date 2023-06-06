const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    hash: String,
    salt: String,
    gender: String,
    registrationNumber: String,
    birthDate: Date,
});

module.exports = model("user", UserSchema);
