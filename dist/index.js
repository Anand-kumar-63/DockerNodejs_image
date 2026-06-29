import app from "./app";
// import { Express , Request } from "express";
import { adduser } from "./useractions";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
app.post("/Createuser", adduser);
app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
});
