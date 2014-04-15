Answers = new Meteor.Collection('answers');

Meteor.methods({
  'survey': function(survey) {
    console.log('persisting', JSON.stringify(survey));
    if (!survey.id) {
      throw new Error("id required");
    }
    var object = {};
    object["id"] = survey.id;
    return Answers.update({_id: survey.id}, {$push: {survey: {
      page: survey.page,
      name: survey.name,
      value: survey.value
    }}}, {upsert: true});
  }
});
