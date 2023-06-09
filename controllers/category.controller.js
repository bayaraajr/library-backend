const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
    try {
        if (req.body.parent) {
            const parent = await Category.findById(req.body.parent);
            if (!parent)
                return res.status(400).send({
                    message: "Parent category not found",
                });
        }

        await Category.create(req.body);

        return {
            message: "Successfully added a Category",
        };
    } catch (error) {
        return res.status(400).send({
            error: "Error",
        });
    }
};
exports.updateCategory = async (req) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, req.body);

        return {
            message: "Successfully updated a Category",
        };
    } catch (error) {
        console.log(error);
        return {
            error: "Error",
        };
    }
};
exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id, req.body);

        return {
            message: "Successfully deleted a Category",
        };
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            error: "Error",
        });
    }
};
