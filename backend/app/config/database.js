import mongoose from "mongoose";
import { env } from "../config/env.js";

class database {
    async connect({
        uri = env.DATABASE_URI,
        dbName = env.DATABASE_NAME,
    }) {
        await mongoose
            .connect(uri, {
                dbName: dbName,
            })
            .then(() => {
                console.log("[mongodb] Connected to the database");
            })
            .catch((error) => {
                console.log(
                    "[mongodb] Error connecting to the database: ",
                    error
                );
            });
        return mongoose.connection;
    }
}
export default new database();
