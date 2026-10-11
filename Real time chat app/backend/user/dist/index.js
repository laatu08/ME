import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { createClient } from "redis";
dotenv.config();
connectDB();
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
    throw new Error("REDIS_URL is not defined in the environment variables");
}
export const redisClient = createClient({
    url: redisUrl,
});
redisClient.connect().then(() => {
    console.log("Redis connected successfully");
}).catch((error) => {
    console.error("Error connecting to Redis:", error);
});
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map