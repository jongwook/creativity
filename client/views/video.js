Template.prevideo.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/video');
};

Template.postvideo.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/activity1c');
};

Template.video.rendered = function () {
  Template.top.title('활동B');
  Template.top.desc('재미있는 동영상 시청');
  Session.set('nextPage', null);

  Template.timer.set(secondaryRange, secondaryRange);
  Template.timer.mute();
  startSecondary();
};

