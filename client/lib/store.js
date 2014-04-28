
submitData = function(data) {
  var id = Session.get('id');
  var document;
  if (Answers.findOne(id) === undefined) {
    document = _.extend({_id: id, created: Date.now()}, data);
    Answers.insert(document);
    console.log('inserted : ' + JSON.stringify(document, 0, 2));
  } else {
    document = _.extend({updated: Date.now()}, data);
    Answers.update({_id: id}, {$set: document});
    console.log('updated : ' + JSON.stringify(document, 0, 2));
  }
};

