

Template.survey1.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1a');
};

Template.survey1a.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1b');
};

Template.survey1b.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1c');
};

Template.survey1c.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/activity1')
};

