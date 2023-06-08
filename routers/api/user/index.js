const {
    registerUser,
    updateUser,
    login,
    deleteUser,
} = require("../../../controllers/user.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerUser);
    fastify.post("/login", login);
    fastify.put("/:email", updateUser);
    fastify.delete("/:id", deleteUser)
    next();
};

// exports.autoPrefix = '/api/test'
