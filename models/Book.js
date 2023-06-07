const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
    isbn: String,
    name: String,
    publicationDate: Date,
    author: String,
    category: String,
    description: String,
    filePath: String,
});

module.exports = model("book", BookSchema);
