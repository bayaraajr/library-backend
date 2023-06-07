const Admin = require("../models/Admin");

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
exports.updateBook = async (req) => {
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
