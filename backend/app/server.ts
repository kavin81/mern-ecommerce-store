import  express  from 'express';
import morgan from 'morgan';

import swaggerUI from 'swagger-ui-express';
import swagger from 'swagger.json';
// import cors from "cors";



const server = express();
server.use(express.json());
server.use(morgan("dev"));


server.get("/", (req, res) => {
    res.redirect(process.env.API_PREFIX);
});

server.use(process.env.API_PREFIX, swaggerUI.serve, swaggerUI.setup(swagger));

export default server;
