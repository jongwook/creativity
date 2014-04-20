
Template.video.rendered = function () {
  Template.top.title('활동B');
  Template.top.desc('재미있는 동영상 시청');
  Session.set('nextPage', null); // TODO: timer
};

