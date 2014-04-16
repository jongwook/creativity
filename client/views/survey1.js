

Template.survey1.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1a');
  Template.bottom.verify = function() {
    var form = $(".survey1-page form");
    var values = {
      name: form.find('input[name="name"]').val(),
      gender: form.find('input[name="gender"]:checked').val(),
      college: form.find('input[name="college"]').val(),
      major: form.find('input[name="major"]').val()
    };
    if (!values.name) {
      alert('이름을 입력해 주세요');
      return false;
    }
    if (!values.gender) {
      alert('성별을 입력해 주세요');
      return false;
    }
    if (!values.college) {
      alert('대학교를 입력해 주세요');
      return false;
    }
    if (!values.major) {
      alert('전공을 입력해 주세요');
      return false;
    }
    return true;
  }
};

Template.survey1a.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1b');
};

Template.survey1b.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/survey1c');
};

Template.survey1c.rendered = function() {
  Template.top.title('설문 I');
  Session.set('nextPage', '/activity1')
};

