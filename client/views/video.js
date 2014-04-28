var pre = 0;

Template.prevideo.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/video');

  pre = Date.now();
};

Template.prevideo.destroyed = function() {
  var elapsed = Date.now() - pre;
  submitData({pre: elapsed});
};

var post = 0;

Template.postvideo.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/activity1c');

  post = Date.now();
};

Template.postvideo.destroyed = function() {
  var elapsed = Date.now() - post;
  submitData({post: elapsed});
};

Template.video.rendered = function () {
  Template.top.title('활동B');
  Template.top.desc('재미있는 동영상 시청');
  Session.set('nextPage', null);

  Template.timer.set(secondaryRange, secondaryRange);
  Template.timer.mute();
  startSecondary();
};

