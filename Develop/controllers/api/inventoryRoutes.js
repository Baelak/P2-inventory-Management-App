const router = require("express").Router();
const { Category, Product, Tag } = require("../../models");

// POST to add a new category
router.post("/category", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    if (newCategory) {
      res.redirect("/inventory");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST to add a new product
router.post("/product", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST to add a new tag
router.post("/tag", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
