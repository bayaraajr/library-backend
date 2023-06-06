const fastify = require("fastify");
const mongoose = require("mongoose");
const autoload  = require("@fastify/autoload");
const path = require("path");
const Admin = require("./models/Admin");

require("dotenv").config();

const server = fastify({ logger: true });

server.register(autoload, { dir: path.join(__dirname, "routers"), maxDepth: 10 });

const startServer = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    
        server.log.info("[SERVER] Connected to MongoDB")
        server.listen({
            port: process.env.PORT,
        });
        server.log.info("[SERVER] Server started")
    } catch (error) {
        server.log.error(error);
    }
};

startServer();
