const { isBefore, format } = require("date-fns");
const { Schema, model } = require("mongoose");
const BookSchema = new Schema({
    isbn: {
        type: String,
        required: function () {
            return this.isbn.length === 17;
        },
    },
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        // required: true,
        validate: {
            validator: function (value) {
                return isBefore(new Date(value), new Date());
            },
            message: (props) =>
                `${format(
                    new Date(props.value),
                    "yyyy-MM-dd"
                )} өнөөдрөөс хойш өдөр байна.`,
        },
    },
    coverUrl: String,
    description: String,
    filePath: String,
    category: {
        type: String,
        required: true,
    },
    totalViews: {
        type: Number,
        default: 0,
    },
    loves: {
        type: Number,
        default: 0,
    },
});

module.exports = model("book", BookSchema);
