const {
    registerUser,
    updateUser,
    login,
    deleteUser,
} = require("../../../controllers/user.controller");
const auth = require("../../../plugins/auth");

module.exports = function (fastify, opts, next) {
    fastify.post("/", { preHandler: auth }, registerUser);
    fastify.post("/login", { preHandler: auth }, login);
    fastify.put("/:id", { preHandler: auth }, updateUser);
    fastify.delete("/:id", { preHandler: auth }, deleteUser);
    next();
};

// exports.autoPrefix = '/api/test'
