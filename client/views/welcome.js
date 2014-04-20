
Template.welcome.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/intro');
  console.log("Welcome page rendered");
};
