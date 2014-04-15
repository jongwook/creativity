var title = null;
var titleDeps = new Deps.Dependency;
Template.top.title = function(newTitle) {
  if (newTitle) {
    titleDeps.changed();
    title = newTitle;
  } else {
    titleDeps.depend();
    return title;
  }
};
Template.top.title("Routing...");
Template.bottom.nextPage = function () {
  return Session.get('nextPage');
};

Meteor.Router.add({
  '/': function() {
    Meteor.defer(function() {
      Meteor.Router.to('/welcome');
    });
    return null;
  },
  '/welcome': 'welcome',
  '/description': 'description',
  '/survey1': 'survey1',
  '/survey1a': 'survey1a',
  '/survey1b': 'survey1b',
  '/survey1c': 'survey1c',
  '/activity1': 'activity1',
  '*': '404'
});

Meteor.Router.filters({
  'save': function(page) {
    Session.set('currentPage', page);
    return page;
  }
});
Meteor.Router.filter('save');
