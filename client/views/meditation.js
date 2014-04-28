var pre = 0;

Template.premeditation.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/meditation');

  pre = Date.now();
};

Template.premeditation.destroyed = function() {
  var elapsed = Date.now() - pre;
  submitData({pre: elapsed});
};

var post = 0;

Template.postmeditation.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/activity1c');

  post = Date.now();
};

Template.postmeditation.destroyed = function() {
  var elapsed = Date.now() - post;
  submitData({post: elapsed});
};

Template.meditation.rendered = function () {
  Template.top.title("활동B");
  Template.top.desc("휴식");
  Session.set('nextPage', null);

  Template.timer.set(secondaryRange, secondaryRange);
  Template.timer.mute();
  startSecondary();
};

