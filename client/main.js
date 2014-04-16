Meteor.startup(function() {
  var id = $.cookie("id");
  if (!id) {
    id = Meteor.uuid();
    $.cookie("id", id, {expires: 1, path: '/'});
  }
  Session.set("id", id);
  console.log("Session ID : " + id);
});

Template.bottom.events({
  'click a.nextPage': function() {
    if (Template.bottom.verify instanceof Function) {
      var result = Template.bottom.verify();
      if (result) {
        Template.bottom.verify = null;
      }
      return result;
    }
    return true;
  }
});
