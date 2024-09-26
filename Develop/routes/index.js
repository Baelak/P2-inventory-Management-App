// routes/index.js

const router = require('express').Router();
const apiRoutes = require('./api'); // Import API routes
const homeRoutes = require('../controllers/api/homeRoutes'); // Import home routes for rendering views

// Use API routes for paths starting with /api
router.use('/api', apiRoutes);

// Use homeRoutes for rendering Handlebars views
router.use('/', homeRoutes);

// Fallback for 404 error (Wrong Route)
router.use((req, res) => {
  res.status(404).send("<h1>🙈 Wrong Route 🙈</h1>");
});

module.exports = router;
