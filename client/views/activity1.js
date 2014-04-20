Template.activity1.rendered = function() {
  Template.top.title('');
  Template.top.desc('활동 안내');
  Session.set('nextPage', '/activity1a');
};

Template.activity1a.rendered = function() {
  Template.top.title('활동A');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/activity1b');
  appear();
};

Template.activity1b.answers = function() {
  var id = Session.get("id");
  var record = Answers.findOne({_id: id});
  return record ? record.answers : ["", "", "", ""];
};

Template.activity1b.events({
  'keydown input': function(event) {
    if (event.which !== 13) return;
    var input = $(event.target);
    if (input.val() === "") return;
    var next = $(':input:eq(' + ($(':input').index(input) + 1) + ')');
    if (next.length > 0) {
      next.focus();
    } else {
      var answers = $(".activity1b-page input").map(function(i, x) { return $(x).val(); }).toArray();
      answers.push("");
      Answers.update({_id: Session.get("id")}, {answers: answers}, {upsert: true});
      setTimeout(function() {
        $(".activity1b-page input:last").val("");
      }, 0);
    }
  }
});

Template.activity1b.rendered = function() {
  Template.top.title('활동A');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/activity1c');
};

Template.activity1c.rendered = function() {
  Template.top.title('활동A');
  Template.top.desc('혁신적인 아이디어 생각해내기');
  Session.set('nextPage', '/survey2a');
};
