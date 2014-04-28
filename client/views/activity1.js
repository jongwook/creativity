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

Template.activity1b.rendered = function() {
  setTitle();
  Session.set('nextPage', '/activity1c');
  startPrimary();
};

Template.activity1c.answers = function() {
  var id = Session.get("id");
  var record = Answers.findOne({_id: id});
  return record && record.answers ? record.answers : ["", "", "", "", "", "", "", "", "", ""];
};

var save = function(push) {
  var answers = $(".activity1c-page input").map(function(i, x) { return $(x).val(); }).toArray();
  if (push !== undefined) {
    answers.push(push);
  }
  submitData({answers: answers});
};

Template.activity1c.rendered = function() {
  setTitle();
  Session.set('nextPage', '');
  Template.timer.mute();
  startPrimary();
};

Template.activity1c.destroyed = function() {
  
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
        next.focus();
        if (clear) {
          $(document.activeElement).val('');
        }
      }, 10);
    } else {
      save("");
      setTimeout(function() {
        if (document.activeElement.nodeName === "INPUT") {
          $(document.activeElement).val("");
        }
        window.scrollTo(0,document.body.scrollHeight);
      }, 0);
    }
  }
});

Template.activity1d.rendered = function() {
  setTitle();
  Session.set('nextPage', '/survey2a');
};
