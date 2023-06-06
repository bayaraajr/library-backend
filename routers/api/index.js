// const { testDetails } = require("../controllers/test.controller");

module.exports = function (fastify, opts, next) {
    fastify.get("/", function (req, res) {
        return {
            test: 1,
        };
    });
    next();
};
