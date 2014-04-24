Template.survey2a.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제 수행 과정에 대한 인식');
  Session.set('nextPage', '/survey2b');
};

Template.survey2b.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('혁신적인 아이디어 생성 과제에 대한 인식');
  Session.set('nextPage', '/survey2c');
};

Template.survey2c.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('혁신적인 아이디어 생성 과제에 대한 인식');
  Session.set('nextPage', '/survey2d');
};

Template.survey2d.rendered = function() {
  Template.top.title('설문 II');
  Template.top.desc('과제를 마치고 난 후의 느낌');
  Session.set('nextPage', '/thankyou');
};
