
var connectHandler = WebApp.connectHandlers;

Meteor.startup(function() {
  connectHandler.use(function (req, res, next) {
    res.setHeader('X-UA-Compatible', 'IE=edge');
    return next();
  });
});