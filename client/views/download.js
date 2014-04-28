
var types = [1];
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
  if (!str) return "";
  return str.replace(/,/g, ';');
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

  csv += ',answers\n';

  for (var i = 0; i < docs.length; i++) {
    csv += clean(docs._id);
    csv += ',' + clean(docs.created);
    csv += ',' + clean(docs.updated);
    csv += ',' + clean(docs.name);
    csv += ',' + clean(docs.gender);
    csv += ',' + clean(docs.birthyear);
    csv += ',' + clean(docs.college);
    csv += ',' + clean(docs.major);
    csv += ',' + clean(docs.year);
    csv += ',' + clean(docs.yearCustom);
    csv += ',' + clean(docs.pre);
    csv += ',' + clean(docs.post);
    csv += ',' + clean(JSON.stringify(docs.crossword));
    for (var ss1 = 1; ss1 <= s1s; ss1++) {
      csv += ',' + clean(docs['survey1-' + ss1]);
    }
    for (var ss2 = 1; ss2 <= s2s; ss2++) {
      csv += ',' + clean(docs['survey2-' + ss2]);
    }
    if (docs.answers) {
      for (var j = 0; j < docs.answers.length; j++) {
        csv += ',' + clean(docs.answers[j]);
      }
    }
    csv += '\n';
  }
  return "data:text/csv;base64," + btoa(csv);
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
