
Template.intro.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/description');
  console.log("Welcome page rendered");

  appear();
};
