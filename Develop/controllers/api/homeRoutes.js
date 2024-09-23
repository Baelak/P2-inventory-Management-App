const router = require('express').Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

// Login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// Profile page
router.get('/profile', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('profile', { loggedIn: req.session.loggedIn });
});

module.exports = router;
