const { registerAuthor, updateAuthor, getAuthor, deleteAuthor } = require("../../../controllers/author.controller");
const auth = require("../../../plugins/auth");

module.exports = function (fastify, opts, next) {
    fastify.post("/", { preHandler: auth }, registerAuthor);
    fastify.put("/:id", { preHandler: auth }, updateAuthor);
    fastify.delete("/:id", { preHandler: auth }, deleteAuthor);
    fastify.post("/find", { preHandler: auth }, getAuthor);
    next();
};
