const express = require("express");
const app = express();
const coursesRouter = require("./routes/courses");
const bodyparser=require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
app.use(bodyparser.json());
app.use("/api/v1/courses", coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(() => {
        console.log("Connected to the database");
        app.listen(process.env.PORT, () => {
            console.log("Server is running");
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error.message);
    });
