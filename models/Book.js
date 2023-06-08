const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
    isbn: {
        type: String,
        required: function() {
            return this.isbn.length === 17;
        }
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
       // required: true,
        validate: function(value) {
            return value < new Date();
    }},
    coverUrl: String,
    description: String,
    filePath: String,
    category: {
        type: String,
        required: true
    },
    totalViews: {
        type: Number,
        default: 0
    },
    loves: {
        type: Number,
        default: 0
    }
});

module.exports = model("book", BookSchema);
