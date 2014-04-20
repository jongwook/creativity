Handlebars.registerHelper('object', function(obj) {
  result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push({
        key: key,
        value: obj[key]
      });
    }
  }
  return result;
});

Handlebars.registerHelper('values', function(obj) {
  result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
});
