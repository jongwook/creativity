Template.description.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/survey1');
  console.log('description page loaded');
  appear();
};


