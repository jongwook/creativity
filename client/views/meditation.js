var range = 4 * 60;
var SESSION_KEY = "crossword-remaining";

Template.meditation.debug = function(remaining) {
  Session.set(SESSION_KEY, remaining);
};

Template.meditation.rendered = function () {
  Template.top.title("활동B");
  Template.top.desc("휴식");
  Session.set('nextPage', null);

  var remaining = Session.get(SESSION_KEY) || range;
  Session.set(SESSION_KEY, remaining);
  Template.timer.set(remaining, range);
  Template.timer.mute();


  var timer = setInterval(function() {
    remaining = Session.get(SESSION_KEY) - 1;
    Session.set(SESSION_KEY, remaining);

    if (remaining <= 0) {
      clearInterval(timer);
      Meteor.timer.mute();
      Meteor.Router.to("/activity1c");
      return;
    }

    Template.timer.set(remaining);
  }, 1000);
};

