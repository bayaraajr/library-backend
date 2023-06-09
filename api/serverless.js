const fastify = require("fastify");
const mongoose = require("mongoose");
const autoload = require("@fastify/autoload");
const path = require("path");
const errorHandler = require("../plugins/error-handler");

require("dotenv").config();

const server = fastify({ logger: true });

server.setErrorHandler(errorHandler);
server.register(autoload, {
    dir: path.join(__dirname, "..", "routers"),
    maxDepth: 10,
});

const startServer = async () => {
    console.log(process.env.DB_URL);
    try {
        await mongoose.connect(`${process.env.DB_URL}`);

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
