const {
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../../../controllers/category.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", createCategory);
    fastify.put("/:id", updateCategory);
    fastify.delete("/:id", deleteCategory);
    next();
};
