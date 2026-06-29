import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/myDatabase";
if (!process.env.MONGO_URL) {
    console.warn("⚠️  MONGO_URL env variable not set — falling back to localhost (will fail inside Docker)");
}
// connect to mongodb
mongoose
    .connect(mongoURL)
    .then(() => {
    console.log("MongoDb connected to:", mongoURL);
})
    .catch((err) => console.error("Mongodb connection error:", err));
// schemas
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});
export const userModel = model("User", userSchema);
