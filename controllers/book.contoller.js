const Book = require("../models/Book");

exports.registerBook = async (req, res) => {
    // console.log(req);
    await Book.create(req.body);
    // await Book.deleteOne("");

    return res.status(201).send({
        message: "Successfully registered a book",
    });
};
exports.updateBook = async (req) => {
    // console.log(req);
    await Book.findByIdAndUpdate(req.params.id, req.body);
    // await Book.deleteOne("");
    return {
        message: "Successfully registered a book",
    };
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id, req.body);

        return {
            message: "Successfully deleted a Book",
        };
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            error: "Error",
        });
    }
};
