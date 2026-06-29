import mongoose, { Schema, model } from "mongoose";
import { error } from "node:console";
const mongoURL = "mongodb://localhost:27017/myDatabase";
// connect to mongodb
mongoose
    .connect(mongoURL)
    .then(() => {
    console.log("MongoDb connected");
})
    .catch((err) => console.error("Mongodb connection error:", error));
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
