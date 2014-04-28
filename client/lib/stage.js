var type = (function() {
  switch (location.hostname[4]) {
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    default: return 0;
  }
})();

var stage = (function() {
  switch (location.hostname[6]) {
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    default: return 0;
  }
})();

Session.set('type', type);
Session.set('stage', stage);

routeActivity = function() {
  Meteor.Router.to([
    '/notfound',
    '/precrossword',
    '/prevideo',
    '/premeditation'
  ][stage] || '/error');
};

routeAfterTimeout = function() {
  Meteor.Router.to([
    '/notfound',
    '/postcrossword',
    '/postvideo',
    '/postmeditation'
  ][stage] || '/error');
};
