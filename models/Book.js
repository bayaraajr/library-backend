const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
    isbn: String,
    name: String,
    publicationDate: Date,
    filePath: String,
    category: String,
    description: String,
    
});

module.exports = model("book", BookSchema);
