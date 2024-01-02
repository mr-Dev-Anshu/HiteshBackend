import express from "express";
import dotenv from "dotenv";
import dbConnection from "./dbConnection/db.js";
import { ApiError } from "./utils/ApiError.js";
const app = express();
dotenv.config({
  path: "./env",
});
dbConnection();
app.get("/error", (req, res) => {
  const errorObj = new ApiError(200, "Error has been sent !!!",["Error not found ", "Error not found again ", "error not found again "]);
  res.status(errorObj.statusCode).json({
    success: false,
    message: errorObj.message, 
    errors: errorObj.errors,
  });
});  

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});