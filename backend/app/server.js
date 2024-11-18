import express from "express";
import morgan from "morgan";
import { env } from "./config/env.js"

import swaggerUI from "swagger-ui-express";
import swagger from "../swagger.json" with { type: "json" };
import cors from "cors";

const server = express();
server.use(express.json())
server.use(cors({origin:"*"}));
server.use(morgan("dev"));

server.get("/", (req, res) => {
    res.redirect(`${env.API_PREFIX}/docs`);
});

server.use(`${env.API_PREFIX}/docs`, swaggerUI.serve, swaggerUI.setup(swagger));

export default server;