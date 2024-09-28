const router = require('express').Router();
// const categoryRoutes = require('./category-routes');
const categoryRoutes = require('../../controllers/api/inventoryRoutes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
<<<<<<< Updated upstream
const userRoutes = require("./user-routes")
=======
const userRoutes = require('../../controllers/api/userRoutes');
>>>>>>> Stashed changes

// router.use('/categories', categoryRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/users', userRoutes);

module.exports = router;
