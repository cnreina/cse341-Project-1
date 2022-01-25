const { Error } = require("mongoose");

exports.get404View = (req, res, next) => {
  res.status(404).render('404View', {
    pageTitle: 'Resource Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.get500View = (req, res, next) => {
  res.status(500).render('500View', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};
