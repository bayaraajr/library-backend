const { Schema, model } = require("mongoose");
const CollectionSchema = new Schema({
    isbn: String,
    books: Array
});

module.exports = model("collection", CollectionSchema);
