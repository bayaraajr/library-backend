const { createAdmin } = require("../../../controllers/admin.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerAdmin);
    fastify.put("/:id", updateAdmin);
    fastify.delete("/:id", deleteAdmin);
    next();
};

// exports.autoPrefix = '/api/test'
