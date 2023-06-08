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
