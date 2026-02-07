require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/products", require("./routes/productRoutes"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
