import app from "./app.js";
// import { Express , Request } from "express";
import { adduser } from "./useractions.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 4000;

app.post("/Createuser", adduser);

app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
