const router = require('express').Router();
<<<<<<< Updated upstream
const apiRoutes = require('./api/index');
=======
const apiRoutes = require('./api'); // Import API routes
const homeRoutes = require('../controllers/homeRoutes'); // Import home routes for rendering views
>>>>>>> Stashed changes

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>🙈 Wrong Route 🙈</h1>")
});

module.exports = router;