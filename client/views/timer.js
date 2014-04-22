
Template.timer.rendered = function() {

};

var deps = new Deps.Dependency;
var value = 0;
var range = 0;

Template.timer.value = function() {
  deps.depend();
  return sprintf("%02d:%02d", value / 60, value % 60);
};

Template.timer.range = function() {
  deps.depend();
  return range;
};

Template.timer.percentage = function() {
  return 100 * value / range;
}

Template.timer.set = function(v, r) {
  value = v;
  if (r !== undefined) {
    range = r;
  }
  deps.changed();

  $(".timer-page .meter").css("width", (100 * value / range) + "%");
};

var alertMessage = "";
var alertDeps = new Deps.Dependency;

Template.timer.message = function(message) {
  if (message !== undefined) {
    alertDeps.changed();
    alertMessage = message;
  } else {
    alertDeps.depend();
  }
  return alertMessage;
};

Template.timer.alert = function(message) {
  Template.timer.message(message);
  var alert = $(".timer-message").hide().fadeIn(500);
  setTimeout(function() {
    alert.fadeOut(500);
  }, 3000);
};
