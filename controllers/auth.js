const User = require('../models/user');

exports.getLogin = (req, res, next) => {
//  const isLoggedIn = req
// .get('Cookie')
// .split(';')[1]
// .trim()
// .split('=')[1];  
 res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: false
 })
};

exports.postLogin = (req, res, next) => {
  User.findById('620f75b27b6bbf66340c0b1b')
  .then(user => {
   req.session.isLoggedIn = true;
   req.session.user = user;
   res.redirect('/');
  })
  .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
   req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
   });
 };