import server from "./server";
import database from "~/config/database";
import API from "~/routes/index"


database.connect({
    uri: process.env.DATABASE_URI,
    dbName: process.env.DATABASE_NAME,
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`[express] server started successfully on port ${process.env.API_PORT}`);
    console.log(`[express] URL: http://localhost:${process.env.API_PORT || 3000}`);
});


server.use(process.env.API_PREFIX,API);