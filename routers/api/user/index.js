const { registerUser } = require("../../../controllers/user.controller");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerUser);
    next();
};


// exports.autoPrefix = '/api/test'