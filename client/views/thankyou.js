Template.thankyou.rendered = function () {
  Template.top.title('');
  Template.top.desc('검사가 모두 끝났습니다');
  Session.set('nextPage', null);
  Session.set('id', null);
  $.removeCookie('id');
};
