Answers = new Meteor.Collection('answers', {
  transform: function(doc) {
    return doc;
  }
});

Answers.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return false;
  }
});
