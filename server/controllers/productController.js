const productModel = require("../models/productModel");

module.exports = {
  new: async (req, res) => {
    try {
      const product = await productModel.create(req.body);
      if (product.error || !product) {
        return res.status(200).json({
          hasError: true,
          msg: "Product creation failed",
        });
      }

      return res.status(200).json({
        hasError: false,
        msg: "Product Created",
        data: product,
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        hasError: true,
        msg: "Creation fail",
      });
    }
  },
};
