const User = require("../models/User");
const crypto = require("crypto");

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
        if (hash === user.hash) {
            return {
                ...user._doc,
                token: "",
                hash: undefined,
                salt: undefined,
            };
        } else throw new Error("Invalid password");
    } catch (error) {
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
        await User.findOneAndUpdate(req.body.email, req.body);
        return res.status(203).send({
            message: "Successfully changed a user",
        });
    } catch (error) {
        return {
            error: "Error",
        };
    }
};
