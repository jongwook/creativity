var title = '활동A';
var desc = '혁신적인 아이디어 생각해내기';

var setTitle = function() {
  Template.top.title(title);
  Template.top.desc(desc);
};

Template.activity1.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
  Session.set('nextPage', '/activity1a');
};

Template.activity1a.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1b');
  appear();
};

var timer;

Template.activity1b.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1c');

  var remaining = Session.get(SESSION_KEY) || range;
  Session.set(SESSION_KEY, remaining);
  Template.timer.set(remaining, range);
  Template.timer.mute();

  var minutes = [1, 3, 6, 8, 10, 12, 13];

  timer = setInterval(function() {
    remaining = Session.get(SESSION_KEY) - 1;
    Session.set(SESSION_KEY, remaining);
    for (var i = 0; i < minutes.length; i++) {
      if (remaining === 60 * minutes[i]) {
        Template.timer.alert(minutes[i] + "분 남았습니다");
      }
    }

    if (remaining === 5 * 60) {
      clearInterval(timer);
      save();
      Template.timer.mute();
      routeActivity();
      return;
    }

    if (remaining <= 0) {
      clearInterval(timer);
      Meteor.Router.to("/activity1d");
    }

    Template.timer.set(remaining);
  }, 1000);
};

Template.activity1c.answers = function() {
  var id = Session.get("id");
  var record = Answers.findOne({_id: id});
  return record && record.answers ? record.answers : ["", "", "", "", "", "", "", "", "", ""];
};

var range = 15 * 60;

var save = function(push) {
  var answers = $(".activity1c-page input").map(function(i, x) { return $(x).val(); }).toArray();
  if (push !== undefined) {
    answers.push(push);
  }
  var id = Session.get("id");
  Answers.update({_id: id}, {_id: id, answers: answers}, {upsert: true});
};

var SESSION_KEY = "activity-remaining";

Template.activity1c.debug = function(remaining) {
  Session.set(SESSION_KEY, remaining);
};

Template.activity1c.rendered = function() {
  setTitle();
  Session.set('nextPage', '');
  var remaining = Session.get(SESSION_KEY) || range;
  Session.set(SESSION_KEY, remaining);
  Template.timer.set(remaining, range);
  Template.timer.mute();
};

Template.activity1c.events({
  'keydown input': function(event) {
    if (event.which !== 13) return;
    var input = $(event.target);
    if (input.val() === "") return;
    var next = $('input:eq(' + ($(':input').index(input) + 1) + ')');
    if (next.length > 0) {
      var clear = next.val() === "";
      console.log(next, clear);
      save();
      setTimeout(function() {
        if (clear) next.val('');
        next.focus();
      }, 10);
    } else {
      save("");
      setTimeout(function() {
        if (document.activeElement.nodeName === "INPUT") {
          $(document.activeElement).val("");
        }
        window.scrollTo(0,document.body.scrollHeight);
      }, 10);
    }
  }
});

Template.activity1d.rendered = function() {
  setTitle();
  Session.set('nextPage', '/survey2a');
};
