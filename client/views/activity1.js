Template.activity1.rendered = function() {
  Template.top.title('활동 I');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/activity1a');
};

Template.activity1a.rendered = function() {
  Template.top.title('활동 I');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/activity1b');
};

Template.activity1b.rendered = function() {
  Template.top.title('활동 I');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/activity1c');
};

Template.activity1c.rendered = function() {
  Template.top.title('안내멘트');
  Template.top.desc('');
  Session.set('nextPage', '/survey2a');
};
