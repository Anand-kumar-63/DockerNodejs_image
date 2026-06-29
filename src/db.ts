import mongoose, { Schema, model } from "mongoose";
import { error } from "node:console";
const mongoURL: string = "mongodb://localhost:27017/myDatabase";

// connect to mongodb
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => console.error("Mongodb connection error:", error));

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