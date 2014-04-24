var title = null;
var titleDeps = new Deps.Dependency;
Template.top.title = function(newTitle) {
  if (newTitle !== undefined) {
    titleDeps.changed();
    title = newTitle;
  } else {
    titleDeps.depend();
  }
  return title;
};

var desc = null;
var descDeps = new Deps.Dependency;
Template.top.desc = function(newDesc) {
  if (newDesc !== undefined) {
    descDeps.changed();
    desc = newDesc;
  } else {
    descDeps.depend();
  }
  return desc;
};

Template.top.title("Routing...");
Template.bottom.prevPage = function () {
  return Session.get('prevPage');
};
Template.bottom.prevLabel = function() {
  return Session.get('prevLabel');
};

Template.bottom.nextPage = function () {
  return Session.get('nextPage');
};
Template.bottom.nextLabel = function() {
  return Session.get('nextLabel');
};


Meteor.Router.add({
  '/': 'welcome',
  '/welcome': 'welcome',
  '/intro': 'intro',
  '/description': 'description',
  '/survey1': 'survey1',
  '/survey1a': 'survey1a',
  '/survey1b': 'survey1b',
  '/survey1c': 'survey1c',
  '/survey1d': 'survey1d',
  '/activity1': 'activity1',
  '/activity1a': 'activity1a',
  '/activity1b': 'activity1b',
  '/activity1c': 'activity1c',
  '/activity1d': 'activity1d',
  '/crossword': 'crossword',
  '/video': 'video',
  '/meditation': 'meditation',
  '/survey2a': 'survey2a',
  '/survey2b': 'survey2b',
  '/survey2c': 'survey2c',
  '/survey2d': 'survey2d',
  '/thankyou': 'thankyou',
  '*': '404'
});

Meteor.Router.filters({
  'save': function(page) {
    Session.set('currentPage', page);
    Session.set('prevLabel', '');
    Session.set('nextLabel', '');
    return page;
  }
});
Meteor.Router.filter('save');
