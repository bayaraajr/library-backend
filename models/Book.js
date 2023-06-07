const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
    isbn: String,
    name: String,
    publicationDate: Date,
    author: String,
});

module.exports = model("book", BookSchema);
