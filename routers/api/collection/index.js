const { createCollection } = require("../../../controllers/collection.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", createCollection);
    // fastify.put("/:id", updateBook);
    next();
};


// exports.autoPrefix = '/api/test'
