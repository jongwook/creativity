var range = 4 * 60;
var remaining = range;

Template.video.debug = function(r) {
  remaining = r;
};

Template.video.rendered = function () {
  Template.top.title('활동B');
  Template.top.desc('재미있는 동영상 시청');
  Session.set('nextPage', null);
  Template.timer.set(remaining, range);

  var timer = setInterval(function() {
    remaining--;

    if (remaining === 0) {
      clearInterval(timer);
      Meteor.Router.to("/activity1c");
      return;
    }

    Template.timer.set(remaining);
  }, 1000);
};

