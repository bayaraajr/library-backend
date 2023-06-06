const { testDetails } = require("../../../controllers/test.controller");

module.exports = function (fastify, opts, next) {
    fastify.get("/test", function(req,res) {
        return {
            test: 2
        }
    });
    next();
};


// exports.autoPrefix = '/api/test'
