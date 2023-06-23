const Book = require("../models/Book");
const fs = require("fs");
const path = require("path");

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
        const book = await Book.findById(req.params.id);

        if (!book)
            return res.status(400).send({
                message: "Book not found",
            });
        const coverUrl = book._doc.coverUrl;
        const filePath = book._doc.filePath;

        if (fs.existsSync(path.join(__dirname, "..", "public", "uploads", coverUrl)))
            fs.unlinkSync(path.join(__dirname, "..", "public", "uploads", coverUrl));
        if (fs.existsSync(path.join(__dirname, "..", "public", "uploads", filePath)))
            fs.unlinkSync(path.join(__dirname, "..", "public", "uploads", filePath));

        // await book.remove().exec();
        await Book.findByIdAndDelete(req.params.id);
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

exports.getBook = async (req, res) => {
    const bookSize = req.query.size || 10;
    const bookNumber = req.query.page || 0;

    const sortBy = req.query.sort || "name";
    const order = req.query.order === "asc" ? 1 : -1;

    let filter = {};
    Object.keys(req.body).forEach((key) => {
        if (key === "pubStartDate" || key === "pubEndDate") {
            filter.publicationDate = {
                $gte: new Date(req.body.pubStartDate),
                $lt: new Date(req.body.pubEndDate),
            };
        }
        // else if (key === "loves") {
        //     filter.loves = {
        //         $gte: req.body.loves,
        //     };
        // }
        else
            filter[key] = {
                $regex: ".*" + req.body[key] + ".*",
            };
    });

    const totalElements = await Book.count(filter);
    const book = await Book.find(filter)
        .skip(bookSize * bookNumber)
        .limit(bookSize)
        .sort({
            [sortBy]: order,
        })
        .exec();

    return res.send({
        content: book,
        totalElements,
        totalPage: parseInt(Math.ceil(totalElements / bookSize)),
    });
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        res.status(400).json({
            message: "User not found",
        });
    }

    res.send({
        ...book,
    });
};
