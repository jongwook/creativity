
Template.welcome.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/intro');
  Session.set('nextLabel', '시작');
  console.log("Welcome page rendered");
};
