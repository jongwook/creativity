appear = function() {
  var items = $(".appear").hide().toArray();
  var delay = 1000;
  if (items.length === 0) return;
  //$("#next-button").hide();

  var timer = setInterval(function step() {
    var item = items.shift();
    $(item).fadeIn();
    if (items.length == 0) {
      //$("#next-button").show();
      clearInterval(timer);
    }
    return step;
  }(), delay);
};
