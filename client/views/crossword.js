String.prototype.trimmed = function() {
  return $.map(this.split(''), function(s) { return s.trim(); });
};

var puzzle = [
  "삼행시　　　가우디".trimmed(),
  "각　　　　동업　딤".trimmed(),
  "주위　하극상　　돌".trimmed(),
  "　기여　　　소관　".trimmed(),
  "　　드럼　누나　　".trimmed(),
  "　소름　　　타결　".trimmed(),
  "나태　황무지　재가".trimmed(),
  "막　나사　관측　부".trimmed(),
  "신기루　　　이화장".trimmed()
];

var keys = [
  {
    label: "1",
    row: 0,
    col: 0,
    horizontal: "세 줄로 이루어진 시",
    vertical: "강, 호수의 하구에 형성되는 퇴적물의 집합체",
  },
  {
    label: "2",
    row: 0,
    col: 6,
    horizontal: "파밀리아의 성당을 건축한 스페인의 천재 건축가",
    vertical: "대대로 물려받는 집안의 생업",
  },
  {
    label: "3",
    row: 0,
    col: 8,
    vertical: "디디고 다닐 수 있게 드문드문 놓은 평평한 돌"
  },
  {
    label: "4",
    row: 1,
    col: 5,
    horizontal: "같이 사업을 함 또는 그 사업",
    vertical: "구리로 사람이나 동물의 형상을 만든 기념물"
  },
  {
    label: "5",
    row: 2,
    col: 0,
    horizontal: "어떤 사물이나 사람을 둘러싸고 있는 것 또는 그 환경",
  },
  {
    label: "6",
    row: 2,
    col: 1,
    vertical: "위험한 고비나 시기"
  },
  {
    label: "7",
    row: 2,
    col: 3,
    horizontal: "계급이나 신분이 낮은 사람이 예의나 규율을 무시하고 윗사람을 꺾고 오름"
  },
  {
    label: "8",
    row: 3,
    col: 1,
    horizontal: "도움이 되도록 이바지함"
  },
  {
    label: "9",
    row: 3,
    col: 2,
    vertical: "주로 사춘기에 얼굴에 도톨도톨하게 나는 검붉고 작은 종기"
  },
  {
    label: "10",
    row: 3,
    col: 6,
    horizontal: "맡아 관리하는 바 또는 그 범위",
    vertical: "바로크 초기 이후에 발달한 기악을 위한 독주곡 또는 실내악"
  },
  {
    label: "11",
    row: 4,
    col: 2,
    horizontal: "짧은 원통형의 서양 타악기"
  },
  {
    label: "12",
    row: 4,
    col: 5,
    horizontal: "남자 쪽에서 자기보다 나이가 위인 여자를 이르거나 부르는 말"
  },
  {
    label: "13",
    row: 5,
    col: 1,
    horizontal: "추위나 공포감을 느낄 때 살갗에 돋아나는 좁쌀 같은 것",
    vertical: "아주 짠 음식을 가리키는 경상도 말"
  },
  {
    label: "14",
    row: 5,
    col: 6,
    horizontal: "의견이 대립된 양편에서 서로 양보하여 일을 마무름"
  },
  {
    label: "15",
    row: 5,
    col: 7,
    vertical: "상관이 부하가 제출한 안건을 검토하여 허가하거나 승인함"
  },
  {
    label: "16",
    row: 6,
    col: 0,
    horizontal: "행동, 성격 따위가 느리고 게으름",
    vertical: "비 오는 날 진땅에서 신기 위해 목재로 깎아 만든 신"
  },
  {
    label: "17",
    row: 6,
    col: 3,
    horizontal: "손을 대어 거두지 않고 내버려 두어 거친 땅",
    vertical: "몽골 지방의 황토가 바람에 날려 온 하늘에 누렇게 끼는 현상"
  },
  {
    label: "18",
    row: 6,
    col: 5,
    vertical: "풍수설에 따라 집터나 묏자리 따위의 좋고 나쁨을 가려내는 사람"
  },
  {
    label: "19",
    row: 6,
    col: 7,
    horizontal: "안건을 검토하여 허가함"
  },
  {
    label: "20",
    row: 6,
    col: 8,
    vertical: "봉건 사회에서 가족에 대하여 절대적인 권력을 가진 사람"
  },
  {
    label: "21",
    row: 7,
    col: 2,
    horizontal: "미국 항공 우주국",
    vertical: "강이나 내, 또는 좁은 바닷목에서 배가 건너다니는 일정한 곳"
  },
  {
    label: "22",
    row: 7,
    col: 5,
    horizontal: "천체나 기상의 상태, 추이, 변화 따위를 관찰하여 측정하는 일"
  },
  {
    label: "23",
    row: 7,
    col: 6,
    vertical: "자세히 듣기 위해 귀를 기울임"
  },
  {
    label: "24",
    row: 8,
    col: 0,
    horizontal: "물체가 실제의 위치가 아닌 위치에서 보이는 현상"
  },
  {
    label: "25",
    row: 8,
    col: 6,
    horizontal: "조선 중기의 건물로 대한민국 초대 대통령 이승만이 거주하던 곳"
  }
];

Template.crossword.puzzle = (function() {
  var result = {};
  var i, j;
  for (i = 0; i < puzzle.length; i++) {
    result[i] = {};
    for (j = 0; j < puzzle[i].length; j++) {
      result[i][j] = {};
      result[i][j].letter = puzzle[i][j];
    }
  }
  for (i = 0; i < keys.length; i++) {
    var r = keys[i].row;
    var c = keys[i].col;
    result[r][c].label = keys[i].label;
    result[r][c].horizontal = keys[i].horizontal;
    result[r][c].vertical = keys[i].vertical;
  }
  return result;
})();

var range = 4 * 60;
var SESSION_KEY = "crossword-remaining";

Template.crossword.debug = function(remaining) {
  Session.set(SESSION_KEY, remaining);
};

Template.crossword.rendered = function () {
  Template.top.title('활동B');
  Template.top.desc('가로세로 낱말퍼즐');
  Session.set('nextPage', null);

  var remaining = Session.get(SESSION_KEY) || range;
  Session.set(SESSION_KEY, remaining);
  Template.timer.set(remaining, range);
  Template.timer.mute();

  var minutes = [1, 3];

  var timer = setInterval(function() {
    remaining = Session.get(SESSION_KEY) - 1;
    Session.set(SESSION_KEY, remaining);

    for (var i = 0; i < minutes.length; i++) {
      if (remaining === 60 * minutes[i]) {
        Template.timer.alert(minutes[i] + "분 남았습니다");
      }
    }

    if (remaining <= 0) {
      clearInterval(timer);
      Template.timer.mute();
      Meteor.Router.to("/activity1c");
      return;
    }

    Template.timer.set(remaining);
  }, 1000);
};

