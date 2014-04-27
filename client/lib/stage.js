
Session.set("stage", (function() {
  switch (location.hostname[6]) {
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    default: return 0;
  }
})());

routeActivity = function() {
  Meteor.Router.to([
    '/notfound',
    '/precrossword',
    '/prevideo',
    '/premeditation'
  ][Session.get("stage")] || '/error');
};

routeAfterTimeout = function() {
  Meteor.Router.to([
    '/notfound',
    '/postcrossword',
    '/postvideo',
    '/postmeditation'
  ][Session.get("stage")] || '/error');
};
