const fastify = require("fastify");
const mongoose = require("mongoose");
const autoload = require("@fastify/autoload");
const path = require("path");
const errorHandler = require("../plugins/error-handler");
const multer = require("fastify-multer");
require("dotenv").config();
const crypto = require("crypto");
const Admin = require("../models/Admin");
const server = fastify({ logger: true });
server.register(multer.contentParser);

server.setErrorHandler(errorHandler);

exports.registerAdmin = async (req, res) => {
    try {
        const salt = crypto.randomBytes(20).toString("hex");
        const hash = crypto
            .createHash("sha256")
            .update(req.body.password)
            .update(crypto.createHash("sha256").update(salt, "utf8").digest("hex"))
            .digest("hex");
        await Admin.create({ ...req.body, hash, salt });

        return res.status(201).send({
            message: "Successfully registered a admin",
        });
    } catch (error) {
        console.log(error);
        return {
            error: "Error",
        };
    }
};

server.register(require("@fastify/static"), {
    root: path.join(__dirname, "..", "public"),
    prefix: "/public/", // optional: default '/'
});
server.register(autoload, {
    dir: path.join(__dirname, "..", "routers"),
    maxDepth: 10,
});

const startServer = async () => {
    console.log(process.env.DB_URL);
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        /**
         * @TODO: select admin with email
         * if user does not exists create admin
         * otherwise do nothing
         * */
        server.log.info("[SERVER] Connected to MongoDB");
        server.listen({
            port: process.env.PORT,
        });
        server.log.info("[SERVER] Server started");
    } catch (error) {
        server.log.error(error);
    }
};

startServer();
