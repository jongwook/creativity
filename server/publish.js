Meteor.publish("answers", function() {
  return Answers.find();
});
