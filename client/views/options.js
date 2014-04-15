var questions = [
  {
    "1": "나는 사회적 이슈에 대해 평소 생각을 많이 한다.",
    "2": "나는 시험을 볼 때 내가 모르는 문제가 나와도 바로 포기하지 않고 정답을 맞히기 위해서 생각을 많이 한다.",
    "3": "나는 시험을 볼 때 시험을 망쳤을 경우에 대해서 생각한다.",
    "4": "나는 시험을 볼 때 무섭고 불안하다."
  },
  {
    "5": "나는 활발한 상상력을 갖고 있다.",
    "6": "나는 추상적인 생각을 좋아하지 않는다.",
    "7": "나는 추상적인 생각을 이해하는데 어려움이 있다.",
    "8": "나는 상상력이 부족하다.",
    "9": "나는 마감시한(deadline) 없이 해야 할 일들을 마치는 것이 어렵다.",
    "10": "나는 실제로 일을 시작하기 전에 그 일에 대한 압박감을 느껴야 한다.",
    "11": "나는 항상 시간이 얼마 남지 않아야 해야 할 일들을 하는 것 같다."
  },
  {
    "12": "나는 사는 게 즐겁다.",
    "13": "나는 걱정거리가 별로 없다.",
    "14": "나는 내 삶이 행복하다고 생각한다.",
    "15": "나는 좋은 아이디어를 많이 갖고 있다.",
    "16": "나는 새로운 아이디어를 생각해 내는 것을 잘한다.",
    "17": "나는 풍부한 상상력을 갖고 있다."
  }
];

var getQuestion = function() {
  switch(Session.get("currentPage")) {
    case "survey1a": return questions[0];
    case "survey1b": return questions[1];
    case "survey1c": return questions[2];
  }
  return null;
};

Template.options.questions = getQuestion;

Template.options.events({
  'click input[type="radio"]': function(event) {
    var survey = {
      id: Session.get("id"),
      page: Session.get("currentPage"),
      name: event.target.name,
      value: event.target.value
    };
    Meteor.call('survey', survey, function(error, result) {
      if (error) {
        throw error;
      }
      console.log('submitted survey data : ' + result);
    });
  }
});