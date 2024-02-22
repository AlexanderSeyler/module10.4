let products = [];

const productRepo = {
  getAll: () => {
    return products;
  },
  addProducts: (newProducts) => {
    products = newProducts;
    console.log(products);
  },
};

module.exports = productRepo;
