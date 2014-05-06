var type = (function() {
  switch (location.hostname[4]) {
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    default: return 0;
  }
})();

var stage = (function() {
  switch (location.hostname[6]) {
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    default: return 0;
  }
})();

Session.set('type', type);
Session.set('stage', stage);

Session.set('secondaryActivityLabel', [
  '',
  '활동B(가로세로 낱말퍼즐)로 전환하기',
  '활동B(재미있는 동영상 시청)로 전환하기',
  '활동B(휴식)로 전환하기'
][stage] || '');

Session.set('secondaryActivityPath', [
  '/notfound',
  '/precrossword',
  '/prevideo',
  '/premeditation'
][stage] || '/error');

routeSecondaryActivity = function() {
  Meteor.Router.to(Session.get('secondaryActivityPath'));
};

routeAfterTimeout = function() {
  Meteor.Router.to([
    '/notfound',
    '/postcrossword',
    '/postvideo',
    '/postmeditation'
  ][stage] || '/error');
};
