var questions = {
  survey2a: {
    "2": "과제를 수행하는 데 시간이 매우 부족하다고 느꼈다.",
    "3": "과제를 수행하는 동안 서둘러서 해야 한다는 조급함을 느꼈다.",
    "4": "과제를 수행하는 동안 재촉 받는 느낌이었다.",
    "5": "구체적으로 어떤 점에서 시간이 부족하다고 느꼈는가?",
    "6": [
      "",
      "낱말퍼즐 활동이 혁신적인 아이디어를 생각하는데 도움이 되었다고 생각한다.",
      "재미있는 동영상을 본 것은 혁신적인 아이디어를 생각하는데 도움이 되었다고 생각한다.",
      "잠시 휴식 시간을 가진 것은 혁신적인 아이디어를 생각하는데 도움이 되었다고 생각한다."
    ][Session.get("stage")],
    "7": "평소 낱말퍼즐과 같은 과제를 좋아하는 편이다.",
    "8": "평소 재미있는 동영상을 보는 것을 좋아하는 편이다.",
    "9": "평소 아무런 생각을 하지 않고 멍하게 있는 것을 좋아하는 편이다."
  },
  survey2b: {
    "10": "과제는 흥미로웠다.",
    "11": "과제는 나의 호기심을 자극했다.",
    "12": "과제를 푸는 게 재미있었다.",
    "13": "과제는 나를 즐겁게 해주었다.",
    "14": "과제를 수행하는 동안 문제에 매우 집중하였다.",
    "15": "제시받은 과제는 매우 집중을 요하는 문제였다.",
    "16": "나는 과제를 수행하는 동안 거의 집중하지 못했다.",
    "17": "나는 각각의 과제를 수행하는 데 몰입하기가 어려웠다.",
    "18": "나는 제시받은 과제에 거의 모든 주의를 기울였다고 생각한다."
  },
  survey2c: {
    "19": "과제에 필요한 아이디어들을 생각해내는 데에 어려움이 있었다.",
    "20": "이러한 과제에 대한 좋은 아이디어들을 갖고 있다고 확신한다.",
    "21": "과제에 관한 아이디어들을 생각해내는 데 좌절감을 느꼈다.",
    "22": "과제를 수행할 때, 매우 적은 수의 아이디어들만 떠올랐다.",
    "23": "과제를 수행하는 동안 머릿속에 공허함을 느꼈다.",
    "24": "나는 이 과제를 쉽게 할 수 있었다.",
    "25": "나는 이러한 종류의 과제에 소질이 있는 것 같다.",
    "26": "나는 이 과제를 하는 데 어려웠다.",
    "27": "나는 비교적 문제를 잘 푼 것 같다.",
    "28": "더 어려운 문제에 도전하고 싶다."
  },
  survey2d: {
    "29": "흥미진진한",
    "30": "짜증나는",
    "31": "만족스러운",
    "32": "실망스러운",
    "33": "열정적인",
    "34": "지루한",
    "35": "즐거운",
    "36": "초조한",
    "37": "기분 좋은",
    "38": "괴로운"
  }
};

var getQuestion = function() {
  return questions[Session.get("currentPage")] || null;
};

Template.options2.questions = getQuestion;
Template.options2.rendered = function() {
  Template.bottom.verify = function() {
    var fields = $("#main-container").find('input');
    var checked = fields.filter(':checked');
    var answers = {};
    for (var i = 0; i < fields.length; i++) {
      var field = $(fields[i]);
      answers[field.attr("name")] = null;
      if (field.attr("type") === "text" && field.val().trim() !== "") {
        answers[field.attr("name")] = field.val();
      }
    }
    for (var j = 0; j < checked.length; j++) {
      answers[$(checked[j]).attr("name")] = $(checked[j]).val();
    }

    for (var key in answers) {
      if (answers.hasOwnProperty(key) && answers[key] === null) {
        alert("모든 문항에 응답해 주십시오");
        return false;
      }
    }
    submitData(answers);
    return true;
  }
};
