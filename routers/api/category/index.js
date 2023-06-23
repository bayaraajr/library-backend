const {
    createCategory,
    updateCategory,
    deleteCategory,
    getGategory,
} = require("../../../controllers/category.controller");
const auth = require("../../../plugins/auth");

module.exports = function (fastify, opts, next) {
    fastify.post("/", { preHandler: auth }, createCategory);
    fastify.put("/:id", { preHandler: auth }, updateCategory);
    fastify.delete("/:id", { preHandler: auth }, deleteCategory);
    fastify.post("/find", getGategory);
    next();
};
