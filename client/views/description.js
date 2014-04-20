Template.description.rendered = function() {
  Template.top.title('검사설명');
  Template.top.desc('');
  Session.set('nextPage', '/survey1');
  console.log('description page loaded');
  appear();
};


