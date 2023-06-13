const {
    registerBook,
    updateBook,
    deleteBook,
    getBook,
} = require("../../../controllers/book.contoller");
const auth = require("../../../plugins/auth");

// const { verifyJWT } = require("../../../utils/jwt");

module.exports = function (fastify, opts, next) {
    fastify.post("/", { preHandler: auth }, registerBook);
    fastify.put("/:id", { preHandler: auth }, updateBook);
    fastify.delete("/:id", { preHandler: auth }, deleteBook);
    fastify.post("/find", getBook);
    next();
};

// exports.autoPrefix = '/api/test'
