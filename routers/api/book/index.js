const {
    registerBook,
    updateBook,
} = require("../../../controllers/book.contoller");
const auth = require("../../../plugins/auth");
// const { verifyJWT } = require("../../../utils/jwt");

module.exports = function (fastify, opts, next) {
    fastify.post("/", { preHandler: auth }, registerBook);
    fastify.put("/:id", { preHandler: auth }, updateBook);
    next();
};

// exports.autoPrefix = '/api/test'
