const Admin = require("../models/Admin");
const crypto = require("crypto");

exports.registerAdmin = async (req, res) => {
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
        await Admin.create({ ...req.body, hash, salt });

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

exports.login = async (req, res) => {
    try {
        const user = await Admin.findOne({ email: req.body.email });
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
        console.log(error);
        return res.status(400).send({
            message: "Invalid password",
        });
    }
};

exports.createAdmin = async (req, res) => {
    try {
        // console.log(req);
        await Admin.create(req.body);
        // await Admin.deleteOne("");

        return {
            message: "Successfully registered a admin",
        };
    } catch (error) {
        return res.status(400).send({
            error: "Error",
        });
    }
};
exports.updateAdmin = async (req) => {
    try {
        // console.log(req);
        await Admin.findByIdAndUpdate(req.params.id, req.body);
        // await Admin.deleteOne("");

        return {
            message: "Successfully registered a admin",
        };
    } catch (error) {
        console.log(error);
        return {
            error: "Error",
        };
    }
};
exports.deleteAdmin = async (req, res) => {
    try {
        // console.log(req);
        await Admin.findByIdAndDelete(req.params.id, req.body);
        // await Admin.deleteOne("");

        return {
            message: "Successfully registered a admin",
        };
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            error: "Error",
        });
    }
};
