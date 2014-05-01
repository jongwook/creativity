
var types = [0, 1];
var stages = [1, 2, 3];

Template.download.rendered = function() {
  Template.top.title('');
  Template.top.desc('');
};

/*
answers: Array[10]
college: "카이스트"
created: 1398692883691
crossword: Array[47]
gender: "male"
major: "222"
name: "김종욱"
post: 1551
pre: 1475
stage: 1
type: 1
updated: 1398696424984
year: "4"
yearCustom: "" */

var clean = function(str) {
  if (str === undefined || str === null)
    return "";
  if (typeof(str) === 'string')
    return str.replace(/,/g, ';');
  return str;
};

var convert = function(docs) {
  var csv = "id,created,updated,name,gender,birthyear,college,major,year,custom,pre,post,crossword";

  var s1s = 17;
  var s2s = 38;

  for (var s1 = 1; s1 <= s1s; s1++) {
    csv += ',survey1-' + s1;
  }
  for (var s2 = 1; s2 <= s2s; s2++) {
    csv += ',survey2-' + s2;
  }

  csv += ',answers\r\n';

  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];
    csv += clean(doc._id);
    csv += ',' + clean(date("Y-m-d H:i:s", doc.created));
    csv += ',' + clean(date("Y-m-d H:i:s", doc.updated));
    csv += ',' + clean(doc.name);
    csv += ',' + clean(doc.gender);
    csv += ',' + clean(doc.birthyear);
    csv += ',' + clean(doc.college);
    csv += ',' + clean(doc.major);
    csv += ',' + clean(doc.year);
    csv += ',' + clean(doc.yearCustom);
    csv += ',' + clean(doc.pre);
    csv += ',' + clean(doc.post);
    csv += ',' + clean(JSON.stringify(doc.crossword));
    for (var ss1 = 1; ss1 <= s1s; ss1++) {
      csv += ',' + clean(doc['survey1-' + ss1]);
    }
    for (var ss2 = 1; ss2 <= s2s; ss2++) {
      csv += ',' + clean(doc['survey2-' + ss2]);
    }
    if (doc.answers) {
      for (var j = 0; j < doc.answers.length; j++) {
        csv += ',' + clean(doc.answers[j]);
      }
    }
    csv += '\r\n';
  }
  return "data:text/csv;base64," + B64.encode(csv);
};


Template.download.links = function() {
  var result = {};
  for (var i = 0; i < types.length; i++) {
    for (var j = 0; j < stages.length; j++) {
      var answers = Answers.find({type: types[i], stage: stages[j]}).fetch();
      result[types[i] + '-' + stages[j]] = {
        url: convert(answers),
        size: answers.length
      };
    }
  }
  return result;
};
