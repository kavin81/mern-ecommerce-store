import server from "./server.js";
import database from "./config/database.js";
import seed from "./config/seed.js";
import API from "./routes/index.js";

import { env } from "./config/env.js";

database.connect({
    uri: env.DATABASE_URI,
    dbName: env.DATABASE_NAME,
});
seed();

server.listen(env.API_PORT || 3000, () => {
    console.log(
        `[express] server started successfully on port ${env.API_PORT}`
    );
    console.log(`[express] URL: http://localhost:${env.API_PORT || 3000}`);
});

server.use(env.API_PREFIX, API);
