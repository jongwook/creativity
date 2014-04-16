Template.survey2a.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제에 대한 인식');
  Session.set('nextPage', '/survey2b');
};

Template.survey2b.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제에 대한 인식');
  Session.set('nextPage', '/survey2c');
};

Template.survey2c.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제에 대한 인식');
  Session.set('nextPage', '/survey2d');
};

Template.survey2d.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제에 대한 인식');
  Session.set('nextPage', '/thankyou');
};
