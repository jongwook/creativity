
primaryRange = 15 * 60;
secondaryRange = 5 * 60;

var primaryRemaining = primaryRange;
var secondaryRemaining = secondaryRange;

Meteor.startup(function() {
  Template.timer.set(primaryRemaining, primaryRange);
});

var primaryMinutes = [1, 3, 6, 8, 10, 12, 13];
var secondaryMinutes = [1, 3];

var primaryDeps = new Deps.Dependency;
var secondaryDeps = new Deps.Dependency;

primary = function(value) {
  if (value !== undefined) {
    primaryDeps.changed();
    primaryRemaining = value;
  } else {
    primaryDeps.depend();
  }
  return primaryRemaining;
};

secondary = function(value) {
  if (value !== undefined) {
    secondaryDeps.changed();
    secondaryRemaining = value;
  } else {
    secondaryDeps.depend();
  }
  return secondaryRemaining;
};

var decrementPrimary = function() {
  primaryDeps.changed();
  primaryRemaining--;
};

var primaryFunction = function() {
  decrementPrimary();
  var remaining = primary();
  Template.timer.set(remaining, primaryRange);

  for (var i = 0; i < primaryMinutes.length; i++) {
    if (remaining === 60 * primaryMinutes[i]) {
      Template.timer.alert(primaryMinutes[i] + "분 남았습니다");
    }
  }

  if (remaining === 5 * 60) {
    pausePrimary();
    routeActivity();
    return;
  }

  if (remaining <= 0) {
    pausePrimary();
    Meteor.Router.to("/activity1d");
  }
};

var primaryTimer = null;

startPrimary = function() {
  if (primaryTimer === null) {
    primaryTimer = setInterval(primaryFunction, 1000);
  } else {
    console.log("Primary timer already started");
  }
};

pausePrimary = function() {
  if (primaryTimer !== null) {
    clearInterval(primaryTimer);
    primaryTimer = null;
  } else {
    console.log("No primary timer was running");
  }
};


var decrementSecondary = function() {
  secondaryDeps.changed();
  secondaryRemaining--;
};

var secondaryFunction = function() {
  decrementSecondary();
  var remaining = secondary();
  Template.timer.set(remaining, secondaryRange);

  for (var i = 0; i < secondaryMinutes.length; i++) {
    if (remaining === 60 * secondaryMinutes[i]) {
      //Template.timer.alert(secondaryMinutes[i] + "분 남았습니다");
    }
  }

  if (remaining <= 0) {
    pauseSecondary();
    routeAfterTimeout();
  }
};

var secondaryTimer = null;

startSecondary = function() {
  if (secondaryTimer === null) {
    secondaryTimer = setInterval(secondaryFunction, 1000);
  } else {
    console.log("Secondary timer already started");
  }
};

pauseSecondary = function() {
  if (secondaryTimer !== null) {
    clearInterval(secondaryTimer);
    secondaryTimer = null;
  } else {
    console.log("No secondary timer was running");
  }
};


switchToPrimary = function() {
  pauseSecondary();
  startPrimary();
  Template.timer.mute();
};

switchToSecondary = function() {
  pausePrimary();
  startSecondary();
  Template.timer.mute();
};

