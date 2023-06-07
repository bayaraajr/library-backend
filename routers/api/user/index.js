const { registerUser, updateUser } = require("../../../controllers/user.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerUser);
    fastify.put("/:email", updateUser)
    next();
};


// exports.autoPrefix = '/api/test'