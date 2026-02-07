require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  { name: "Laptop", price: 20000, category: "Electronics", stock: 5 },
  { name: "Phone", price: 10000, category: "Electronics", stock: 10 },
  { name: "Headphones", price: 1500, category: "Accessories", stock: 20 }
];

(async () => {
  await Product.insertMany(products);
  console.log("Data Inserted ✅");
  process.exit();
})();
