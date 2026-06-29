import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURL: string = process.env.MONGO_URL || "mongodb://localhost:27017/myDatabase";

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

// user models
interface Iuser {
  name: string;
  age: number;
  email: string;
}

// schemas
const userSchema: Schema = new Schema<Iuser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age:{
    type:Number,
    required: true,
  },
});

export const userModel = model<Iuser>("User",userSchema);