Meteor.startup(function() {
  var id = $.cookie("id");
  if (!id) {
    id = Meteor.uuid();
    $.cookie("id", id, {expires: 1, path: '/'});
  }
  Session.set("id", id);
  console.log("Session ID : " + id);
});
