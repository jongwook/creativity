Template.welcome.helpers({
  hello: 'Hello World!!'
});

Template.welcome.rendered = function() {
  Template.top.title('인사말');
  Template.top.desc('');
  Session.set('nextPage', '/description');
  console.log("Welcome page rendered");
}
