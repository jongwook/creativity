var range = 4 * 60;
var remaining = range;

Template.meditation.debug = function(r) {
  remaining = r;
};

Template.meditation.rendered = function () {
  Template.top.title("활동B");
  Template.top.desc("휴식");
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

