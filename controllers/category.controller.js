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

exports.getGategory = async (req, res) => {
    const CategorySize = req.query.size || 10;
    const CategoryNumber = req.query.page || 0;

    const totalElements = await Category.count();
    const gategories = await Category.find()
        .skip(CategorySize * CategoryNumber)
        .limit(CategorySize)
        .exec();

    return res.send({
        content: gategories,
        totalElements,
        totalPage: parseInt(Math.ceil(totalElements / CategorySize)),
    });
};
