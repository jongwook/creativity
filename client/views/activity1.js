var title = '활동A';
var desc = '혁신적인 아이디어 생각해내기';

var setTitle = function() {
  Template.top.title(title);
  Template.top.desc(desc);
}

Template.activity1.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1a');
};

Template.activity1a.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1b');
  appear();
};

Template.activity1b.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1c');
};

Template.activity1c.answers = function() {
  var id = Session.get("id");
  var record = Answers.findOne({_id: id});
  return record && record.answers ? record.answers : ["", "", "", "", "", "", "", "", "", ""];
};

var range = 14 * 60;
var remaining = range;

var save = function() {
  var answers = $(".activity1c-page input").map(function(i, x) { return $(x).val(); }).toArray();
  answers.push("");
  var id = Session.get("id");
  Answers.update({_id: id}, {answers: answers}, {upsert: true});
}

Template.activity1c.debug = function(r) {
  remaining = r;
}

Template.activity1c.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1d');
  Template.timer.set(remaining, range);

  var minutes = [1, 3, 6, 8, 10, 12, 13];

  var timer = setInterval(function() {
    remaining--;
    for (var i = 0; i < minutes.length; i++) {
      if (remaining === 60 * minutes[i]) {
        Template.timer.alert(minutes[i] + "분 남았습니다");
      }
    }

    if (remaining === 4 * 60) {
      clearInterval(timer);
      save();
      routeActivity();
      return;
    }

    if (remaining === 0) {
      clearInterval(timer);
      Meteor.Router.to("/activity1d");
    }

    Template.timer.set(remaining);
  }, 1000);
};

Template.activity1c.events({
  'keydown input': function(event) {
    if (event.which !== 13) return;
    var input = $(event.target);
    if (input.val() === "") return;
    var next = $(':input:eq(' + ($(':input').index(input) + 1) + ')');
    if (next.length > 0) {
      next.focus();
    } else {
      save();
      setTimeout(function() {
        $(".activity1c-page input:last").val("");
        window.scrollTo(0,document.body.scrollHeight);
      }, 0);
    }
  }
});

Template.activity1d.rendered = function() {
  setTitle();
  Session.set('nextPage', '/survey2a');
};
