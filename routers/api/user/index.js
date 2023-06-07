const {
    registerUser,
    updateUser,
    login,
} = require("../../../controllers/user.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerUser);
    fastify.post("/login", login);
    fastify.put("/:email", updateUser);
    next();
};

// exports.autoPrefix = '/api/test'
