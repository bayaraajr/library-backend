const {
    registerAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin,
    login,
} = require("../../../controllers/admin.controller");
const auth = require("../../../plugins/auth");

module.exports = function (fastify, opts, next) {
    fastify.post("/", registerAdmin);
    fastify.post("/login", login);
    fastify.put("/:id", { preHandler: auth }, updateAdmin);
    fastify.delete("/:id", { preHandler: auth }, deleteAdmin);
    fastify.get("/find", { preHandler: auth }, getAdmin);
    next();
};
