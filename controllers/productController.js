const productRepo = require("../productRepo");

const getProducts = (req, res) => {
  const products = productRepo.getAll();
  res.send({ result: 200, data: products });
};

module.exports = { getProducts };
