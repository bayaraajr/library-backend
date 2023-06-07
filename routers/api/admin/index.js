const {
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../../../controllers/admin.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", createAdmin);
    fastify.put("/:id", updateAdmin);
    fastify.delete("/:id", deleteAdmin);
    next();
};
