Template.premeditation.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/meditation');
};

Template.postmeditation.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/activity1c');
};


Template.meditation.rendered = function () {
  Template.top.title("활동B");
  Template.top.desc("휴식");
  Session.set('nextPage', null);

  Template.timer.set(secondaryRange, secondaryRange);
  Template.timer.mute();
  startSecondary();
};

