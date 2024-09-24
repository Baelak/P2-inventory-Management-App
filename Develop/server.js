const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
app.use(routes);

// Start server and sync database
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`💚 App listening on port ${PORT}!`);
  });
});
