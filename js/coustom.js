$(document).ready(function () {
  var list = $(".partners__ul li");
  var numToShow = 8;
  var button = $(".partners__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    if (isShowing) {
      list.slice(showing - 1, showing + numToShow).fadeIn(100, onFadeComplete);
    } else {
      list.slice(showing - numToShow, numInList).fadeOut(100, onFadeComplete);
    }
  });

  function onFadeComplete() {
    var nowShowing = list.filter(":visible").length;

    if (nowShowing == numInList && isShowing) {
      isShowing = false;
      button.text("Show less");
    } else if (isShowing) {
      button.text("Show more");
    }

    if (nowShowing == numToShow) {
      button.text("Show more");
      isShowing = true;
    }
  }
});

// ==========================

$(document).ready(function () {
  var list = $(".kuyakata__ul li");
  var numToShow = 8;
  var button = $(".kuyakata__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    if (isShowing) {
      list.slice(showing - 1, showing + numToShow).fadeIn(100, onFadeComplete);
    } else {
      list.slice(showing - numToShow, numInList).fadeOut(100, onFadeComplete);
    }
  });

  function onFadeComplete() {
    var nowShowing = list.filter(":visible").length;

    if (nowShowing == numInList && isShowing) {
      isShowing = false;
      button.text("Show less");
    } else if (isShowing) {
      button.text("Show more");
    }

    if (nowShowing == numToShow) {
      button.text("Show more");
      isShowing = true;
    }
  }
});
