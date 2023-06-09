const User = require("../models/User");
const crypto = require("crypto");
const { generateJWT } = require("../utils/jwt");

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        const hash = crypto
            .createHash("sha256")
            .update(req.body.password)
            .update(
                crypto
                    .createHash("sha256")
                    .update(user.salt, "utf8")
                    .digest("hex")
            )
            .digest("hex");

        // @TODO Generate JWT (JSON Web Token)
        const token = generateJWT({ userId: user._id });
        if (hash === user.hash) {
            return {
                ...user._doc,
                token,
                hash: undefined,
                salt: undefined,
            };
        } else throw new Error("Invalid password");
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "Invalid password",
        });
    }
};
exports.registerUser = async (req, res) => {
    try {
        // console.log(req);
        const salt = crypto.randomBytes(20).toString("hex");
        const hash = crypto
            .createHash("sha256")
            .update(req.body.password)
            .update(
                crypto.createHash("sha256").update(salt, "utf8").digest("hex")
            )
            .digest("hex");
        await User.create({ ...req.body, hash, salt });

        return res.status(201).send({
            message: "Successfully registered a user",
        });
    } catch (error) {
        console.log(error);
        return {
            error: "Error",
        };
    }
};
exports.updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(203).send({
            message: "Successfully changed a user",
        });
    } catch (error) {
        return {
            error: "Error",
        };
    }
};
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id, req.body);
        return res.status(203).send({
            message: "Successfully deleted a user",
        });
    } catch (error) {
        return {
            error: "Error",
        };
    }
};
exports.getUser = async (req, res) => {
    // const pageSize = 5;
    // const currentPage = req.query.page || 1;
    // const startIndex = (currentPage - 1) * pageSize;
    // const endIndex = startIndex + pageSize;
    // const users = await User.find()
    //     .skip(startIndex)
    //     .limit(pageSize)
    //     .exec();
    // return res.status(200).json({
    //     users,
    //     currentPage,
    //     endIndex
    // });

    const pageSize = req.query.size || 10;
    const pageNumber = req.query.page || 0;

    const totalElements = await User.count();
    const users = await User.find()
        .skip(pageSize * pageNumber)
        .limit(pageSize)
        .exec();

    return res.send({
        content: users,
        totalElements,
        totalPage: parseInt(Math.ceil(totalElements / pageSize)),
    });
};
