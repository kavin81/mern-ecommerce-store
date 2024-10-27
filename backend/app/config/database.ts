import mongoose from "mongoose";

class database {
    async connect({uri = process.env.DATABASE_URI, dbName = process.env.DATABASE_NAME}:{uri?:string, dbName?:string} = {}) {
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
