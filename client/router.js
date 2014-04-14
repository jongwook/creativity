Template.top.title = 'Routing...';
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
  '/description': 'description'
});

Meteor.Router.filters({
  'save': function(page) {
    Session.set('currentPage', page);
    return page;
  }
});
Meteor.Router.filter('save');
