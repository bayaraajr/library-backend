const Collection = require("../models/Collection");
const Book = require("../models/Book");

exports.createCollection = async (req, res) => {
    try {
        const books = await Book.find({ _id: { $in: req.body.books } });

        await Collection.create({ ...req.body, books });
        return {
            message: "Success",
        };
    } catch (error) {}
};
