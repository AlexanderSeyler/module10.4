const express = require("express");
const app = express();
const port = 8080;
const axios = require("axios");
const productRepo = require("./productRepo");
const productRoutes = require("./routes/productRoutes");

async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    console.log("Products fetched successfully.");
    productRepo.addProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}

app.use("/products", productRoutes);

app.use("/", (req, res) => {
  res.send("App is working");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  fetchProducts();
});
