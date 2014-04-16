Template.thankyou.rendered = function () {
  Template.top.title("마무리");
  Template.top.desc("검사가 모두 끝났습니다");
  Session.set('nextPage', null);
  $.removeCookie('id');
};
